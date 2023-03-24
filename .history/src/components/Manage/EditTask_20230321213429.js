import Modal from "./Modal"
import {useState} from 'react'
import './addTask.css'
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase.config";
import { motion } from "framer-motion";
import Loader from "../Loader";
import { MdCloudUpload, MdDelete, MdAttachMoney } from "react-icons/md";
import { categories, labEquipment } from "../../utils/data";

function EditTask({open, onClose, toEditTitle, toEditDescription, id}) {

  const [title, setTitle] = useState(toEditTitle)
  const [description, setDescription] = useState(toEditDescription)
  const [category, setCategory] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [imageAsset, setImageAsset] = useState(null);
  // const [fields, setFields] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(firestore, "foodItems", id);
    try{
      await updateDoc(taskDocRef, {
        title: title,
        description: description,
        imageURL: imageAsset,
        category: category,
        calories: calories,
        price: price,
      });
      onClose()
    } catch (err) {
      alert(err)
    }
    
  }

  return (
    <Modal modalLable="Edit Product" onClose={onClose} open={open}>
      <form
        onSubmit={handleUpdate}
        // onSubmit={handleSubmit}
        className="addTask"
        name="addTask"
      >
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}
        <div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-screen my-14"
          // data-aos="fade-up"
          // data-aos-duration="3000"
        >
          <div>
            <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-340 cursor-pointer rounded-lg">
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  {!imageAsset ? (
                    <>
                      <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                          <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                          <p className="text-gray-500 hover:text-gray-700">
                            Click here to upload
                          </p>
                        </div>
                        <input
                          type="file"
                          name="uploadimage"
                          accept="image/*"
                          // onChange={uploadImage}
                          className="w-0 h-0"
                          value
                        />
                      </label>
                    </>
                  ) : (
                    <>
                      <div className="relative h-full">
                        <img
                          src={imageAsset}
                          alt="uploaded items"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"
                          // onClick={deleteImage}
                        >
                          <MdDelete className="text-white" />
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
          <div>
            <p className="text-textColor font-semibold text-base md:text-lg m-2">
              <span className="text-xl text-blue-500">Description</span>{" "}
              <br></br>
            </p>
            <textarea
              className="block p-2.5 w-flex text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              cols="40"
              rows="13"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Product Decription"
              value={description}
            ></textarea>
          </div>
          <div>
            <div className="w-full">
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="outline-none w-flex text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
              >
                <option value="other" className="bg-white">
                  Select Category
                </option>
                {labEquipment &&
                  labEquipment.map((item) => (
                    <option
                      key={item.id}
                      className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                      value={item.urlParamName}
                    >
                      {item.urlParamName}
                    </option>
                  ))}
              </select>
            </div>
            <p className="text-textColor font-semibold text-base md:text-lg m-2">
              <span className="text-xl text-blue-500">Short Description</span>{" "}
              <br></br>
            </p>
            <div className="w-flex py-2 border-b border-gray-300 flex items-center gap-2">
              <textarea
                className="block p-2.5 w-flex text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                cols="23"
                rows="13"
                type="text"
                required
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                placeholder="Short Description"
              />
            </div>
          </div>
          <div>
            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              <p className="text-textColor font-semibold text-base md:text-lg m-12">
                <span className="text-xl text-blue-500">Title</span> <br></br>
              </p>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give me a title..."
                className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
              />
            </div>
          </div>
          <div>
            <p className="text-textColor font-semibold text-base md:text-lg m-12">
              <span className="text-xl text-blue-500">Price</span>
            </p>
            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              <MdAttachMoney className="text-gray-700 text-3xl" />
              <input
                type="text"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="w-flex h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              // onClick={saveDetails}
            >
              Done
            </button>
          </div>
          {/* <div>07</div> */}
        </div>
      </form>
      {/* <form onSubmit={handleUpdate} className="editTask">
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
          value={title}
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button type="submit">Edit</button>
      </form> */}
    </Modal>
  );
}

export default EditTask
