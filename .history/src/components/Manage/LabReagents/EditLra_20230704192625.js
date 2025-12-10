import Modal from "../Modal";
import { useState, useEffect } from "react";
import "../addTask.css";
import { doc, updateDoc, collection, getDocs } from "firebase/firestore";
import { firestore, storage } from "../../../firebase.config";
import { motion } from "framer-motion";
import Loader from "../../Loader";
import { MdCloudUpload, MdSave, MdDelete, MdAttachMoney } from "react-icons/md";
import {
  categories,
  labReagents,
  labEquipment,
  LRACategories,
} from "../../../utils/data";
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
  toEditSubCartegory,
  toEditCalories,
  toEditPrice,
  toEditImageAsset,
  toEditCategory,
  id,
}) {
  const [title, setTitle] = useState(toEditTitle);
  const [description, setDescription] = useState(toEditDescription);
  const [SubCartegory, setSubCartegory] = useState(toEditSubCartegory);
  const [calories, setCalories] = useState(toEditCalories);
  const [price, setPrice] = useState(toEditPrice);
  const [imageAsset, setImageAsset] = useState(toEditImageAsset);
  const [category, setCategory] = useState(toEditCategory);
  const [subcollectionData, setSubcollectionData] = useState([]);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchLabReagents = async () => {
      try {
        const labReagentsColRef = collection(firestore, "LabReagents");
        const labReagentsSnapshot = await getDocs(labReagentsColRef);

        const updatedLabReagents = [];
        console.log(updatedLabReagents);
        for (const doc of labReagentsSnapshot.docs) {
          const labReagentData = doc.data();
          const subcollectionRef = collection(doc.ref, "details");
          const subcollectionSnapshot = await getDocs(subcollectionRef);
          const subcollectionData = subcollectionSnapshot.docs.map((subDoc) =>
            subDoc.data()
          );

          labReagentData.subcollectionData = subcollectionData;
          updatedLabReagents.push({
            id: doc.id,
            data: labReagentData,
          });
        }

        setDetails(updatedLabReagents);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLabReagents();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const taskDocRef = doc(firestore, "LabReagents", id);
    try {
      await updateDoc(taskDocRef, {
        title: title,
        description: description,
        imageURL: imageAsset,
        SubCartegory: SubCartegory,
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
      <form onSubmit={handleUpdate} name="addTask">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
              alertStatus === "danger"
                ? "text-red-600 bg-red-100"
                : "text-green-600 bg-green-100"
            }`}
          >
            {msg}
          </motion.p>
        )}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-5">
          <div className="w-full flex flex-col justify-between">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="w-full flex flex-col justify-between">
            <label htmlFor="description">Description</label>
            <textarea
              rows="4"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="w-full flex flex-col justify-between">
            <label htmlFor="SubCartegory">Category</label>
            <select
              id="SubCartegory"
              value={SubCartegory}
              onChange={(e) => setSubCartegory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <optgroup key={index} label={category.label}>
                  {category.options.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          <div className="w-full flex flex-col justify-between">
            <label htmlFor="calories">Calories</label>
            <input
              type="text"
              id="calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              required
            />
          </div>
          <div className="w-full flex flex-col justify-between">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="w-full flex flex-col justify-between">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              {LRACategories.map((category, index) => (
                <option key={index} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full flex flex-col justify-between">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              //  onChange={handleImageChange}
            />
          </div>
          <div className="w-full flex flex-col justify-between">
            <label>Current Image</label>
            {imageAsset && (
              <img
                src={imageAsset}
                alt="current"
                className="w-32 h-32 object-cover rounded-lg"
              />
            )}
          </div>
          <div className="w-full flex flex-col justify-between">
            <label>Subcollection Data:</label>
            <div>
              {details.map((detail) => (
                <div key={detail.id}>
                  <p>{detail.data.title}</p>
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <span className="text-xl">Name</span>
                        </th>
                        <th>
                          <span className="text-xl">Price</span>
                        </th>
                        <th>
                          <span className="text-xl">Action</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {detail.data.subcollectionData.map((subData) => (
                        <tr key={subData.id}>
                          <td>
                            <input
                              type="text"
                              value={subData.name}
                              // onChange={(e) => handleSubDataChange(e, detail.id, subData.id)}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              value={subData.price}
                              // onChange={(e) => handleSubDataChange(e, detail.id, subData.id)}
                            />
                          </td>
                          <td>
                            <button
                              type="button"
                              // onClick={() => handleSubDataDelete(detail.id, subData.id)}
                            >
                              <MdDelete />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button
                    type="button"
                    // onClick={() => handleAddSubData(detail.id)}
                  >
                    Add Sub Data
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded-lg flex items-center"
          >
            <MdSave className="mr-2" />
            Update
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default EditLra;

// import Modal from "../Modal"
// import { useState, useEffect } from "react";
// import '../addTask.css'
// import { doc, updateDoc,collection,getDocs } from "firebase/firestore";
// import { firestore, storage } from "../../../firebase.config";
// import { motion } from "framer-motion";
// import Loader from "../../Loader";
// import { MdCloudUpload,MdSave, MdDelete, MdAttachMoney } from "react-icons/md";
// import { categories, labReagents,labEquipment, LRACategories } from "../../../utils/data";
// import {
//   getDownloadURL,
//   deleteObject,
//   ref,
//   uploadBytesResumable,
// } from "firebase/storage";

// function EditLra({
//   open,
//   onClose,
//   toEditTitle,
//   toEditDescription,
//   toEditSubCartegory,
//   toEditCalories,
//   toEditPrice,
//   toEditImageAsset,
//   toEditCategory,
//   id,
// }) {
//   const [title, setTitle] = useState(toEditTitle);
//   const [description, setDescription] = useState(toEditDescription);
//   const [SubCartegory, setSubCartegory] = useState(toEditSubCartegory);
//   const [calories, setCalories] = useState(toEditCalories);
//   const [price, setPrice] = useState(toEditPrice);
//   const [imageAsset, setImageAsset] = useState(toEditImageAsset);
//   const [category, setCategory] = useState(toEditCategory);
//   // const [fields, setFields] = useState(false);
//   const [subcollectionData, setsubcollectionData] = useState([]);
//   const [fields, setFields] = useState(false);
//   const [alertStatus, setAlertStatus] = useState("danger");
//   const [msg, setMsg] = useState(null);
//   const [details, setDetails] = useState([]);

//   //   useEffect(() => {
//   //   fetchDetails();
//   // }, []);

//   // const fetchDetails = async () => {
//   //   try {
//   //     const taskDocRef = doc(firestore, "LabReagents", id);
//   //     const taskDocSnap = await getDocs(taskDocRef);
//   //     const taskData = taskDocSnap.data();
//   //     if (taskData) {
//   //       setDetail(taskData.details);
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//     useEffect(() => {
//     const fetchLabReagents = async () => {
//       const labReagentsColRef = collection(firestore, "LabReagents");
//       const labReagentsSnapshot = await getDocs(labReagentsColRef);

//       const updatedLabReagents = [];
//       console.log(updatedLabReagents);
//       for (const doc of labReagentsSnapshot.docs) {
//         const labReagentData = doc.data();
//         const subcollectionRef = collection(doc.ref, "details");
//         const subcollectionSnapshot = await getDocs(subcollectionRef);
//         const subcollectionData = subcollectionSnapshot.docs.map((subDoc) =>
//           subDoc.data()
//         );

//         labReagentData.subcollectionData = subcollectionData;
//         updatedLabReagents.push({
//           id: doc.id,
//           data: labReagentData,
//         });
//       }

//       setDetails(updatedLabReagents);
//     };

//     fetchLabReagents();
//   }, []);

//   /* function to update firestore */
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const taskDocRef = doc(firestore, "LabReagents", id);
//     try {
//       await updateDoc(taskDocRef, {
//         title: title,
//         description: description,
//         imageURL: imageAsset,
//         SubCartegory: SubCartegory,
//         calories: calories,
//         price: price,
//       });
//       onClose();
//     } catch (err) {
//       alert(err);
//     }
//   };

//   return (
//     <Modal modalLable="Edit Product" onClose={onClose} open={open}>
//       <form
//         onSubmit={handleUpdate}
//         // onSubmit={handleSubmit}
//         // className="taskManager"

//         name="addTask"
//       >
//         {fields && (
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
//               alertStatus === "danger"
//                 ? "bg-red-400 text-red-800"
//                 : "bg-emerald-400 text-emerald-800"
//             }`}
//           >
//             {msg}
//           </motion.p>
//         )}
//         <div
//           className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-auto my-14"
//           // data-aos="fade-up"
//           // data-aos-duration="3000"
//         >
//           <div>
//             {/* Select Category Section */}
//             <div className="w-full">
//               <p className="text-textColor font-semibold text-base md:text-lg m-2">
//                 <span className="text-xl text-blue-500">Sub Category </span>{" "}
//                 <br></br>
//               </p>
//               <select
//                 onChange={(e) => setSubCartegory(e.target.value)}
//                 className="outline-none w-flex text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
//               >
//                 <option value={SubCartegory} className="bg-white" disabled>
//                   {SubCartegory}{" "}
//                 </option>
//                 {LRACategories &&
//                   LRACategories.map((item) => (
//                     <option
//                       key={item.id}
//                       className="text-base border-0 outline-none capitalize bg-white text-headingColor"
//                       value={item.urlParamName}
//                     >
//                       {item.urlParamName}
//                     </option>
//                   ))}
//                 {/* <option value={category} className="bg-white">
//                   {category}{" "}
//                 </option>
//                 {labReagents &&
//                   labReagents.map((item) => (
//                     <option
//                       key={item.id}
//                       className="text-base border-0 outline-none capitalize bg-white text-headingColor"
//                       value={item.urlParamName}
//                     >
//                       {item.urlParamName}
//                     </option>
//                   ))} */}
//               </select>
//             </div>
//             {/* Short Description */}
//             <p className="text-textColor font-semibold text-base md:text-lg m-2">
//               <span className="text-xl text-blue-500">Substrate</span> <br></br>
//             </p>
//             <div className="w-flex py-2 border-b border-gray-300 flex items-center gap-2">
//               <textarea
//                 className="block p-2.5 w-flex text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 cols="23"
//                 rows="5"
//                 type="text"
//                 required
//                 onChange={(e) => setCalories(e.target.value)}
//                 placeholder="Short Description"
//                 value={calories}
//               />
//             </div>
//           </div>
//           <div>
//             <div className="w-full py-2 border-b border-gray-300 flex items-center gap-1">
//               <p className="text-textColor font-semibold text-base md:text-lg m-12">
//                 <span className="text-xl text-blue-500">Category:</span>{" "}
//                 <br></br>
//               </p>
//               {/* <input
//                 type="text"
//                 required
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Give me a title..."
//                 className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
//               /> */}
//               <select
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="outline-none w-flex text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
//               >
//                 <option value={category} className="bg-white" disabled>
//                   {category}{" "}
//                 </option>
//                 {labReagents &&
//                   labReagents.map((item) => (
//                     <option
//                       key={item.id}
//                       className="text-base border-0 outline-none capitalize bg-white text-headingColor"
//                       value={item.name}
//                     >
//                       {item.name}
//                     </option>
//                   ))}
//               </select>
//             </div>
//             <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
//               <p className="text-textColor font-semibold text-base md:text-lg m-12">
//                 <span className="text-xl text-blue-500">Species:</span>
//               </p>
//               <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
//                 {/* <MdAttachMoney className="text-blue-500 text-3xl" /> */}
//                 <input
//                   type="text"
//                   required
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                   placeholder="Price"
//                   className="w-flex h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
//                 />
//               </div>
//             </div>
//           </div>
//           <div>
//             {details.subcollectionData ? (
//               <div>
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>
//                         <span className="text-xl text-blue-500 m-1">
//                           lgClass:
//                         </span>
//                       </th>
//                       <th>
//                         <span className="text-xl text-blue-500 m-1">
//                           Format:
//                         </span>
//                       </th>
//                     </tr>
//                   </thead>
//                   {details.subcollectionData.map((detail) => (
//                     <tbody className="text-xl px-4" key={detail.id}>
//                       <tr>
//                         <td>{detail.gClass}</td>
//                         <td>{detail.Format}</td>
//                       </tr>
//                     </tbody>
//                   ))}
//                 </table>
//               </div>
//             ) : (
//               <div>No subcollection data available</div>
//             )}
//           </div>

//           <div>
//             {/* <span className="text-xl text-blue-500"> */}
//             <button
//               type="submit"
//               className="bg-gradient-to-br bg-green-600 hover:bg-green-100 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-white hover:text-textColor"
//               // onClick={saveDetails}
//             >
//               <MdSave size={60} /> Save
//             </button>
//             {/* </span> */}
//           </div>
//           {/* <div>07</div> */}
//         </div>
//       </form>
//       {/* <form onSubmit={handleUpdate} className="editTask">
//         <input
//           type="text"
//           name="title"
//           onChange={(e) => setTitle(e.target.value.toUpperCase())}
//           value={title}
//         />
//         <textarea
//           onChange={(e) => setDescription(e.target.value)}
//           value={description}
//         ></textarea>
//         <button type="submit">Edit</button>
//       </form> */}
//     </Modal>
//   );
// }

// export default EditLra;
