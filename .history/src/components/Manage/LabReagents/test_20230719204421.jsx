

// import React, { useState, useEffect } from "react";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   doc,
//   updateDoc,
//   deleteDoc,
//   query,
//   collectionGroup,
// } from "firebase/firestore";
// import { firestore } from "../../../firebase.config";

// const ReagentComponent = () => {
//   const [reagents, setReagents] = useState([]);
//   const [newReagent, setNewReagent] = useState({
//     method: "",
//     parameter: "",
//     species: "",
//     substrate: "",
//     nestedObject: [],
//   });

//   const reagentsCollectionRef = collection(firestore, "LabReagents");

//   useEffect(() => {
//     fetchReagents();
//   }, []);

//   const fetchReagents = async () => {
//     try {
//       const snapshot = await getDocs(reagentsCollectionRef);
//       const reagentData = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//         nestedObject: doc.data().nestedObject || [],
//       }));
//       setReagents(reagentData);
//     } catch (error) {
//       console.error("Error fetching reagents: ", error);
//     }
//   };

//   const addReagent = async () => {
//     try {
//       const docRef = await addDoc(reagentsCollectionRef, newReagent);
//       setNewReagent({
//         method: "",
//         parameter: "",
//         species: "",
//         substrate: "",
//         nestedObject: [],
//       });
//       console.log("Reagent added with ID: ", docRef.id);
//     } catch (error) {
//       console.error("Error adding reagent: ", error);
//     }
//   };

//   const updateReagent = async (id, updatedReagent) => {
//     try {
//       const reagentDocRef = doc(reagentsCollectionRef, id);
//       await updateDoc(reagentDocRef, updatedReagent);
//       console.log("Reagent updated successfully");
//     } catch (error) {
//       console.error("Error updating reagent: ", error);
//     }
//   };

//   const deleteReagent = async (id) => {
//     try {
//       const reagentDocRef = doc(reagentsCollectionRef, id);
//       await deleteDoc(reagentDocRef);
//       console.log("Reagent deleted successfully");
//     } catch (error) {
//       console.error("Error deleting reagent: ", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Lab Reagents</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Method</th>
//             <th>Parameter</th>
//             <th>Species</th>
//             <th>Substrate</th>
//             <th>Nested Object</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reagents.map((reagent) => (
//             <tr key={reagent.id}>
//               <td>{reagent.method}</td>
//               <td>{reagent.parameter}</td>
//               <td>{reagent.species}</td>
//               <td>{reagent.substrate}</td>
//               <td>
//                 {/* <ul>
//                   {reagent.nestedObject.map((item, index) => (
//                     <li key={index}>
//                       <strong>lgClass:</strong> {item.lgClass},{" "}
//                       <strong>Format:</strong> {item.Format}
//                     </li>
//                   ))}
//                 </ul> */}
//               </td>
//               <td>
//                 <button
//                   onClick={() =>
//                     updateReagent(reagent.id, { method: "New Method" })
//                   }
//                 >
//                   Update
//                 </button>
//                 <button onClick={() => deleteReagent(reagent.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <h3>Add New Reagent</h3>
//       <label>
//         Method:
//         <input
//           type="text"
//           value={newReagent.method}
//           onChange={(e) =>
//             setNewReagent({ ...newReagent, method: e.target.value })
//           }
//         />
//       </label>
//       <label>
//         Parameter:
//         <input
//           type="text"
//           value={newReagent.parameter}
//           onChange={(e) =>
//             setNewReagent({ ...newReagent, parameter: e.target.value })
//           }
//         />
//       </label>
//       <label>
//         Species:
//         <input
//           type="text"
//           value={newReagent.species}
//           onChange={(e) =>
//             setNewReagent({ ...newReagent, species: e.target.value })
//           }
//         />
//       </label>
//       <label>
//         Substrate:
//         <input
//           type="text"
//           value={newReagent.substrate}
//           onChange={(e) =>
//             setNewReagent({ ...newReagent, substrate: e.target.value })
//           }
//         />
//       </label>
//       <h4>Add Nested Object</h4>
//       <label>
//         lgClass:
//         <input
//           type="text"
//           value={newReagent.nestedObject.lgClass}
//           onChange={(e) =>
//             setNewReagent({
//               ...newReagent,
//               nestedObject: {
//                 ...newReagent.nestedObject,
//                 lgClass: e.target.value,
//               },
//             })
//           }
//         />
//       </label>
//       <label>
//         Format:
//         <input
//           type="text"
//           value={newReagent.nestedObject.Format}
//           onChange={(e) =>
//             setNewReagent({
//               ...newReagent,
//               nestedObject: {
//                 ...newReagent.nestedObject,
//                 Format: e.target.value,
//               },
//             })
//           }
//         />
//       </label>
//       <button onClick={addReagent}>Add Reagent</button>
//     </div>
//   );
// };

// export default ReagentComponent;

// import React, { useState, useEffect } from "react";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   doc,
//   updateDoc,
//   deleteDoc,
//   query,
//   collectionGroup,
// } from "firebase/firestore";
// import { firestore } from "../../../firebase.config";

// const ReagentComponent = () => {
//   const [reagents, setReagents] = useState([]);
//   const [newReagent, setNewReagent] = useState({
//     method: "",
//     parameter: "",
//     species: "",
//     substrate: "",
//     nestedObject: {
//       lgClass: "",
//       Format: "",
//     },
//   });

//   const reagentsCollectionRef = collection(firestore, "LabReagents");

//   useEffect(() => {
//     fetchReagents();
//   }, []);

//   const fetchReagents = async () => {
//     try {
//       const snapshot = await getDocs(reagentsCollectionRef);
//       const reagentData = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//         nestedObject: doc.data().nestedObject || { lgClass: "", Format: "" },
//       }));
//       setReagents(reagentData);
//     } catch (error) {
//       console.error("Error fetching reagents: ", error);
//     }
//   };

//   const addReagent = async () => {
//     try {
//       const docRef = await addDoc(reagentsCollectionRef, newReagent);
//       setNewReagent({
//         method: "",
//         parameter: "",
//         species: "",
//         substrate: "",
//         nestedObject: {
//           lgClass: "",
//           Format: "",
//         },
//       });
//       console.log("Reagent added with ID: ", docRef.id);
//     } catch (error) {
//       console.error("Error adding reagent: ", error);
//     }
//   };

//   const updateReagent = async (id, updatedReagent) => {
//     try {
//       const reagentDocRef = doc(reagentsCollectionRef, id);
//       await updateDoc(reagentDocRef, updatedReagent);
//       console.log("Reagent updated successfully");
//     } catch (error) {
//       console.error("Error updating reagent: ", error);
//     }
//   };

//   const deleteReagent = async (id) => {
//     try {
//       const reagentDocRef = doc(reagentsCollectionRef, id);
//       await deleteDoc(reagentDocRef);
//       console.log("Reagent deleted successfully");
//     } catch (error) {
//       console.error("Error deleting reagent: ", error);
//     }
//   };console.log("lABrEAGENTS", reagents);

//   return (
//     <div>
//       <h2>Lab Reagents</h2>
//       <ul>
//         {reagents.map((reagent) => (
//           <li key={reagent.id}>
//             <p>Method: {reagent.Method}</p>
//             <p>Parameter: {reagent.Parameter}</p>
//             <p>Species: {reagent.Species}</p>
//             <p>Substrate: {reagent.Substrate}</p>
//             <p>Nested Object:</p>
//             <ul>
//               <li>lgClass: {reagent.nestedObject.lgClass}</li>
//               <li>Format: {reagent.nestedObject.Format}</li>
//             </ul>
//             <button
//               onClick={() =>
//                 updateReagent(reagent.id, { method: "New Method" })
//               }
//             >
//               Update
//             </button>
//             <button onClick={() => deleteReagent(reagent.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <h3>Add New Reagent</h3>
//       <label>
//         Method:
//         <input
//           type="text"
//           value={newReagent.method}
//           onChange={(e) =>
//             setNewReagent({ ...newReagent, method: e.target.value })
//           }
//         />
//       </label>
//       <label>
//         Parameter:
//         <input
//           type="text"
//           value={newReagent.parameter}
//           onChange={(e) =>
//             setNewReagent({ ...newReagent, parameter: e.target.value })
//           }
//         />
//       </label>
//       <label>
//         Species:
//         <input
//           type="text"
//           value={newReagent.species}
//           onChange={(e) =>
//             setNewReagent({ ...newReagent, species: e.target.value })
//           }
//         />
//       </label>
//       <label>
//         Substrate:
//         <input
//           type="text"
//           value={newReagent.substrate}
//           onChange={(e) =>
//             setNewReagent({ ...newReagent, substrate: e.target.value })
//           }
//         />
//       </label>
//       <label>
//         Nested Object:
//         <input
//           type="text"
//           value={newReagent.nestedObject.lgClass}
//           onChange={(e) =>
//             setNewReagent({
//               ...newReagent,
//               nestedObject: {
//                 ...newReagent.nestedObject,
//                 lgClass: e.target.value,
//               },
//             })
//           }
//         />
//       </label>
//       <label>
//         Format:
//         <input
//           type="text"
//           value={newReagent.nestedObject.Format}
//           onChange={(e) =>
//             setNewReagent({
//               ...newReagent,
//               nestedObject: {
//                 ...newReagent.nestedObject,
//                 Format: e.target.value,
//               },
//             })
//           }
//         />
//       </label>
//       <button onClick={addReagent}>Add Reagent</button>
//     </div>
//   );
// };

// export default ReagentComponent;

// import React, { useState, useEffect } from "react";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   doc,
//   updateDoc,
//   deleteDoc,
//   query,
//   collectionGroup,
// } from "firebase/firestore";
// import { firestore } from "../../../firebase.config";

// const ReagentComponent = () => {
//   const [reagents, setReagents] = useState([]);
//   const [newReagent, setNewReagent] = useState({
//     method: "",
//     parameter: "",
//     species: "",
//     substrate: "",
//     nestedObject: {
//       lgClass: "",
//       Format: "",
//     },
//   });

//   const reagentsCollectionRef = collection(firestore, "LabReagents");

//   useEffect(() => {
//     fetchReagents();
//   }, []);

//   const fetchReagents = async () => {
//     try {
//       const querySnapshot = await getDocs(reagentsCollectionRef);
//       const reagentData = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setReagents(reagentData);
//     } catch (error) {
//       console.error("Error fetching reagents: ", error);
//     }
//   };
//   console.log("Reagents manage", reagents);

//   const addReagent = async () => {
//     try {
//       const docRef = await addDoc(reagentsCollectionRef, newReagent);
//       setNewReagent({
//         method: "",
//         parameter: "",
//         species: "",
//         substrate: "",
//         nestedObject: {
//           lgClass: "",
//           Format: "",
//         },
//       });
//       console.log("Reagent added with ID: ", docRef.id);
//     } catch (error) {
//       console.error("Error adding reagent: ", error);
//     }
//   };

//   const updateReagent = async (id, updatedReagent) => {
//     try {
//       const reagentRef = doc(reagentsCollectionRef, id);
//       await updateDoc(reagentRef, updatedReagent);
//       console.log("Reagent updated successfully");
//     } catch (error) {
//       console.error("Error updating reagent: ", error);
//     }
//   };

//   const deleteReagent = async (id) => {
//     try {
//       const reagentRef = doc(reagentsCollectionRef, id);
//       await deleteDoc(reagentRef);
//       console.log("Reagent deleted successfully");
//     } catch (error) {
//       console.error("Error deleting reagent: ", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Lab Reagents</h2>
//       <ul>
//         {reagents.map((reagent) => (
//           <li key={reagent.id}>
//             <p>Method: {reagent.method}</p>
//             <p>Parameter: {reagent.parameter}</p>
//             <p>Species: {reagent.species}</p>
//             <p>Substrate: {reagent.substrate}</p>
//             <p>Nested Object:</p>
//             {/* <ul>
//               <li>lgClass: {reagent.nestedObject.lgClass}</li>
//               <li>Format: {reagent.nestedObject.Format}</li>
//             </ul> */}
//             <button
//               onClick={() =>
//                 updateReagent(reagent.id, { method: "New Method" })
//               }
//             >
//               Update
//             </button>
//             <button onClick={() => deleteReagent(reagent.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <h3>Add New Reagent</h3>
//       <label>
//         Method:
//         <input
//           type="text"
//           value={newReagent.method}
//           onChange={(e) =>
//             setNewReagent({ ...newReagent, method: e.target.value })
//           }
//         />
//       </label>
//       <label>
//         Parameter:
//         <input
//           type="text"
//           value={newReagent.parameter}
//           onChange={(e) =>
//             setNewReagent({ ...newReagent, parameter: e.target.value })
//           }
//         />
//       </label>
//       <label>
//         Species:
//         <input
//           type="text"
//           value={newReagent.species}
//           onChange={(e) =>
//             setNewReagent({ ...newReagent, species: e.target.value })
//           }
//         />
//       </label>
//       <label>
//         Substrate:
//         <input
//           type="text"
//           value={newReagent.substrate}
//           onChange={(e) =>
//             setNewReagent({ ...newReagent, substrate: e.target.value })
//           }
//         />
//       </label>
//       <label>
//         Nested Object:
//         <input
//           type="text"
//           value={newReagent.nestedObject.lgClass}
//           onChange={(e) =>
//             setNewReagent({
//               ...newReagent,
//               nestedObject: {
//                 ...newReagent.nestedObject,
//                 lgClass: e.target.value,
//               },
//             })
//           }
//         />
//       </label>
//       <label>
//         Format:
//         <input
//           type="text"
//           value={newReagent.nestedObject.Format}
//           onChange={(e) =>
//             setNewReagent({
//               ...newReagent,
//               nestedObject: {
//                 ...newReagent.nestedObject,
//                 Format: e.target.value,
//               },
//             })
//           }
//         />
//       </label>
//       <button onClick={addReagent}>Add Reagent</button>
//     </div>
//   );
// };

// export default ReagentComponent;

// import React, { useEffect, useState } from "react";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   doc,
//   updateDoc,
//   deleteDoc,
//   query,
//   collectionGroup,
// } from "firebase/firestore";
// import { firestore } from "../../../firebase.config";

// const FirestoreComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data from Firestore collection
//     const fetchData = async () => {
//       try {
//         const collectionRef = collection(firestore, "labReagents");
//         const snapshot = await getDocs(collectionRef);

//         const reagents = [];
//         for (const doc of snapshot.docs) {
//           const reagentData = doc.data();
//           reagentData.id = doc.id;

//           // Fetch items from the subcollection
//           const itemsSnapshot = await getDocs(doc.ref.collection("items"));
//           const items = itemsSnapshot.docs.map((itemDoc) => ({
//             id: itemDoc.id,
//             ...itemDoc.data(),
//           }));

//           reagentData.items = items;
//           reagents.push(reagentData);
//         }

//         setData(reagents);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);
// console.log("data",data);
//   // CRUD operations
//   const createReagent = async (reagentData) => {
//     try {
//       const collectionRef = collection(firestore, "labReagents");
//       await addDoc(collectionRef, reagentData);
//     } catch (error) {
//       console.error("Error creating reagent:", error);
//     }
//   };

//   const updateReagent = async (reagentId, updatedData) => {
//     try {
//       const docRef = doc(collection(firestore, "labReagents"), reagentId);
//       await updateDoc(docRef, updatedData);
//     } catch (error) {
//       console.error("Error updating reagent:", error);
//     }
//   };

//   const deleteReagent = async (reagentId) => {
//     try {
//       const docRef = doc(collection(firestore, "labReagents"), reagentId);
//       await deleteDoc(docRef);
//     } catch (error) {
//       console.error("Error deleting reagent:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Lab Reagents</h2>
//       <ul>
//         {data.map((reagent) => (
//           <li key={reagent.id}>
//             <h3>{reagent.name}</h3>
//             <p>{reagent.description}</p>
//             <ul>
//               {reagent.items.map((item) => (
//                 <li key={item.id}>
//                   <span>{item.lgClass}</span> - <span>{item.format}</span>
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FirestoreComponent;

// import React, { useState, useEffect } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { firestore } from "../../../firebase.config";

// const MyComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(
//           collection(firestore, "LabReagents")
//         );
//         const fetchedData = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           data: doc.data(),
//         }));
//         setData(fetchedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const addData = (newData) => {
//     firestore.collection("LabReagents").add(newData);
//   };

//   const editData = (id, updatedData) => {
//     firestore.collection("LabReagents").doc(id).update(updatedData);
//   };

//   const deleteData = (id) => {
//     firestore.collection("LabReagents").doc(id).delete();
//   };

//   return (
//     <div>
//       {/* Render the data */}
//       {data.map((item) => (
//         <div key={item.id}>
//           <p>ID: {item.id}</p>
//           <p>Category: {item.data.category}</p>
//           <p>Subcategory: {item.data.SubCartegory}</p>
//           <p>Method: {item.data.Method}</p>
//           <p>Species: {item.data.Species}</p>
//           <p>Substrate: {item.data.Substrate}</p>
//           <p>Parameter: {item.data.Parameter}</p>
//           {/* Render subcollectionData */}
//           {item.data.subcollectionData.map((subData, index) => (
//             <div key={index}>
//               <p>lgClass: {subData.lgClass}</p>
//               <p>Format: {subData.Format}</p>
//             </div>
//           ))}
//           {/* Add an edit button to trigger the editData function */}
//           <button
//             onClick={() =>
//               editData(item.id, {
//                 ...item.data,
//                 category: "Updated Category",
//                 // Update other fields as needed
//               })
//             }
//           >
//             Edit
//           </button>
//           {/* Add a delete button to trigger the deleteData function */}
//           <button onClick={() => deleteData(item.id)}>Delete</button>
//         </div>
//       ))}

//       {/* Add a form to add new data */}
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           const {
//             id,
//             category,
//             SubCartegory,
//             Method,
//             Species,
//             Substrate,
//             Parameter,
//             lgClass,
//             Format,
//           } = e.target.elements;
//           addData({
//             category: category.value,
//             SubCartegory: SubCartegory.value,
//             Method: Method.value,
//             Species: Species.value,
//             Substrate: Substrate.value,
//             Parameter: Parameter.value,
//             subcollectionData: [
//               {
//                 lgClass: lgClass.value,
//                 Format: Format.value,
//               },
//             ],
//           });
//           // Clear form fields
//           id.value = "";
//           category.value = "";
//           SubCartegory.value = "";
//           Method.value = "";
//           Species.value = "";
//           Substrate.value = "";
//           Parameter.value = "";
//           lgClass.value = "";
//           Format.value = "";
//         }}
//       >
//         <input type="text" name="id" placeholder="ID" />
//         <input type="text" name="category" placeholder="Category" />
//         <input type="text" name="SubCartegory" placeholder="Subcategory" />
//         <input type="text" name="Method" placeholder="Method" />
//         <input type="text" name="Species" placeholder="Species" />
//         <input type="text" name="Substrate" placeholder="Substrate" />
//         <input type="text" name="Parameter" placeholder="Parameter" />
//         <input type="text" name="lgClass" placeholder="lgClass" />
//         <input type="text" name="Format" placeholder="Format" />
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// };

// export default MyComponent;

// import React, { useState, useEffect } from "react";
// // import firebase from "firebase/app";
// // import "firebase/database";
// import { firestore } from "../../../firebase.config";
// import { collection, getDocs } from "firebase/firestore";

// const MyComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch initial data from Firebase
//   const fetchData = async (labReagent) => {
//     const detailsColRef = collection(
//       firestore,
//       "LabReagents",
//       labReagent.id,
//       "details"
//     );
//     const detailsSnapshot = await getDocs(detailsColRef);
//     const detailsData = detailsSnapshot.docs.map((doc) => doc.data());
//     setData(detailsData);
//   };
//     fetchData();
//     console.log("data", data);
//   }, []);
//   // console.log(data);

//   const addData = (newData) => {
//     // Push the new data to Firebase
//     firestore().ref("LabReagents").push(newData);
//   };

//   const editData = (id, updatedData) => {
//     // Update the existing data in Firebase
//     firestore().ref(`LabReagents/${id}`).set(updatedData);
//   };

//   const deleteData = (id) => {
//     // Remove the data from Firebase
//     firestore().ref(`LabReagents/${id}`).remove();
//   };

//   return (
//     <div>
//       {/* Render the data */}
//       {data.map((item) => (
//         <div key={item.id}>
//           <p>ID: {item.id}</p>
//           <p>Category: {item.data.category}</p>
//           <p>Subcategory: {item.data.SubCartegory}</p>
//           <p>Method: {item.data.Method}</p>
//           <p>Species: {item.data.Species}</p>
//           <p>Substrate: {item.data.Substrate}</p>
//           <p>Parameter: {item.data.Parameter}</p>
//           {/* Render subcollectionData */}
//           {item.data.subcollectionData.map((subData) => (
//             <div key={`${item.id}-${subData.lgClass}-${subData.Format}`}>
//               <p>lgClass: {subData.lgClass}</p>
//               <p>Format: {subData.Format}</p>
//             </div>
//           ))}
//           {/* Add an edit button to trigger the editData function */}
//           <button
//             onClick={() =>
//               editData(item.id, {
//                 ...item.data,
//                 category: "Updated Category",
//                 // Update other fields as needed
//               })
//             }
//           >
//             Edit
//           </button>
//           {/* Add a delete button to trigger the deleteData function */}
//           <button onClick={() => deleteData(item.id)}>Delete</button>
//         </div>
//       ))}

//       {/* Add a form to add new data */}
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           const {
//             id,
//             category,
//             SubCartegory,
//             Method,
//             Species,
//             Substrate,
//             Parameter,
//             lgClass,
//             Format,
//           } = e.target.elements;
//           addData({
//             id: id.value,
//             data: {
//               category: category.value,
//               SubCartegory: SubCartegory.value,
//               Method: Method.value,
//               Species: Species.value,
//               Substrate: Substrate.value,
//               Parameter: Parameter.value,
//               subcollectionData: [
//                 {
//                   lgClass: lgClass.value,
//                   Format: Format.value,
//                 },
//               ],
//             },
//           });
//           // Clear form fields
//           id.value = "";
//           category.value = "";
//           SubCartegory.value = "";
//           Method.value = "";
//           Species.value = "";
//           Substrate.value = "";
//           Parameter.value = "";
//           lgClass.value = "";
//           Format.value = "";
//         }}
//       >
//         <input type="text" name="id" placeholder="ID" />
//         <input type="text" name="category" placeholder="Category" />
//         <input type="text" name="SubCartegory" placeholder="Subcategory" />
//         <input type="text" name="Method" placeholder="Method" />
//         <input type="text" name="Species" placeholder="Species" />
//         <input type="text" name="Substrate" placeholder="Substrate" />
//         <input type="text" name="Parameter" placeholder="Parameter" />
//         <input type="text" name="lgClass" placeholder="lgClass" />
//         <input type="text" name="Format" placeholder="Format" />
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// };

// export default MyComponent;
