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
        <div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-auto my-14"
          // data-aos="fade-up"
          // data-aos-duration="3000"
        >
          <div>
            {/* image asset upload and delete */}
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
                          value={imageAsset}
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
            {/* Description  */}
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
            {/* Select Category Section */}
            <div className="w-full">
              <p className="text-textColor font-semibold text-base md:text-lg m-2">
                <span className="text-xl text-blue-500">Category </span>{" "}
                <br></br>
              </p>
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="outline-none w-flex text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
              >
                <option value={category} className="bg-white">
                  {category}{" "}
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
            {/* Short Description */}
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
                onChange={(e) => setCalories(e.target.value)}
                placeholder="Short Description"
                value={calories}
              />
            </div>
          </div>
          <div>
            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              <p className="text-textColor font-semibold text-base md:text-lg m-12">
                <span className="text-xl text-blue-500">Title:</span> <br></br>
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
              <span className="text-xl text-blue-500">Price:</span>
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
            {/* <span className="text-xl text-blue-500"> */}
            <button
              type="submit"
              className="bg-gradient-to-br bg-green-600 hover:bg-green-100 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-white hover:text-textColor"
              // onClick={saveDetails}
            >
              <MdSave size={60} /> Save
            </button>
            {/* </span> */}
          </div>
          {/* <div>07</div> */}
          <div class="relative mb-4 flex flex-wrap items-stretch">
            <span
              class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              id="basic-addon1"
            >
              @
            </span>
            <input
              type="text"
              class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="relative mb-4 flex flex-wrap items-stretch">
            <input
              type="text"
              class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span
              class="flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              id="basic-addon2"
            >
              @example.com
            </span>
          </div>

          <label
            for="basic-url"
            class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
            Your vanity URL
          </label>
          <div class="relative mb-4 flex flex-wrap items-stretch">
            <span
              class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              id="basic-addon3"
            >
              https://example.com/users/
            </span>
            <input
              type="text"
              class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
          </div>

          <div class="relative mb-4 flex flex-wrap items-stretch">
            <span class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200">
              $
            </span>
            <input
              type="text"
              class="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              aria-label="Amount (to the nearest dollar)"
            />
            <span class="flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200">
              .00
            </span>
          </div>

          <div class="relative mb-4 flex flex-wrap items-stretch">
            <input
              type="text"
              class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Username"
              aria-label="Username"
            />
            <span class="flex items-center whitespace-nowrap border border-x-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200">
              @
            </span>
            <input
              type="text"
              class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Server"
              aria-label="Server"
            />
          </div>

          <div class="relative flex flex-wrap items-stretch">
            <span class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200">
              With textarea
            </span>
            <textarea
              class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              aria-label="With textarea"
            ></textarea>
          </div>
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

export default EditLra;
