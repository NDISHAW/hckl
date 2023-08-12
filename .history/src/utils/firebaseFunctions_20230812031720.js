import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { firestore } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

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


export const getAllLabReagents = async () => {
  const labReagentsSnapshot = await getDocs(
    query(collection(firestore, "LabReagents"), orderBy("id", "desc"))
  );

  return labReagentsSnapshot.docs.map((doc) => {
    const labReagentData = doc.data();
    labReagentData.details =  getLabReagentDetails(doc.ref);
    return labReagentData;
  });
};

const getLabReagentDetails = async (labReagentRef) => {
  const detailsSnapshot = await getDocs(collection(labReagentRef, "details"));
  return detailsSnapshot.docs.map((doc) => doc.data());
};
// console.log(getAllLabReagents());

// export const getAllLabReagents = async () => {
//   const labReagentsSnapshot = await getDocs(
//     query(collection(firestore, "LabReagents"), orderBy("id", "desc"))
//   );

//   const labReagentsData = labReagentsSnapshot.docs.map((doc) => doc.data());

//   return labReagentsData;
// };
// // getall LabReagents
// export const getAllLabReagents = async () => {
//   const items = await getDocs(
//     query(collection(firestore, "LabReagents"), orderBy("id", "desc"))
//   );

//   return items.docs.map((doc) => doc.data());
// };

// export const getAllLabReagents = async () => {
//   const labReagentsColRef = collection(firestore, "LabReagents");
//   const labReagentsSnapshot = await getDocs(
//     query(labReagentsColRef, orderBy("id", "desc"))
//   );

//   return labReagentsSnapshot.docs.map((doc) => doc.data());
// };
// export const getAllLabReagents = async () => {
//   const [labReagents, setLabReagents] = useState([]);
//   const [{ LabReagents, }, dispatch] = useStateValue();
//   console.log("lab reagents", LabReagents);
//   useEffect(() => {
//     const labReagentsColRef = collection(firestore, "LabReagents");
//     onSnapshot(labReagentsColRef, (snapshot) => {
//       const updatedLabReagents = [];

//       snapshot.forEach((doc) => {
//         const labReagentData = doc.data();
//         const subcollectionRef = collection(doc.ref, "details"); // Replace 'SubcollectionName' with the actual subcollection name within each document

//         onSnapshot(subcollectionRef, (subSnapshot) => {
//           const subcollectionData = [];

//           subSnapshot.forEach((subDoc) => {
//             subcollectionData.push(subDoc.data());
//           });

//           labReagentData.subcollectionData = subcollectionData;
//           updatedLabReagents.push({
//             id: doc.id,
//             data: labReagentData,
//           });

//           setLabReagents(updatedLabReagents);
//           dispatch({
//             type: actionType.SET_LAB_REAGENTS,
//             LabReagents: labReagents,
//           });
//         });
//       });
//     });
//   }, []);
//   return labReagents;
// };  