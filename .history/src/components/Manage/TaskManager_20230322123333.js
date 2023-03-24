import './taskManager.css'
import Task from './Task'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import { firestore } from "../../firebase.config";
import AddTask from './AddTask'
import { useStateValue } from "../../context/StateProvider";
import { MdAddBox } from "react-icons/md";
import NotFound from "../../";
function TaskManager() {

  const [openAddModal, setOpenAddModal] = useState(false)
  const [tasks, setTasks] = useState([])
  console.log(tasks);
  // const [{ foodItems }, dispatch] = useStateValue();

  /* function to get all tasks from firestore in realtime */ 
  useEffect(() => {
    const taskColRef = query(
      collection(firestore, "foodItems"),
      orderBy("id", "desc")
    );
    onSnapshot(taskColRef, (snapshot) => {
      setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
        
      })))
      
    })
    
  },[])

  return (
    <div className="taskManager">
      <button
        className="bg-gradient-to-br bg-blue-300 hover:bg-blue-900 w-flex md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        onClick={() => setOpenAddModal(true)}
      >
        <p className="text-white font-bold text-base md:text-lg m-1">
          <MdAddBox size={60} color="green"/>
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
              <img src={NotFound} alt="img" className="h-340" />
              <p className="text-xl text-headingColor font-semibold my-2">
                Items Not Available
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

export default TaskManager
