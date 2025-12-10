import React, { useState, useEffect } from "react";
// import firebase from "firebase/app";
// import "firebase/database";
import { firestore } from "../../../firebase.config";

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch initial data from Firebase
    const fetchData = async () => {
      const snapshot = await firestore().ref("LabReagents").get();
      if (snapshot.exists()) {
        const fetchedData = Object.values(snapshot.val());
        setData(fetchedData);
        console.log("data", fetchedData);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  const addData = (newData) => {
    // Push the new data to Firebase
    firestore().ref("LabReagents").push(newData);
  };

  const editData = (id, updatedData) => {
    // Update the existing data in Firebase
    firestore().ref(`LabReagents/${id}`).set(updatedData);
  };

  const deleteData = (id) => {
    // Remove the data from Firebase
    firestore().ref(`LabReagents/${id}`).remove();
  };

  return (
    <div>
      {/* Render the data */}
      {data.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Category: {item.data.category}</p>
          <p>Subcategory: {item.data.SubCartegory}</p>
          <p>Method: {item.data.Method}</p>
          <p>Species: {item.data.Species}</p>
          <p>Substrate: {item.data.Substrate}</p>
          <p>Parameter: {item.data.Parameter}</p>
          {/* Render subcollectionData */}
          {item.data.subcollectionData.map((subData) => (
            <div key={`${item.id}-${subData.lgClass}-${subData.Format}`}>
              <p>lgClass: {subData.lgClass}</p>
              <p>Format: {subData.Format}</p>
            </div>
          ))}
          {/* Add an edit button to trigger the editData function */}
          <button
            onClick={() =>
              editData(item.id, {
                ...item.data,
                category: "Updated Category",
                // Update other fields as needed
              })
            }
          >
            Edit
          </button>
          {/* Add a delete button to trigger the deleteData function */}
          <button onClick={() => deleteData(item.id)}>Delete</button>
        </div>
      ))}

      {/* Add a form to add new data */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const {
            id,
            category,
            SubCartegory,
            Method,
            Species,
            Substrate,
            Parameter,
            lgClass,
            Format,
          } = e.target.elements;
          addData({
            id: id.value,
            data: {
              category: category.value,
              SubCartegory: SubCartegory.value,
              Method: Method.value,
              Species: Species.value,
              Substrate: Substrate.value,
              Parameter: Parameter.value,
              subcollectionData: [
                {
                  lgClass: lgClass.value,
                  Format: Format.value,
                },
              ],
            },
          });
          // Clear form fields
          id.value = "";
          category.value = "";
          SubCartegory.value = "";
          Method.value = "";
          Species.value = "";
          Substrate.value = "";
          Parameter.value = "";
          lgClass.value = "";
          Format.value = "";
        }}
      >
        <input type="text" name="id" placeholder="ID" />
        <input type="text" name="category" placeholder="Category" />
        <input type="text" name="SubCartegory" placeholder="Subcategory" />
        <input type="text" name="Method" placeholder="Method" />
        <input type="text" name="Species" placeholder="Species" />
        <input type="text" name="Substrate" placeholder="Substrate" />
        <input type="text" name="Parameter" placeholder="Parameter" />
        <input type="text" name="lgClass" placeholder="lgClass" />
        <input type="text" name="Format" placeholder="Format" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default MyComponent;
    