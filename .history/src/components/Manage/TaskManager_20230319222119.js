import './taskManager.css'
import Task from './Task'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import { firestore } from "../../firebase.config";
import AddTask from './AddTask'
import { useStateValue } from "../../context/StateProvider";

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
      <header>Task Manager</header>
      <div className="taskManager__container">
        <button onClick={() => setOpenAddModal(true)}>Add Product  + </button>
        <div className="">
          {tasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              // completed={task.data.completed}
              calories={task.data.calories}
              description={task.data.description}
              category={task.data.category}
              price={task.data.price}
              imageURL={task.data.imageURL}
              // price={task.data.price}
              category={task.data.category}
            />
          ))}
        </div>
      </div>

      {openAddModal && (
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal} />
      )}
    </div>
  );
}

export default TaskManager
