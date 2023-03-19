import './task.css'
import {useState} from 'react'
import TaskItem from './TaskItem'
import EditTask from './EditTask'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import { firestore } from "../../firebase.config";
// import { useStateValue } from "../../context/StateProvider";
import { motion } from "framer-motion";

function Task({id, imageURL, title, calories, price, completed,description }) {
  // const [{ foodItems }, dispatch] = useStateValue();

  const [checked, setChecked] = useState(completed);
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
        completed: checked,
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
      // ref={rowContainer}
      className={` w-screen flex items-center gap-3  my-12 scroll-smooth  }`}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="w-auto h-[375px] min-w-[auto] md:w-flex md:min-w-[flex]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
        <div className="w-full flex h-fit items-center justify-between">
          <motion.div
            className="w-40 h-40 -mt-8 drop-shadow-2xl"
            whileHover={{ scale: 1.2 }}
          >
            <img
              src={imageURL}
              alt=""
              className="w-full h-full object-contain"
              // onClick={() => openModal(item)}
              variant="gradient"
            />
          </motion.div>
          {/* <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                  onClick={() => setItems([...cartItems, item])}
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div> */}
        </div>

        <div className="w-full flex flex-col items-end justify-end -mt-8">
          <p className="text-textColor font-semibold text-base md:text-lg">
            {title}
          </p>
          <p className="mt-1 text-sm text-gray-500">{calories}</p>
          <div className="w-flex flex flex-col justify-start items-center -mt-8">
            {/* <textarea name="description" id="" cols="30" rows="10"> */}
              {description}
            {/* </textarea> */}
          </div>
          <div className="flex items-center gap-8">
            <p className="text-lg text-headingColor font-semibold">
              <span className="text-sm text-blue-500">ksh</span> {price}
            </p>
          </div>
          {/* <button
                  type="button"
                  className="bg-gradient-to-br bg-blue-300 hover:bg-blue-900 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
                  // onClick={() => openModal(item)}
                >
                  Learn more <span className="font-bold">...</span>
                </button> */}
        </div>
        <div className="task__buttons">
          <div className="task__deleteNedit">
            <button
              className="task__editButton"
              onClick={() => setOpen({ ...open, edit: true })}
            >
              Edit
            </button>
            <button className="task__deleteButton" onClick={handleDelete}>
              Delete
            </button>
          </div>
          <button onClick={() => setOpen({ ...open, view: true })}>View</button>
        </div>
      </div>
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