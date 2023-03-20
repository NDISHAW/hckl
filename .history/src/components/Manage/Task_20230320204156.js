import './task.css'
import {useState} from 'react'
import TaskItem from './TaskItem'
import EditTask from './EditTask'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import { firestore } from "../../firebase.config";
// import { useStateValue } from "../../context/StateProvider";
import { motion } from "framer-motion";

function Task({ id, imageURL, title, calories, price, category, description }) {
  // const [{ foodItems }, dispatch] = useStateValue();

  // const [checked, setChecked] = useState(completed);
  const [open, setOpen] = useState({ edit: false, view: false });

  const handleClose = () => {
    setOpen({ edit: false, view: false });
  };

  /* function to update firestore */
  const handleChange = async () => {
    const taskDocRef = doc(firestore, "foodItems", id);
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
    const taskDocRef = doc(firestore, "foodItems", id);
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div
      className="grid grid-cols-4 gap-4 w-screen my-14"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="w-40 h-100vh -mt-8 drop-shadow-2xl">
        <motion.div
          className="w-40 h-100 -mt-8 drop-shadow-2xl"
          whileHover={{ scale: 1.8 }}
        >
          <img
            src={imageURL}
            alt=""
            className="w-full h-full object-contain"
            // onClick={() => openModal(item)}
            variant="gradient"
          />
        </motion.div>
        <p className="text-textColor font-semibold text-base md:text-lg m-12">
          <span className="text-xl text-blue-500">Category</span> <br></br>{" "}
          {category}
        </p>
        <p className="text-lg text-headingColor font-semibold m-14">
          <span className="text-xl text-blue-500">ksh</span> {price}
        </p>
      </div>
      <div>
        {" "}
        <p className="text-textColor font-semibold text-base md:text-lg">
          <span className="text-xl text-blue-500">Title</span> <br></br> {title}
        </p>
        <p className="text-textColor font-semibold text-base md:text-lg"></p>
        <span className="text-xl text-blue-500 m-1">Rate</span> <br></br>
        <p className="mt-1 text-sm text-textColor">{calories}</p>
      </div>
      <div>
        <span className="text-xl text-blue-500">Description</span> <br></br>
        <textarea name="description" edit="false" id="" cols="30" rows="10">
          {description}
        </textarea>
      </div>
      <div className="flex-cols">
        <button
          className="bg-gradient-to-br bg-blue-300 hover:bg-blue-900 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          onClick={() => setOpen({ ...open, edit: true })}
        >
          Edit
        </button>
        <button
          className="bg-gradient-to-br bg-red-300 hover:bg-red-600 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="bg-gradient-to-br bg-blue-300 hover:bg-blue-900 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          onClick={() => setOpen({ ...open, view: true })}
        >
          View
        </button>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>

      {open.view && (
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
          open={open.edit}
          id={id}
        />
      )}
    </div>
  );
}

export default Task