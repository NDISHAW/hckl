// import { useState, useEffect } from "react";
// import Modal from "../Modal";
// import { LRACategories, labReagents } from "../../../utils/data";
// import { motion } from "framer-motion";
// import { doc, updateDoc, collection, getDocs } from "firebase/firestore";
// import { firestore, storage } from "../../../firebase.config";

// function AddLra({
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
//   toEditsubcollectionData,
// }) {
//   const [title, setTitle] = useState(toEditTitle);
//   const [description, setDescription] = useState(toEditDescription);
//   const [SubCartegory, setSubCartegory] = useState(toEditSubCartegory);
//   const [calories, setCalories] = useState(toEditCalories);
//   const [price, setPrice] = useState(toEditPrice);
//   const [imageAsset, setImageAsset] = useState(toEditImageAsset);
//   const [category, setCategory] = useState(toEditCategory);
//   const [subcollectionData, setSubcollectionData] = useState(
//     toEditsubcollectionData
//   );
//   const [fields, setFields] = useState(false);
//   const [alertStatus, setAlertStatus] = useState("danger");
//   const [msg, setMsg] = useState(null);
//   const [editIndex, setEditIndex] = useState(-1);

//   useEffect(() => {
//     if (editIndex !== -1) {
//       // Editing mode, update form fields with the data to edit
//       setTitle(toEditTitle);
//       setDescription(toEditDescription);
//       setSubCartegory(toEditSubCartegory);
//       setCalories(toEditCalories);
//       setPrice(toEditPrice);
//       setImageAsset(toEditImageAsset);
//       setCategory(toEditCategory);
//       setSubcollectionData(toEditsubcollectionData);
//     } else {
//       // Adding mode, reset form fields
//       setTitle("");
//       setDescription("");
//       setSubCartegory("");
//       setCalories("");
//       setPrice("");
//       setImageAsset("");
//       setCategory("");
//       setSubcollectionData([]);
//     }
//   }, [
//     editIndex,
//     toEditTitle,
//     toEditDescription,
//     toEditSubCartegory,
//     toEditCalories,
//     toEditPrice,
//     toEditImageAsset,
//     toEditCategory,
//     toEditsubcollectionData,
//   ]);

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editIndex !== -1) {
//       // Editing mode, update the existing item in subcollectionData
//       const updatedItem = {
//         category,
//         subCartegory: SubCartegory,
//         parameter: title,
//         substrate: description,
//         species: calories,
//       };
//       const updatedData = [...subcollectionData];
//       updatedData[editIndex] = updatedItem;
//       setSubcollectionData(updatedData);
//     } else {
//       // Adding mode, add a new item to subcollectionData
//       const newItem = {
//         category,
//         subCartegory: SubCartegory,
//         parameter: title,
//         substrate: description,
//         species: calories,
//       };
//       setSubcollectionData([...subcollectionData, newItem]);
//     }

//     // Reset the form fields and edit index
//     setTitle("");
//     setDescription("");
//     setSubCartegory("");
//     setCalories("");
//     setPrice("");
//     setImageAsset("");
//     setCategory("");
//     setEditIndex(-1);
//   };

//   // Function to handle editing an item
//   const handleEdit = (index) => {
//     setEditIndex(index);
//   };

//   // Function to handle deleting an item
//   const handleDelete = (index) => {
//     const updatedData = subcollectionData.filter((_, i) => i !== index);
//     setSubcollectionData(updatedData);
//   };

//   // Function to update firestore
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const taskDocRef = doc(firestore, "LabReagents", id);
//     try {
//       await updateDoc(taskDocRef, {
//         title,
//         description,
//         imageURL: imageAsset,
//         SubCartegory,
//         calories,
//         price,
//       });
//       onClose();
//     } catch (err) {
//       alert(err);
//     }
//   };

//   return (
//     <Modal
//       modalLable={editIndex !== -1 ? "Edit Product" : "Add Product"}
//       onClose={onClose}
//       open={open}
//     >
//       <form
//         onSubmit={editIndex !== -1 ? handleUpdate : handleSubmit}
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
//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-auto my-14">
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
//             <div>
//               {subcollectionData && (
//                 <div>
//                   <table>
//                     <thead>
//                       <tr>
//                         <th>
//                           <span className="text-xl text-blue-500 m-1">
//                             lgClass:
//                           </span>
//                         </th>
//                         <th>
//                           <span className="text-xl text-blue-500 m-1">
//                             Format:
//                           </span>
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {subcollectionData.map((item, index) => (
//                         <tr key={index}>
//                           <td>
//                             <input
//                               type="text"
//                               required
//                               value={item.lgClass}
//                               onChange={(e) => {
//                                 const updatedData = [...subcollectionData];
//                                 updatedData[index].lgClass = e.target.value;
//                                 setSubcollectionData(updatedData);
//                               }}
//                               placeholder="lgClass"
//                               className="w-flex h-[30px] text-xl bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
//                             />
//                           </td>
//                           <td>
//                             <input
//                               type="text"
//                               required
//                               value={item.Format}
//                               onChange={(e) => {
//                                 const updatedData = [...subcollectionData];
//                                 updatedData[index].Format = e.target.value;
//                                 setSubcollectionData(updatedData);
//                               }}
//                               placeholder="lgClass"
//                               className="w-flex h-[30px] text-xl bg-transparent outline-none border-textColor placeholder:text-gray-400 text-textColor"
//                             />
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="bg-gradient-to-br bg-green-600 hover:bg-green-100 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-white hover:text-textColor"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </form>
//     </Modal>
//   );
// }

// export default AddLra;

// import { useState } from "react";
// import Modal from "../Modal";

// function AddLra({ onClose, open }) {
//   const [category, setCategory] = useState("");
//   const [subCartegory, setSubCartegory] = useState("");
//   const [parameter, setParameter] = useState("");
//   const [substrate, setSubstrate] = useState("");
//   const [species, setSpecies] = useState("");
//   const [subcollectionData, setSubcollectionData] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create a new subcollection item
//     const newItem = {
//       lgClass: category,
//       Format: subCartegory,
//     };

//     // Check if an item is being edited
//     if (editIndex !== null) {
//       // Update the existing item at the edit index
//       const updatedData = [...subcollectionData];
//       updatedData[editIndex] = newItem;
//       setSubcollectionData(updatedData);
//       setEditIndex(null);
//     } else {
//       // Add the new item to the subcollection data
//       setSubcollectionData((prevData) => [...prevData, newItem]);
//     }

//     // Reset the form fields
//     setCategory("");
//     setSubCartegory("");
//   };

//   // Function to handle editing an item
//   const handleEdit = (index) => {
//     const itemToEdit = subcollectionData[index];
//     setCategory(itemToEdit.lgClass);
//     setSubCartegory(itemToEdit.Format);
//     setEditIndex(index);
//   };

//   // Function to handle deleting an item
//   const handleDelete = (index) => {
//     setSubcollectionData((prevData) => {
//       const updatedData = [...prevData];
//       updatedData.splice(index, 1);
//       return updatedData;
//     });
//   };

//   return (
//     <Modal onClose={onClose} open={open}>
//       <h2 className="text-2xl font-bold mb-4">Add LRA</h2>
//       <div className="flex flex-col items-center p-8">
//         <form className="w-full" onSubmit={handleSubmit}>
//           <label className=" mb-4">
//             Category:
//             <input
//               type="text"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className=" w-full mt-1 border-gray-300 rounded-md"
//             />
//           </label>
//           <label className="block mb-4">
//             Subcategory:
//             <input
//               type="text"
//               value={subCartegory}
//               onChange={(e) => setSubCartegory(e.target.value)}
//               className="block w-full mt-1 border-gray-300 rounded-md"
//             />
//           </label>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white rounded-md px-4 py-2"
//           >
//             {editIndex !== null ? "Update Item" : "Add Item"}
//           </button>
//         </form>

//         <div className="mt-8">
//           <table className="w-full">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">lgClass</th>
//                 <th className="px-4 py-2">Format</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {subcollectionData.map((item, index) => (
//                 <tr key={index}>
//                   <td className="px-4 py-2">{item.lgClass}</td>
//                   <td className="px-4 py-2">{item.Format}</td>
//                   <td className="px-4 py-2">
//                     <button
//                       className="text-blue-500 hover:text-blue-700"
//                       onClick={() => handleEdit(index)}
//                     >
//                       Edit
//                     </button>{" "}
//                     |{" "}
//                     <button
//                       className="text-red-500 hover:text-red-700"
//                       onClick={() => handleDelete(index)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </Modal>
//   );
// }

// export default AddLra;

// import { useState } from "react";
// import Modal from "../Modal";

// function AddLra({ onClose, open }) {
//   const [category, setCategory] = useState("");
//   const [subCartegory, setSubCartegory] = useState("");
//   const [parameter, setParameter] = useState("");
//   const [substrate, setSubstrate] = useState("");
//   const [species, setSpecies] = useState("");

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform any necessary validations

//     // Create a new LRA item
//     const newLra = {
//       category,
//       subCartegory,
//       parameter,
//       substrate,
//       species,
//     };

//     // Perform any necessary actions with the new LRA item (e.g., save to database)

//     // Reset the form fields
//     setCategory("");
//     setSubCartegory("");
//     setParameter("");
//     setSubstrate("");
//     setSpecies("");

//     // Close the modal
//     onClose();
//   };

//   return (
//     <Modal onClose={onClose} open={open}>
//       <div className="flex flex-col items-center p-8">
//         <h2 className="text-2xl font-bold mb-4">Add LRA</h2>
//         <form className="w-full" onSubmit={handleSubmit}>
//           <label className="block mb-4">
//             Category:
//             <input
//               type="text"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="block w-full mt-1 border-gray-300 rounded-md"
//             />
//           </label>
//           <label className="block mb-4">
//             Subcategory:
//             <input
//               type="text"
//               value={subCartegory}
//               onChange={(e) => setSubCartegory(e.target.value)}
//               className="block w-full mt-1 border-gray-300 rounded-md"
//             />
//           </label>
//           <label className="block mb-4">
//             Parameter:
//             <input
//               type="text"
//               value={parameter}
//               onChange={(e) => setParameter(e.target.value)}
//               className="block w-full mt-1 border-gray-300 rounded-md"
//             />
//           </label>
//           <label className="block mb-4">
//             Substrate:
//             <input
//               type="text"
//               value={substrate}
//               onChange={(e) => setSubstrate(e.target.value)}
//               className="block w-full mt-1 border-gray-300 rounded-md"
//             />
//           </label>
//           <label className="block mb-4">
//             Species:
//             <input
//               type="text"
//               value={species}
//               onChange={(e) => setSpecies(e.target.value)}
//               className="block w-full mt-1 border-gray-300 rounded-md"
//             />
//           </label>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white rounded-md px-4 py-2"
//           >
//             Add LRA
//           </button>
//         </form>
//       </div>
//     </Modal>
//   );
// }

// export default AddLra;

// import Modal from "../Modal";
// import { useState, useEffect } from "react";
// import "../addTask.css";
// import { doc, updateDoc, collection, getDocs } from "firebase/firestore";
// import { firestore, storage } from "../../../firebase.config";
// import { motion } from "framer-motion";
// import Loader from "../../Loader";
// import { MdCloudUpload, MdSave, MdDelete, MdAttachMoney } from "react-icons/md";
// import {
//   categories,
//   labReagents,
//   labEquipment,
//   LRACategories,
// } from "../../../utils/data";
// import {
//   getDownloadURL,
//   deleteObject,
//   ref,
//   uploadBytesResumable,
// } from "firebase/storage";

// function AddLra({
//   open,
//   onClose,
//   toEditTitle,
//   toEditDescription,
//   toEditSubCartegory,
//   toEditSubstrate,
//   toEditPrice,
//   toEditImageAsset,
//   toEditCategory,
//   id,
//   toEditsubcollectionData,
// }) {
//   const [title, setTitle] = useState(toEditTitle);
//   const [description, setDescription] = useState(toEditDescription);
//   const [SubCartegory, setSubCartegory] = useState(toEditSubCartegory);
//   const [Substrate, setSubstrate] = useState(toEditSubstrate);
//   const [price, setPrice] = useState(toEditPrice);
//   const [imageAsset, setImageAsset] = useState(toEditImageAsset);
//   const [category, setCategory] = useState(toEditCategory);
//   const [subcollectionData, setSubcollectionData] = useState(
//     toEditsubcollectionData
//   );
//   const [fields, setFields] = useState(false);
//   const [alertStatus, setAlertStatus] = useState("danger");
//   const [msg, setMsg] = useState(null);

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
//         Substrate: Substrate,
//         price: price,
//       });
//       onClose();
//     } catch (err) {
//       alert(err);
//     }
//   };

//   return (
//     <Modal modalLable="Add Lab Reagent" onClose={onClose} open={open}>
//       <form onSubmit={handleUpdate} name="addTask">
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
//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-auto my-14">
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
//                 onChange={(e) => setSubstrate(e.target.value)}
//                 placeholder="Substrate"
//                 value={Substrate}
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
//                   placeholder="Species"
//                   className="w-flex h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
//                 />
//               </div>
//             </div>
//           </div>
//           <div>

//           </div>
//           <div>
//             <button
//               type="submit"
//               className="bg-gradient-to-br bg-green-600 hover:bg-green-100 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-white hover:text-textColor"
//             >
//               <MdSave size={60} /> Save
//             </button>
//           </div>
//         </div>
//       </form>
//     </Modal>
//   );
// }

// export default AddLra;

import Modal from "../Modal"
import { useState, useEffect } from "react";
import '../addTask.css'
import { doc, updateDoc,collection,getDocs } from "firebase/firestore";
import { firestore, storage } from "../../../firebase.config";
import { motion } from "framer-motion";
import Loader from "../../Loader";
import { MdCloudUpload,MdSave, MdDelete, MdAttachMoney } from "react-icons/md";
import { categories, labReagents,labEquipment, LRACategories } from "../../../utils/data";
import {
  getDownloadURL,
  deleteObject,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

function AddLra({
  open,
  onClose,
  toEditTitle,
  toEditDescription,
  toEditSubCartegory,
  toEditSubstrate,
  toEditPrice,
  toEditImageAsset,
  toEditCategory,
  id,
  toEditsubcollectionData,
}) {
  const [title, setTitle] = useState(toEditTitle);
  const [description, setDescription] = useState(toEditDescription);
  const [SubCartegory, setSubCartegory] = useState(toEditSubCartegory);
  const [Substrate, setSubstrate] = useState(toEditSubstrate);
  const [price, setPrice] = useState(toEditPrice);
  const [imageAsset, setImageAsset] = useState(toEditImageAsset);
  const [category, setCategory] = useState(toEditCategory);
  // const [fields, setFields] = useState(false);
  const [subcollectionData, setsubcollectionData] = useState([
    toEditsubcollectionData
  ]);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [detail, setDetail] = useState([]);
  const [lgClass, setLgClass] = useState([]);
  const [format, setFormat] = useState([]);

  //   useEffect(() => {
  //   fetchDetails();
  // }, []);

  // const fetchDetails = async () => {
  //   try {
  //     const taskDocRef = doc(firestore, "LabReagents", id);
  //     const taskDocSnap = await getDocs(taskDocRef);
  //     const taskData = taskDocSnap.data();
  //     if (taskData) {
  //       setDetail(taskData.details);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const fetchLabReagents = async () => {
      const labReagentsColRef = collection(firestore, "LabReagents");
      const labReagentsSnapshot = await getDocs(labReagentsColRef);

      const updatedLabReagents = [];
      console.log("updatedLabReagents", updatedLabReagents);
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

      setDetail(updatedLabReagents);
    };

    fetchLabReagents();
  }, []);

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault();
    const taskDocRef = doc(firestore, "LabReagents", id);
    try {
      await updateDoc(taskDocRef, {
        title: title,
        description: description,
        imageURL: imageAsset,
        SubCartegory: SubCartegory,
        Substrate: Substrate,
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
            {/* Select Category Section */}
            <div className="w-full">
              <p className="text-textColor font-semibold text-base md:text-lg m-2">
                <span className="text-xl text-blue-500">Sub Category </span>{" "}
                <br></br>
              </p>
              <select
                onChange={(e) => setSubCartegory(e.target.value)}
                className="outline-none w-flex text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
              >
                <option value={SubCartegory} className="bg-white" disabled>
                  {SubCartegory}{" "}
                </option>
                {LRACategories &&
                  LRACategories.map((item) => (
                    <option
                      key={item.id}
                      className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                      value={item.urlParamName}
                    >
                      {item.urlParamName}
                    </option>
                  ))}
                {/* <option value={category} className="bg-white">
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
                  ))} */}
              </select>
            </div>
            {/* Short Description */}
            <p className="text-textColor font-semibold text-base md:text-lg m-2">
              <span className="text-xl text-blue-500">Substrate</span> <br></br>
            </p>
            <div className="w-flex py-2 border-b border-gray-300 flex items-center gap-2">
              <textarea
                className="block p-2.5 w-flex text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                cols="23"
                rows="5"
                type="text"
                required
                onChange={(e) => setSubstrate(e.target.value)}
                placeholder="Short Description"
                value={Substrate}
              />
            </div>
          </div>
          <div>
            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-1">
              <p className="text-textColor font-semibold text-base md:text-lg m-12">
                <span className="text-xl text-blue-500">Category:</span>{" "}
                <br></br>
              </p>
              {/* <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give me a title..."
                className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
              /> */}
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="outline-none w-flex text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
              >
                <option value={category} className="bg-white" disabled>
                  {category}{" "}
                </option>
                {labReagents &&
                  labReagents.map((item) => (
                    <option
                      key={item.id}
                      className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                      value={item.name}
                    >
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              <p className="text-textColor font-semibold text-base md:text-lg m-12">
                <span className="text-xl text-blue-500">Species:</span>
              </p>
              <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                {/* <MdAttachMoney className="text-blue-500 text-3xl" /> */}
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
          </div>
          <div>
            
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

export default AddLra;


{/* <div>
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
        {subcollectionData.map((detailItem) => (
          <tbody className="text-xl px-4">
            <tr>
              {/* <td key={detailItem.id}>
                            <input
                              type="text"
                              required
                              value={detailItem.lgClass}
                              onChange={(e) => setLgClass(e.target.value)}
                              placeholder="lgClass"
                              className="w-flex h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                            />
                          </td> */}
              <td key={detailItem.id}>{detailItem.Format}</td>
              <td key={detailItem.id}>{detailItem.Format}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )}
</div>; */}