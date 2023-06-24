import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
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
  const [labReagents, setLabReagents] = useState([]);
  const [{ LabReagents, cartShow }, dispatch] = useStateValue();
  console.log("lab reagents", LabReagents);
  useEffect(() => {
    const labReagentsColRef = collection(firestore, "LabReagents");
    onSnapshot(labReagentsColRef, (snapshot) => {
      const updatedLabReagents = [];

      snapshot.forEach((doc) => {
        const labReagentData = doc.data();
        const subcollectionRef = collection(doc.ref, "details"); // Replace 'SubcollectionName' with the actual subcollection name within each document

        onSnapshot(subcollectionRef, (subSnapshot) => {
          const subcollectionData = [];

          subSnapshot.forEach((subDoc) => {
            subcollectionData.push(subDoc.data());
          });

          labReagentData.subcollectionData = subcollectionData;
          updatedLabReagents.push({
            id: doc.id,
            data: labReagentData,
          });

          setLabReagents(updatedLabReagents);
          dispatch({
            type: actionType.SET_LAB_REAGENTS,
            LabReagents: labReagents,
          });
        });
      });
    });
  }, []);
  return labReagents;
};  