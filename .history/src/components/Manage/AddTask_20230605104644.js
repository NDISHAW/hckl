import Modal from "./Modal"
import {useState} from 'react'
import './addTask.css'
import { firestore, storage } from "../../firebase.config";
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import Loader from "../Loader"
import { MdCloudUpload, MdDelete, MdAttachMoney, MdSave } from "react-icons/md";
import {getDownloadURL,deleteObject,ref,uploadBytesResumable,
} from "firebase/storage";
import { motion } from "framer-motion";
import { categories, labEquipment, labReagents } from "../../utils/data";
import { saveItem } from "../../utils/firebaseFunctions";


function AddTask({onClose, open}) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (
        !title ||
        !calories ||
        !imageAsset ||
        !price ||
        !category ||
        !description
      ) {
        setFields(true);
        setMsg("Required fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          description: description,
          calories: calories,
          qty: 1,
          price: price,
        };
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data Uploaded successfully 😊");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
        clearData();
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try AGain 🙇");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }

    // fetchData();
  };

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading : Try AGain 🙇");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded successfully 😊");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted successfully 😊");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(firestore, "foodItems"), {
        title: title,
        description: description,
        category: category,
        calories: calories,
        price: price,
        imageURL: imageAsset,

      });
      // onClose()
    } catch (err) {
      console.log(err);
      alert(err)
    }
  }
    const clearData = () => {
      setTitle("");
      setImageAsset(null);
      setDescription("");
      setCalories("");
      setPrice("");
      setCategory("Select Category");
    };

  return (
    <Modal modalLable="Add Product" onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className="addTask" name="addTask">
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
                          onChange={uploadImage}
                          className="w-0 h-0"
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
                          onClick={deleteImage}
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
              className="block p-2.5 w-flex text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              cols="40"
              rows="13"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Product Decription"
              value={description}
            ></textarea>
            <p className="text-textColor font-semibold text-base md:text-lg m-2">
              <span className="text-xl text-blue-500">Description Link</span>{" "}
              <br></br>
            </p>
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
                <option value={category} className="bg-white">
                  {category}{" "}
                </option>
                {labReagents &&
                  labReagents.map((item) => (
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
                className="block p-2.5 w-flex text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <p className="text-textColor font-semibold text-base md:text-lg m-12">
              <span className="text-xl text-blue-500">Price</span>
            </p>
            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              <MdAttachMoney className="text-blue-500 text-3xl" />
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
              onClick={saveDetails}
              // className="bg-gradient-to-br bg-green-600 hover:bg-green-400 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-white"
              className="bg-gradient-to-br bg-green-600 hover:bg-green-100 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-white hover:text-textColor "
            >
              <MdSave size={60} />
              Save
            </button>
          </div>
          {/* <div>07</div> */}

          {/* <form onSubmit={handleSubmit} className="addTask" name="addTask">
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value.toUpperCase())}
            value={title}
            placeholder="Enter title"
          />
          <input
            type="text"
            name="Category"
            onChange={(e) => setCategory(e.target.value.toUpperCase())}
            value={category}
            placeholder="Enter Category"
          />
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task decription"
            value={description}
          ></textarea>
          <button type="submit">Done</button>
        </form> */}
        </div>
      </form>
    </Modal>
  );
}

export default AddTask
