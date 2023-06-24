import React, { useState, useEffect } from "react";
import "./taskManager.css";
import Task from "./Task";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebase.config";
import AddTask from "./AddTask";
import { useStateValue } from "../../context/StateProvider";
import { MdAddBox } from "react-icons/md";
import NotFound from "../../img/NotFound.svg";
import Loader from "../Loader";
function TaskManager({ color }) {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openTab, setOpenTab] = React.useState(1);
  const [filter, setFilter] = useState("LE_Hematology");
  const [category, setCategory] = useState("Hematology");
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

  return (
    <div className="taskManager">
      {/* Navigation */}
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
              setFilter("LE_Hematology");
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
              setFilter("LE_Rhematology");
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
            Microscopes
          </a>
        </li>
      </ul>
      <button
        className="bg-gradient-to-br bg-blue-300 hover:bg-blue-900 w-flex md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        onClick={() => setOpenAddModal(true)}
      >
        <p className="text-white font-bold text-base md:text-lg m-1">
          <MdAddBox size={60} color="green" />
          <span className="text-xl text-blue-500">Add Product</span>
        </p>
      </button>
      <div className="taskManager__container">
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

      {openAddModal && (
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal} />
      )}
    </div>
  );
}

export default TaskManager;
