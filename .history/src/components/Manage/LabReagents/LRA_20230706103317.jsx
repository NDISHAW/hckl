import "../task.css";
import { useState } from "react";
import TaskItem from "../TaskItem";
import EditTask from "../EditTask";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "../../../firebase.config";
// import { useStateValue } from "../../context/StateProvider";
import { motion } from "framer-motion";
import { MdDelete, MdEdit, MdDeleteOutline } from "react-icons/md";
import EditLra from "./EditLra";

function LRA({
  id,
  Method,
  SubCartegory,
  Parameter,
  Substrate,
  Species,
  category,
  subcollectionData,
}) {
  // const [{ foodItems }, dispatch] = useStateValue();

  // const [checked, setChecked] = useState(completed);
  const [open, setOpen] = useState({ edit: false, view: false });

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

  return (
    <div
      className="grid grid-cols-4 gap-4 w-screen my-14"
      // data-aos="fade-up"
      // data-aos-duration="3000"
    >
      <div className="w-40 h-100vh -mt-8 drop-shadow-2xl">
        <motion.div
          className="w-40 h-100 -mt-8 drop-shadow-2xl"
          whileHover={{ scale: 1.8 }}
        ></motion.div>
        <p className="text-textColor font-semibold text-base md:text-lg m-12">
          <span className="text-xl text-blue-500">Category</span> <br></br>{" "}
          {category}
        </p>
        <p className="text-lg text-headingColor font-semibold m-14">
          <span className="text-xl text-blue-500 flex-auto">Method</span>{" "}
          {Method}
        </p>        
      </div>
      <div>
        {" "}
        <p className="text-textColor font-semibold text-base md:text-lg">
          <span className="text-xl text-blue-500">SubCartegory</span> <br></br>{" "}
          {SubCartegory}
        </p>
        <p className="mt-12 text-textColor  font-semibold text-base md:text-lg ">
          <span className="text-xl text-blue-500 m-1">Parameter</span> <br></br>
          {Parameter}
        </p>
        <p className="mt-12 text-textColor  font-semibold text-base md:text-lg ">
          <span className="text-xl text-blue-500 m-1">Species</span> <br></br>
          {Species}
        </p>
      </div>

      <div>
        {subcollectionData && (
          <div>
            <table>
              <thead>
                <tr>
                  <th>
                    <span className="text-xl text-blue-500 m-1">lgClass:</span>
                  </th>
                  <th>
                    <span className="text-xl text-blue-500 m-1">Format:</span>
                  </th>
                </tr>
              </thead>
              {subcollectionData.map((detail) => (
                <tbody className="text-xl px-4">
                  <tr>
                    <td key={detail.id}>{detail.lgClass}</td>
                    <td key={detail.id}>{detail.Format}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1">
        <div>
          <button
            className="bg-gradient-to-br bg-blue-300 hover:bg-blue-900 w-auto md:w-auto px-9 py-8  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 justify-items-center"
            onClick={() => setOpen({ ...open, edit: true })}
          >
            <MdEdit size={60} />{" "}
            <h2 className="font-bold text-xl py-5 text-white">Edit</h2>
          </button>
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
        {/* <button
          className="bg-gradient-to-br bg-blue-300 hover:bg-blue-900 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          onClick={() => setOpen({ ...open, view: true })}
        >
          View
        </button> */}
      </div>
      <div></div>
      <div></div>
      <div></div>

      {/* {open.view && (
        <TaskItem
          onClose={handleClose}
          title={calories}
          description={description}
          open={open.view}
        />
      )} */}

      {open.edit && (
        <EditLra
          onClose={handleClose}
          toEditTitle={category}
          toEditDescription={SubCartegory}
          toEditCategory={Parameter}
          toEditCalories={Substrate}
          toEditPrice={Species}
          // toEditImageAsset={imageURL}
          open={open.edit}
          id={id}
        />
      )}
    </div>
  );
}

export default LRA;
