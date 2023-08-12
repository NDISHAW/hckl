import Modal from "../Modal";
import { useState, useEffect } from "react";
import "../addTask.css";
import {
  doc,
  updateDoc,
  collection,
  getDocs,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { firestore, storage } from "../../../firebase.config";
import { motion } from "framer-motion";
import Loader from "../../Loader";
import { MdCloudUpload, MdSave, MdDelete, MdAttachMoney } from "react-icons/md";
import {
  categories,
  labReagents,
  labEquipment,
  LRACategories,
  vet as VetData,
  veterenary,
} from "../../../utils/data";
import {
  getDownloadURL,
  deleteObject,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { saveItem } from "../../../utils/firebaseFunctions";

function AddVet({ onClose, open }) {
  const [DiagnosticApplication, setDiagnosticApplication] = useState(
    ""
  );
  const [Substrate, setSubstrate] = useState("");
  const [SubCartegory, setSubCartegory] = useState("");
  // const [id, setId] = useState(id);
  const [OrderNumber, setOrderNumber] = useState("");
  const [Method, setMethod] = useState("");
  // const [imageAsset, setImageAsset] = useState(toEditImageAsset);
  // const [category, setCategory] = useState(toEditCategory);
  const [category, setCategory] = useState("");

  // const [subcollectionData, setSubcollectionData] = useState(
  //   toEditsubcollectionData
  // );
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  /* function to update firestore */
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const vetDocRef = doc(firestore, "Vet", id);
//     try {
//       await updateDoc(vetDocRef, {
//         Substrate: Substrate,
//         SubCartegory: SubCartegory,
//         Method: Method,
//         DiagnosticApplication: DiagnosticApplication,
//         OrderNumber: OrderNumber,
//         category: category,
//       });
//       // onClose();
//     } catch (err) {
//       alert(err);
//     }
//   };
const saveDetails = () => {
  setIsLoading(true);
  try {
    if (
      !Substrate ||
      !SubCartegory ||
      !Method ||
      !DiagnosticApplication ||
      !OrderNumber ||
      !category     
    ) {
      setFields(true);
      setMsg("Required fields can't be empty");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        // setIsLoading(false);
      }, 4000);
    } else {
      const data = {
        id: `${Date.now()}`,
        Substrate: Substrate,
        SubCartegory: SubCartegory,
        Method: Method,
        DiagnosticApplication: DiagnosticApplication,
        OrderNumber: OrderNumber,
        category: category,
      };
      saveItem(data);
    //   setIsLoading(false);
      setFields(true);
      setMsg("Data Uploaded successfully 😊");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    //   clearData();
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



  // const handleUpdate = async () => {
  //   const vetDocRef = doc(firestore, "Vet", id);
  //   console.log(vetDocRef);
  //   try {
  //     await updateDoc(vetDocRef, {
  //       // completed: checked,
  //     });
  //   } catch (err) {
  //     alert(err);
  //   }
  // };
  // const handleUpdate = async (e) => {
  //   e.preventDefault();

  //   // if (!firestore) {
  //   //   console.error("Firestore is not properly initialized.");
  //   //   return;
  //   // }

  //   if (!id) {
  //     console.error("Document ID is missing or invalid.");
  //     return;
  //   }

  //   const taskDocRef = doc(firestore, "Vet", id);

  //   // Update main document fields
  //   try {
  //     await updateDoc(taskDocRef, {
  //       Substrate: Substrate,
  //       SubCartegory: SubCartegory,
  //       Method: Method,
  //       DiagnosticApplication: DiagnosticApplication,
  //       OrderNumber: OrderNumber,
  //       category: category,
  //     });
  //     onClose();
  //   } catch (err) {
  //     console.error("Error updating document:", err);
  //     // You might want to handle the error here with more context
  //   }
  // };
  // const handleAddSubcollectionData = () => {
  //   setSubcollectionData((prevData) => [
  //     ...prevData,
  //     { lgClass: "", Format: "" },
  //   ]);
  // };
  // /* function to update subcollection data */
  // const handleUpdateSubcollectionData = (index, field, value) => {
  //   const updatedData = [...subcollectionData];
  //   updatedData[index][field] = value;
  //   setSubcollectionData(updatedData);
  // };

  /* function to remove subcollection data */
  // const handleRemoveSubcollectionData = (index) => {
  //   const updatedData = [...subcollectionData];
  //   updatedData.splice(index, 1);
  //   setSubcollectionData(updatedData);
  // };

  /* function to update firestore */
  // const handleUpdate = async () => {
  //   const taskDocRef = doc(firestore, "Vet", id);
  //   console.log("id:", id);
  //   try {
  //     await updateDoc(taskDocRef, {
  //       // completed: checked,
  //     });
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  return (
    <Modal modalLable="Edit VETERENARY " onClose={onClose} open={open}>
      <form onSubmit={saveDetails} name="addTask">
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
                {veterenary &&
                  veterenary.map((item) => (
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
              {/* <p className="text-textColor font-semibold text-base md:text-lg m-2">
                <span className="text-xl text-blue-500">Id</span> <br></br>
                {id}
              </p> */}
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
              <span className="text-xl text-blue-500">
                DiagnosticApplication:
              </span>
            </p>
            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              {/* <MdAttachMoney className="text-blue-500 text-3xl" /> */}
              <input
                type="text"
                required
                value={DiagnosticApplication}
                onChange={(e) => setDiagnosticApplication(e.target.value)}
                placeholder="DiagnosticApplication"
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
                {VetData &&
                  VetData.map((item) => (
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
                <span className="text-xl text-blue-500">OrderNumber:</span>
              </p>
              <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                {/* <MdAttachMoney className="text-blue-500 text-3xl" /> */}
                <input
                  type="text"
                  required
                  value={OrderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="OrderNumber"
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
          <div></div>
          <div>
            <button
              type="submit"
              onClick={saveDetails}
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

export default AddVet;

