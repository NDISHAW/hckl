import React, { useState, useEffect } from "react";
import "../taskManager.css";
import LRA from "./LRA";
import {
  collection,
  query,
  orderBy,
  onSnapshot, updateDoc, deleteDoc,doc,
  getDocs,
} from "firebase/firestore";
import { firestore } from "../../../firebase.config";
import AddTask from "../AddTask";
import { useStateValue } from "../../../context/StateProvider";
import { MdAddBox, MdDelete, MdEdit } from "react-icons/md";
import NotFound from "../../../img/NotFound.svg";
import Loader from "../../Loader";
import { labEquipment, labReagents } from "../../../utils/data";
import {motion} from "framer-motion";
// import LabReagents from "./LabReagents/LabReagents";

export default function LabReagents() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openTab, setOpenTab] = React.useState(1);
  const [filter, setFilter] = useState("LE_Hematology");
  const [category, setCategory] = useState("Hematology");
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState({ edit: false, view: false });

  /* function to get all tasks from firestore in realtime */
  // useEffect(() => {
  //   const taskColRef = query(
  //     collection(firestore, "LabReagents"),
  //     orderBy("id")
  //   );
  //   onSnapshot(taskColRef, (snapshot) => {
  //     setTasks(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     );
  //     console.log("setTasks", tasks);
  //   });
  // }, []);

    const handleClose = () => {
      setOpen({ edit: false, view: false });
    };

    /* function to update firestore */
    const handleChange = async () => {
      const taskDocRef = doc(firestore, "LabReagents", id);
      console.log(taskDocRef);
      try {
        await updateDoc(taskDocRef, {
          // completed: checked,
        });
      } catch (err) {
        alert(err);
      }
    };

    /* function to delete a document from firstore */
    const handleDelete = async () => {
      const taskDocRef = doc(firestore, "LabReagents", id);
      try {
        await deleteDoc(taskDocRef);
      } catch (err) {
        alert(err);
      }
    };
  useEffect(() => {
    const fetchLabReagents = async () => {
      const labReagentsColRef = collection(firestore, "LabReagents");
      const labReagentsSnapshot = await getDocs(labReagentsColRef);

      const updatedLabReagents = [];
      console.log(updatedLabReagents);
      for (const doc of labReagentsSnapshot.docs) {
        const labReagentData = doc.data();
        const subcollectionRef = collection(doc.ref, "details");
        const subcollectionSnapshot = await getDocs(subcollectionRef);
        const subcollectionData = subcollectionSnapshot.docs.map((subDoc) =>
          subDoc.data()
        );

        labReagentData.subcollectionData = subcollectionData;
        updatedLabReagents.push({
          id: doc.id,
          data: labReagentData,
        });
      }

      setTasks(updatedLabReagents);

    };

    fetchLabReagents();
  }, []);
  console.log("tasks",tasks);
  return (
    <div className="taskManager__container">
      <div className="grid">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => {
            const id = task.id;
            
          ))
        ) : (
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-xl text-headingColor font-semibold my-2">
              {/* Loading .... <Loader /> */}
              <img src={NotFound} alt="img" className="h-340" />
            </p>
          </div>
        )}
      </div>
      {/* {open.view && (
        <TaskItem
          onClose={handleClose}
          title={calories}
          description={description}
          open={open.view}
        />
      )}

      {open.edit && (
        <EditTask
          onClose={handleClose}
          toEditTitle={calories}
          toEditDescription={description}
          toEditCategory={category}
          toEditCalories={calories}
          toEditPrice={price}
          toEditImageAsset={imageURL}
          open={open.edit}
          id={id}
        />
      )} */}
    </div>
  );
}
