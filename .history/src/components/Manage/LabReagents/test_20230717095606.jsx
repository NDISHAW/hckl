import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const FirestoreComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Initialize Firebase app (make sure you have already set up your Firebase configuration)
    firebase.initializeApp({
      // Your Firebase config here
    });

    // Fetch data from Firestore collection
    const fetchData = async () => {
      try {
        const collectionRef = firebase.firestore().collection("labReagents");
        const snapshot = await collectionRef.get();

        const reagents = [];
        snapshot.forEach((doc) => {
          const reagentData = doc.data();
          reagentData.id = doc.id;

          // Fetch items from the subcollection
          const itemsSnapshot = doc.ref.collection("items");
          const items = [];
          itemsSnapshot.forEach((itemDoc) => {
            const itemData = itemDoc.data();
            itemData.id = itemDoc.id;
            items.push(itemData);
          });

          reagentData.items = items;
          reagents.push(reagentData);
        });

        setData(reagents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // CRUD operations
  const createReagent = async (reagentData) => {
    try {
      const collectionRef = firebase.firestore().collection("labReagents");
      await collectionRef.add(reagentData);
    } catch (error) {
      console.error("Error creating reagent:", error);
    }
  };

  const updateReagent = async (reagentId, updatedData) => {
    try {
      const docRef = firebase
        .firestore()
        .collection("labReagents")
        .doc(reagentId);
      await docRef.update(updatedData);
    } catch (error) {
      console.error("Error updating reagent:", error);
    }
  };

  const deleteReagent = async (reagentId) => {
    try {
      const docRef = firebase
        .firestore()
        .collection("labReagents")
        .doc(reagentId);
      await docRef.delete();
    } catch (error) {
      console.error("Error deleting reagent:", error);
    }
  };

  return (
    <div>
      <h2>Lab Reagents</h2>
      <ul>
        {data.map((reagent) => (
          <li key={reagent.id}>
            <h3>{reagent.name}</h3>
            <p>{reagent.description}</p>
            <ul>
              {reagent.items.map((item) => (
                <li key={item.id}>
                  <span>{item.lgClass}</span> - <span>{item.format}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirestoreComponent;

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
