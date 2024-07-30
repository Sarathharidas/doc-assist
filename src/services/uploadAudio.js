import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "./firebase";
// import OpenAI from 'openai';
import axios from "axios";

const OPENAI_API_KEY = import.meta.env.OPENAI_API_KEY;

// const client = new OpenAI({ apiKey: OPENAI_API_KEY });

const userId = localStorage.getItem("userId");

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
    'https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions',
    {
      prompt: `Summarize in short : ${text}`,
      max_tokens: 100,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
    }
  );

  console.log("openai response", response)

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

  return response?.data?.choices?.[0]?.text ?? 'Summary N/A';
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
    myHeaders.append(
      "Authorization",
      "Bearer IUQ04fFbryRahjHkV7eHBVpXw5KAxV62"
    );

    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("language", "english");
    formdata.append("response_format", "json");

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
          createdAt: new Date(),
          transcript: result.text,
          summary: generate_summary,
          ...objectData,
        });
        console.log('first', result)
      })
      .catch((error) => console.error(error));
  });
};
