import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "./firebase";
// import OpenAI from 'openai';
import axios from "axios";

const WHISPER_API_KEY = import.meta.env.VITE_WHISPER_API_KEY;
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

// const client = new OpenAI({ apiKey: OPENAI_API_KEY });

const userId = localStorage.getItem("userId");
const username = JSON.parse(localStorage.getItem("user"))?.username;

// const splitText = (text) => {
//   console.log('first', text)
//   // const chunks = [];
//   // const chunkSize = 1024; // Adjust size based on your requirements
//   // for (let i = 0; i < text.length; i += chunkSize) {
//   //   chunks.push(text.substring(i, i + chunkSize));
//   // }
//   // return chunks;
//   return text;
// }

const generateSummary = async (text) => {
  // const inputChunks = splitText(text);
  const outputChunks = [];

  const response = await axios.post(
    "https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions",
    {
      prompt: `This is a patient-doctor interaction in Malayalam/English. Convert this into the following format under the below sub-headings:
       (1) Patient Complaint (2) Findings (3) Further Investigations (4) Advice.
       All notes have to be in proper English: ${text}`,
    
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
    }
  );

  // for (const chunk of inputChunks) {
  //   const response = await client.completions.create({
  //     engine: 'davinci',
  //     prompt: `Please summarize the following text:\n${chunk}\n\nSummary:,`,
  //     temperature: 0.5,
  //     max_tokens: 1024,
  //     n: 1,
  //     stop: null,
  //   });

  //   const summary = response.choices0.text.trim();
  //   outputChunks.push(summary);
  // }

  return response?.data?.choices?.[0]?.text ?? "Summary N/A";
};

export const uploadAudio = async (file, objectData, fileName) => {
  const storageRef = ref(storage, fileName ?? "audio");
  const metadata = {
    customMetadata: {
      userId: userId,
      fileName: fileName ?? "audio",
    },
  };

  await uploadBytes(storageRef, file, metadata).then(async (snapshot) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${WHISPER_API_KEY}`);

    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("language", "malayalam");
    formdata.append("response_format", "json");
    formdata.append("speaker_labels", true);
    formdata.append("translate", true);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    await fetch(
      "https://api.lemonfox.ai/v1/audio/transcriptions",
      requestOptions
    )
      .then((response) => response.json())
      .then(async (result) => {
        const downloadURL = await getDownloadURL(snapshot.ref);

        const generate_summary = await generateSummary(result.text);

        await addDoc(collection(db, "patient"), {
          url: downloadURL,
          userId: userId,
          username: username ?? "Unknown",
          createdAt: new Date(),
          transcript: result.text,
          summary: generate_summary,
          ...objectData,
        });
        console.log("first", result);
      })
      .catch((error) => console.error(error));
  });
};
