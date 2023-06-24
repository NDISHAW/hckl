import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

// Saving new LabReagent
export const saveLabReagent = async (data) => {
  await setDoc(doc(firestore, "LabReagents", `${Date.now()}`), data, {
    merge: true,
  });
};

// getall food items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};

// // getall LabReagents
// export const getAllLabReagents = async () => {
//   const items = await getDocs(
//     query(collection(firestore, "LabReagents"), orderBy("id", "desc"))
//   );

//   return items.docs.map((doc) => doc.data());
// };

export const getAllLabReagents = async () => {
  const labReagentsColRef = collection(firestore, "LabReagents");
  const labReagentsSnapshot = await getDocs(
    query(labReagentsColRef, orderBy("id", "desc"))
  );

  const labReagents = [];

  for (const doc of labReagentsSnapshot.docs) {
    const labReagentData = doc.data();
    const subcollectionRef = collection(doc.ref, "SubcollectionName"); // Replace 'SubcollectionName' with the actual subcollection name within each document

    const subcollectionSnapshot = await getDocs(subcollectionRef);
    const subcollectionData = subcollectionSnapshot.docs.map((subDoc) =>
      subDoc.data()
    );

    labReagentData.subcollectionData = subcollectionData;
    labReagents.push({
      id: doc.id,
      data: labReagentData,
    });
  }
  