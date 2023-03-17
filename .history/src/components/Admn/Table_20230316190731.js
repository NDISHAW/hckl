import React, { useState, useEffect } from "react";
import DropDown from "./components/DropDown";
import Searchbar from "./components/Searchbar";
import Table from "./components/Table";
import EditableCell from "./components/EditableCell";
// import columns from "./data";
import { useMutation } from "react-query";
import { useStateValue } from "../../context/StateProvider";

function App() {
  const [rowdata, setRowData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [skipPageReset, setSkipPageReset] = useState(false);
  const [{ foodItems }, dispatch] = useStateValue();

  const [mutate, { isSuccess, data, error }] = useMutation((event) => {
    fetch(
      `https://docs.google.com/spreadsheets/d/1QgT1UEQTmfKOyUu6Kf25Ge5cTu2bOf_5020faH4y_Sk/edit?usp=sharing`,
      {
        method: "POST",
        body: JSON.stringify(event),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  });

  useEffect(() => {
    setSkipPageReset(false);
  }, [rowdata]);

  const onItemClick = (e) => {
    console.log("e", e);
    if (e === "all") {
      setFilteredData(rowdata);
    } else {
      const result = rowdata.filter((item) => item.gender === e);

      setFilteredData(result);
    }
  };

  const onSearchbarChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setFilteredData(rowdata);
    } else {
      if (filteredData.length > 0) {
        const result = filteredData.filter((item) => item.email === value);

        setFilteredData(result);
      } else {
        const result = rowdata.filter((item) => item.email === value);

        setFilteredData(result);
      }
    }
  };

  const onAddRowClick = () => {
    setRowData(
      rowdata.concat({ username: "", email: "", gender: "", phone: "" })
    );
  };

  const onSaveData = async () => {
    console.log("Save data");

    await mutate({ rowdata });
  };

  const columns = [
    {
      Header: "id",
      accessor: "id",
      // Cell: EditableCell,
    },
    {
      Header: "Title",
      accessor: "title",
      Cell: EditableCell,
    },
    {
      Header: "Image",

      Cell: (tableProps) => (
        <img
          className="rounded-full h-20  md:mr-20 border-2 border-white shadow-sm"
          alt="prod img"
          src={tableProps.row.original.imageURL}
        />
      ),
    },
    {
      Header: "Gender",
      accessor: "gender",
      Cell: ({
        value: initialValue,
        row: { index },
        column: { id },
        updateMyData,
      }) => {
        const onItemClick = (value) => {
          console.log("value", value);
          updateMyData(index, id, value);
        };

        return (
          <DropDown
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
            title={"Select Gender"}
            selectedValue={initialValue}
            onItemClick={onItemClick}
          />
        );
      },
    },
    {
      Header: "Phone",
      accessor: "phone",
      Cell: EditableCell,
    },
  ];

  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true);
    setRowData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  return (
    <div className="container mx-auto">
      {isSuccess ? (
        <div className="alert mt-8 flex flex-row items-center bg-green-200 p-5 rounded border-b-2 border-green-300">
          <div className="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
            <span className="text-green-500">
              <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
          <div className="alert-content ml-4">
            <div className="alert-title font-semibold text-lg text-green-800">
              Success
            </div>
          </div>
        </div>
      ) : null}
      <div className="mt-8">
        <p>
          {" "}
          you can view the saved data in this{" "}
          <a
            className="no-underline hover:underline text-blue-500 text-lg"
            href="https://docs.google.com/spreadsheets/d/1QgT1UEQTmfKOyUu6Kf25Ge5cTu2bOf_5020faH4y_Sk/edit?usp=sharing"
          >
            sheet
          </a>
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <Searchbar onChange={onSearchbarChange} />
        <DropDown
          options={[
            { label: "All", value: "all" },
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          title={"Select Gender"}
          onItemClick={onItemClick}
        />
      </div>
      <button
        onClick={onAddRowClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Row
      </button>
      <div className="flex justify-center mt-8">
        <Table
          columns={columns}
          data={filteredData.length > 0 ? filteredData : rowdata}
          updateMyData={updateMyData}
          skipPageReset={skipPageReset}
        />
      </div>
      <button
        onClick={onSaveData}
        className="bg-green-500  mt-8 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Save To Google Sheet
      </button>
    </div>
  );
}

export default App;
