import Modal from "../Modal"
import {useState} from 'react'
import '../addTask.css'
import { doc, updateDoc } from "firebase/firestore";
import { firestore, storage } from "../../../firebase.config";
import { motion } from "framer-motion";
import Loader from "../../Loader";
import { MdCloudUpload,MdSave, MdDelete, MdAttachMoney } from "react-icons/md"; 
import { categories, labReagents,labEquipment } from "../../../utils/data";
import {
  getDownloadURL,
  deleteObject,
  ref,
  uploadBytesResumable,
} from "firebase/storage";



function EditLra({
  open,
  onClose,
  toEditTitle,
  toEditDescription,
  toEditCategory,
  toEditCalories,
  toEditPrice,
  toEditImageAsset,
  id,
}) {
  const [title, setTitle] = useState(toEditTitle);
  const [description, setDescription] = useState(toEditDescription);
  const [category, setCategory] = useState(toEditCategory);
  const [calories, setCalories] = useState(toEditCalories);
  const [price, setPrice] = useState(toEditPrice);
  const [imageAsset, setImageAsset] = useState(toEditImageAsset);
  // const [fields, setFields] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);

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

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault();
    const taskDocRef = doc(firestore, "foodItems", id);
    try {
      await updateDoc(taskDocRef, {
        title: title,
        description: description,
        imageURL: imageAsset,
        category: category,
        calories: calories,
        price: price,
      });
      onClose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Modal modalLable="Edit Product" onClose={onClose} open={open}>
      <form
        onSubmit={handleUpdate}
        // onSubmit={handleSubmit}
        // className="taskManager"

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

export default EditLra;
