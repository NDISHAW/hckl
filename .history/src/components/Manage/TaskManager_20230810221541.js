import React, { useState, useEffect } from "react";
import "./taskManager.css";
import Task from "./Task";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs} from "firebase/firestore";
import { firestore } from "../../firebase.config";
import AddTask from "./AddTask";
import { useStateValue } from "../../context/StateProvider";
import { MdAddBox } from "react-icons/md";
import NotFound from "../../img/NotFound.svg";
import Loader from "../Loader";
import { labEquipment, labReagents } from "../../utils/data";
import LabReagents from "./LabReagents/LabReagents";
import LRA from "./LabReagents/LRA";
import EditLra from "./LabReagents/EditLra";
import AddLra from "./LabReagents/AddLra";
import Veterenary from "./Veterenary/Veterenary";
function TaskManager({ color }) {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [ openAddLraModal,setOpenAddLraModal] = useState(false);
  const [openTab, setOpenTab] = React.useState(1);
  const [filter, setFilter] = useState("LE_Hematology");
  const [category, setCategory] = useState([]);
  const [vete, setVete] = useState([]);
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  // const [{ foodItems }, dispatch] = useStateValue();

  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const taskColRef = query(
      collection(firestore, "foodItems"),
      orderBy("id", "desc")
    );
    onSnapshot(taskColRef, (snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  //   useEffect(() => {
  //   const filterColRef = query(
  //     collection(firestore, "LabReagents"),
  //     orderBy("id", "desc")
  //   );
  //   onSnapshot(filterColRef, (snapshot) => {
  //     setCategory(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     );
  //   });
  // }, []);
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

      setCategory(updatedLabReagents);
    };

    fetchLabReagents();
  }, []);
  const fetchVet = async () => {
      const items = await getDocs(
        query(collection(firestore, "Vet"), )
      );       
      return items.docs.map((doc) => doc.data());
    };
      const fetchData = async () => {
        await fetchVet().then((data) => {
          // console.log(data);
          setVete(data);
           console.log("=================fetchVet===================");
           console.log(data);
           console.log("=============Done=======================");
          // dispatch({
          //   type: actionType.SET_FOOD_ITEMS,
          //   foodItems: data,
          // });
        });
      };
        useEffect(() => {
          fetchData();          
        }, []);

  return (
    <div className="taskManager">
      {/* Navigation Bar For Components */}
      <ul
        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
        role="tablist"
      >
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
          <a
            className={
              "text-lg font-bold uppercase px-5 py-1 shadow-lg rounded block leading-normal " +
              (openTab === 1
                ? "text-white bg-blue-400"
                : "text-" + color + "-600 bg-white")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
              // setFilter("LE_Hematology");
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            Laboratory Equipment
          </a>
        </li>
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-lg font-bold uppercase px-5 py-1 shadow-lg rounded block leading-normal " +
              (openTab === 2
                ? "text-white bg-blue-400"
                : "text-" + color + "-600 bg-white")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
              // setFilter("LE_Rhematology");
            }}
            data-toggle="tab"
            href="#link2"
            role="tablist"
          >
            Laboratory Reagents
          </a>
        </li>
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-lg font-bold uppercase px-5 py-1 shadow-lg rounded block leading-normal " +
              (openTab === 3
                ? "text-white bg-blue-400"
                : "text-" + color + "-600 bg-white")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(3);
              setFilter("LE_Rhematology");
            }}
            data-toggle="tab"
            href="#link3"
            role="tablist"
          >
            Veterenary
          </a>
        </li>
      </ul>

      {/* Lab */}
      <div className="tab-content tab-space">
        {/* Tab 1 Lab Equipment */}
        <div
          className={
            openTab === 1
              ? "w-full  flex items-center justify-start lg:justify-center gap-8 py-1 overflow-x-scroll-none"
              : "hidden"
          }
          id="link1"
        >
          <div className="taskManager__container">
            <button
              className="bg-gradient-to-br bg-blue-300 hover:bg-blue-900 w-flex md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
              onClick={() => setOpenAddModal(true)}
            >
              <p className="text-white font-bold text-base md:text-lg m-1">
                <MdAddBox size={60} color="green" />
                <span className="text-xl text-blue-500">Add Product</span>
              </p>
            </button>
            <div className="grid">
              {tasks && tasks.length > 0 ? (
                tasks.map((task) => (
                  <Task
                    id={task.id}
                    key={task.id}
                    title={task.data.title}
                    calories={task.data.calories}
                    description={task.data.description}
                    category={task.data.category}
                    price={task.data.price}
                    imageURL={task.data.imageURL}
                    // price={task.data.price}
                    // category={task.data.category}
                  />
                ))
              ) : (
                <div className="w-full flex flex-col items-center justify-center">
                  <p className="text-xl text-headingColor font-semibold my-2">
                    Loading .... <Loader />
                    <img src={NotFound} alt="img" className="h-340" />
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tab 2 Lab Reagents */}
      <div className="tab-content tab-space">
        <div
          className={
            openTab === 2
              ? "w-full  flex items-center justify-start lg:justify-center gap-8 py-1 overflow-x-scroll"
              : "hidden"
          }
          id="link2"
        >
          <div className="taskManager__container">
            <button
              className="bg-gradient-to-br bg-blue-300 hover:bg-blue-900 w-flex md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
              onClick={() => setOpenAddLraModal(true)}
            >
              <p className="text-white font-bold text-base md:text-lg m-1">
                <span className="text-xl text-blue-500">
                  <MdAddBox size={60} color="green" />
                  Add Lab Reagent
                </span>
              </p>
            </button>
            <div className="grid">
              {category && category.length > 0 ? (
                category.map((task) => (
                  <LRA
                    id={task.id}
                    key={task.id}
                    Method={task.data.Method}
                    SubCartegory={task.data.SubCartegory}
                    Parameter={task.data.Parameter}
                    Substrate={task.data.Substrate}
                    Species={task.data.Species}
                    category={task.data.category}
                    subcollectionData={task.data.subcollectionData}
                    // category={task.data.category}
                  />
                ))
              ) : (
                <div className="w-full flex flex-col items-center justify-center">
                  <p className="text-xl text-headingColor font-semibold my-2">
                    Loading .... <Loader />
                    <img src={NotFound} alt="img" className="h-340" />
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* <LabReagents/> */}
        </div>
      </div>
      <div className="tab-content tab-space">
        <div
          className={
            openTab === 3
              ? "w-full  flex items-center justify-start lg:justify-center gap-8 py-1 overflow-x-scroll"
              : "hidden"
          }
          id="link3"
        >
          <div className="taskManager__container">
            <button
              className="bg-gradient-to-br bg-blue-300 hover:bg-blue-900 w-flex md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
              onClick={() => setOpenAddLraModal(true)}
            >
              <p className="text-white font-bold text-base md:text-lg m-1">
                <span className="text-xl text-blue-500">
                  <MdAddBox size={60} color="green" />
                  Add Lab Reagent
                </span>
              </p>
            </button>
            <div className="grid">
              {category && category.length > 0 ? (
                category.map((task) => (
                  <Veterenary
                    id={task.id}
                    key={task.id}
                    Method={task.data.Method}
                    SubCartegory={task.data.SubCartegory}
                    Parameter={task.data.Parameter}
                    Substrate={task.data.Substrate}
                    Species={task.data.Species}
                    category={task.data.category}
                    subcollectionData={task.data.subcollectionData}
                    // category={task.data.category}
                  />
                ))
              ) : (
                <div className="w-full flex flex-col items-center justify-center">
                  <p className="text-xl text-headingColor font-semibold my-2">
                    Loading .... <Loader />
                    <img src={NotFound} alt="img" className="h-340" />
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {openAddModal && (
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal} />
      )}
      {openAddLraModal && (
        <AddLra
          onClose={() => setOpenAddLraModal(false)}
          open={openAddLraModal}
        />
      )}
      {/* {openAddModal && (
        <EditLra
          onClose={() => setOpenEditReagent(false)}
          open={openEditReagent}
          subcollectionData={tasks.data.subcollectionData}
        />
      )} */}
    </div>
  );
}

export default TaskManager;
