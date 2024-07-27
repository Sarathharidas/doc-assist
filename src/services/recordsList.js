import {
  collection,
  getDocsFromServer,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";
/**
 * Retrieves a list of patient records from the Firestore database.
 * @returns {Promise<Array>} A promise that resolves to an array of patient records.
 * Each record is an object with an 'id' property and the merged data from the Firestore document.
 * @throws {Error} If there is an error retrieving the documents from the Firestore database.
 */
export const recordsList = async (userId) => {
  // Retrieve the documents from the 'patient' collection in the Firestore database

  const patientRef = collection(db, "patient");
  const q = query(patientRef, where("userId", "==", userId));

  const response = await getDocsFromServer(q)
    .then((querySnapshot) => {
      // Create an empty array to store the patient records
      const dataList = [];

      // Iterate over each document in the query snapshot
      querySnapshot.forEach((doc) => {
        // Add the document's ID and merged data to the dataList array
        dataList.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      // Return the dataList array
      return dataList;
    })
    .catch((error) => {
      // Log the error if there is an error retrieving the documents from the Firestore database
      console.log("Error getting documents: ", error);
    });

  // Return the promise that resolves to the dataList array
  return response;
};
