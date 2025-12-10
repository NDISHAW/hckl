import React, { useState, useEffect } from "react";
import "../taskManager.css";
import LRA from "./LRA";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
  doc,
deleteDoc
} from "firebase/firestore";
import { firestore } from "../../../firebase.config";
import AddTask from "../AddTask";
import { useStateValue } from "../../../context/StateProvider";
import { MdAddBox, MdDelete } from "react-icons/md";
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
  /* function to delete a document from firstore */
  const handleDelete = async () => {
    let id = filter
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
  console.log("tasks", tasks);
  return (
    <div className="taskManager__container">
      <div className="grid">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <div
              className="grid grid-cols-4 gap-4 w-screen my-14"
              key={task.id}
              // data-aos="fade-up"
              // data-aos-duration="3000"
            >
              <div className="w-40 h-100vh -mt-8 drop-shadow-2xl">
                <motion.div
                  className="w-40 h-100 -mt-8 drop-shadow-2xl"
                  whileHover={{ scale: 1.8 }}
                >
                  
                </motion.div>
                <p className="text-textColor font-semibold text-base md:text-lg m-12">
                  <span className="text-xl text-blue-500">Category</span>{" "}
                  <br></br> {task.data.category}
                </p>
                <p className="text-lg text-headingColor font-semibold m-14">
                  <span className="text-xl text-blue-500">Method</span>{" "}
                  {task.data.Method}
                </p>
              </div>
              <div>
                {" "}
                <p className="text-textColor font-semibold text-base md:text-lg">
                  <span className="text-xl text-blue-500">SubCartegory</span>{" "}
                  <br></br> {task.data.SubCartegory}
                </p>
                <p className="mt-12 text-textColor  font-semibold text-base md:text-lg ">
                  <span className="text-xl text-blue-500 m-1">Parameter</span>{" "}
                  <br></br>
                  {task.data.Parameter}
                </p>
              </div>
              <div>
                {" "}
                <p className="text-textColor font-semibold text-base md:text-lg">
                  <span className="text-xl text-blue-500">Substrate</span>{" "}
                  <br></br> {task.data.Substrate}
                </p>
                <p className="mt-12 text-textColor  font-semibold text-base md:text-lg ">
                  <span className="text-xl text-blue-500 m-1">Species</span>{" "}
                  <br></br>
                  {task.data.Species}
                </p>
              </div>
              <div>
            {detail && (
              <div>
                <h3>Details:</h3>
                <ul>
                  {detail.map((detail) => (
                    <li key={detail.id}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
              <div>
                <button
                  className="bg-gradient-to-br bg-red-300 hover:bg-red-600 w-auto md:w-auto px-9 py-8  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 justify-items-center"
                  onClick={handleDelete}
                >
                  <MdDelete size={60} />{" "}
                  <h2 className="font-bold text-xl py-5 text-white">Delete</h2>
                </button>
              </div>
            </div>
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
    </div>
  );
}
