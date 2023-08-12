import Modal from "../Modal";
import { useState, useEffect } from "react";
import "../addTask.css";
import { doc, updateDoc, collection, getDocs,deleteDoc,addDoc } from "firebase/firestore";
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

function EditVeterenary({
  open,
  onClose,
  toEditParameter,
  toEditMethod,
  toEditSubCartegory,
  toEditSubstrate,
  toEditSpecies,
  toEditImageAsset,
  toEditCategory,
  id,
  toEditsubcollectionData,
}) {
  const [DiagnosticApplication, setDiagnosticApplication] =
    useState(toEditParameter);
  const [Substrate, setSubstrate] = useState(toEditSubstrate);
  const [SubCartegory, setSubCartegory] = useState(toEditDiagnosticApplication);
  const [Species, setSpecies] = useState(toEditSpecies);
  const [Method, setMethod] = useState(toEditMethod);
  const [imageAsset, setImageAsset] = useState(toEditImageAsset);
  const [category, setCategory] = useState(toEditCategory);
  const [subcollectionData, setSubcollectionData] = useState(
    toEditsubcollectionData
  );
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);

  /* function to update firestore */
  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  //   const taskDocRef = doc(firestore, "LabReagents", id);
  //   try {
  //     await updateDoc(taskDocRef, {
  //       Substrate: Substrate,
  //       SubCartegory: SubCartegory,
  //       Method: Method,
  //       Parameter: Parameter,
  //       Species: Species,
  //       category: category,
  //     });
  //     onClose();
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const taskDocRef = doc(firestore, "LabReagents", id);

    // Update main document fields
    try {
      await updateDoc(taskDocRef, {
        Substrate: Substrate,
        SubCartegory: SubCartegory,
        Method: Method,
        Parameter: Parameter,
        Species: Species,
        category: category,
      });
    } catch (err) {
      alert(err);
      return; // Exit early if main document update fails
    }
    /* function to add subcollection data */

    // Update subcollection data
    const subcollectionRef = collection(taskDocRef, "details");

    // Delete existing subcollection data
    const existingDocs = await getDocs(subcollectionRef);
    const deletePromises = existingDocs.docs.map((doc) => deleteDoc(doc.ref));
    await Promise.all(deletePromises);

    // Add updated subcollection data
    const addPromises = subcollectionData.map((item) =>
      addDoc(subcollectionRef, item)
    );
    await Promise.all(addPromises);

    onClose();
  };
  const handleAddSubcollectionData = () => {
    setSubcollectionData((prevData) => [
      ...prevData,
      { lgClass: "", Format: "" },
    ]);
  };
  /* function to update subcollection data */
  const handleUpdateSubcollectionData = (index, field, value) => {
    const updatedData = [...subcollectionData];
    updatedData[index][field] = value;
    setSubcollectionData(updatedData);
  };

  /* function to remove subcollection data */
  const handleRemoveSubcollectionData = (index) => {
    const updatedData = [...subcollectionData];
    updatedData.splice(index, 1);
    setSubcollectionData(updatedData);
  };

  return (
    <Modal modalLable="Edit Lab Reagent" onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} name="addTask">
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
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-auto my-14 backdrop-blur drop-shadow-lg bg-opacity-500">
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
                value={SubCartegory}
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
                      {item.category} -- {item.urlParamName}
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
            {/* Short Substrate */}
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
                placeholder="Substrate"
                value={Substrate}
              />
            </div>

            <p className="text-textColor font-semibold text-base md:text-lg m-12">
              <span className="text-xl text-blue-500">Parameter:</span>
            </p>
            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              {/* <MdAttachMoney className="text-blue-500 text-3xl" /> */}
              <input
                type="text"
                required
                value={DiagnosticApplication}
                onChange={(e) => setDiagnosticApplication(e.target.value)}
                placeholder="Parameter"
                className="w-flex h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
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
                value={category}
              >
                <option value={category} className="bg-white" disabled>
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
            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              <p className="text-textColor font-semibold text-base md:text-lg m-12">
                <span className="text-xl text-blue-500">Species:</span>
              </p>
              <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                {/* <MdAttachMoney className="text-blue-500 text-3xl" /> */}
                <input
                  type="text"
                  required
                  value={Species}
                  onChange={(e) => setSpecies(e.target.value)}
                  placeholder="Price"
                  className="w-flex h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                />
              </div>
            </div>{" "}
            <p className="text-textColor font-semibold text-base md:text-lg m-12">
              <span className="text-xl text-blue-500">Method:</span>
            </p>
            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              {/* <MdAttachMoney className="text-blue-500 text-3xl" /> */}
              <input
                type="text"
                required
                value={Method}
                onChange={(e) => setMethod(e.target.value)}
                placeholder="Method"
                className="w-flex h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
              />
            </div>
          </div>
          <div>
            <div>
              {subcollectionData && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <span className="text-xl text-blue-500 m-1">
                            lgClass:
                          </span>
                        </th>
                        <th>
                          <span className="text-xl text-blue-500 m-1">
                            Format:
                          </span>
                        </th>
                        <th>
                          <button
                            type="button"
                            className="text-blue-500 text-lg "
                            onClick={handleAddSubcollectionData}
                          >
                            Add Row
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {subcollectionData.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <input
                              type="text"
                              required
                              value={item.lgClass}
                              onChange={(e) => {
                                const updatedData = [...subcollectionData];
                                updatedData[index].lgClass = e.target.value;
                                setSubcollectionData(updatedData);
                              }}
                              placeholder="lgClass"
                              className="w-[130px] h-[30px] text-xl bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor gap-2"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              required
                              value={item.Format}
                              onChange={(e) => {
                                const updatedData = [...subcollectionData];
                                updatedData[index].Format = e.target.value;
                                setSubcollectionData(updatedData);
                              }}
                              placeholder="Format"
                              className="w-flex h-[30px] text-xl bg-transparent outline-none border-textColor placeholder:text-gray-400 text-textColor"
                            />
                            {/* {item.Format} */}
                          </td>
                          <td>
                            <button
                              type="button"
                              className="text-red-500 text-lg p-1"
                              onClick={() =>
                                handleRemoveSubcollectionData(index)
                              }
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-gradient-to-br bg-green-600 hover:bg-green-100 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-white hover:text-textColor"
            >
              <MdSave size={60} /> Save
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default EditVeterenary;

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
//   toEditsubcollectionData,
// }) {
//   const [title, setTitle] = useState(toEditTitle);
//   const [description, setDescription] = useState(toEditDescription);
//   const [SubCartegory, setSubCartegory] = useState(toEditSubCartegory);
//   const [calories, setCalories] = useState(toEditCalories);
//   const [price, setPrice] = useState(toEditPrice);
//   const [imageAsset, setImageAsset] = useState(toEditImageAsset);
//   const [category, setCategory] = useState(toEditCategory);
//   // const [fields, setFields] = useState(false);
//   const [subcollectionData, setsubcollectionData] = useState([
//     toEditsubcollectionData
//   ]);
//   const [fields, setFields] = useState(false);
//   const [alertStatus, setAlertStatus] = useState("danger");
//   const [msg, setMsg] = useState(null);
//   const [detail, setDetail] = useState([]);
//   const [lgClass, setLgClass] = useState([]);
//   const [format, setFormat] = useState([]);

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

//   useEffect(() => {
//     const fetchLabReagents = async () => {
//       const labReagentsColRef = collection(firestore, "LabReagents");
//       const labReagentsSnapshot = await getDocs(labReagentsColRef);

//       const updatedLabReagents = [];
//       console.log("updatedLabReagents", updatedLabReagents);
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

//       setDetail(updatedLabReagents);
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
//                     {subcollectionData.map((detailItem) => (
//                       <tbody className="text-xl px-4">
//                         <tr>
//                           {/* <td key={detailItem.id}>
//                             <input
//                               type="text"
//                               required
//                               value={detailItem.lgClass}
//                               onChange={(e) => setLgClass(e.target.value)}
//                               placeholder="lgClass"
//                               className="w-flex h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
//                             />
//                           </td> */}
//                           <td key={detailItem.id}>{detailItem.Format}</td>
//                           <td key={detailItem.id}>{detailItem.Format}</td>
//                         </tr>
//                       </tbody>
//                     ))}
//                   </table>
//                 </div>
//               )}
//             </div>
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
