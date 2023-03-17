import React, { useState, useEffect, useMemo, useRef } from "react";
import TutorialDataService from "../services/TutorialService";
import { useTable } from "react-table";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../../../utils/firebaseFunctions";
import { getAllFoodItems, saveItem } from "../../../../utils/firebaseFunctions";
import { actionType } from "../../../../context/reducer";
import { useStateValue } from "../../../../context/StateProvider";

const TutorialsList = (props) => {
  const [{ foodItems }, dispatch] = useStateValue();

  // const fetchData = async () => {
  //   await getAllFoodItems().then((data) => {
  //     dispatch({
  //       type: actionType.SET_FOOD_ITEMS,
  //       foodItems: data,
  //     });
  //   });
  // };

  const [tutorials, setTutorials] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const tutorialsRef = useRef();

  tutorialsRef.current = tutorials;

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveTutorials = () => {
    TutorialDataService.getAll()
      .then((response) => {
        setTutorials(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveTutorials();
  };

  const removeAllTutorials = () => {
    TutorialDataService.removeAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    TutorialDataService.findByTitle(searchTitle)
      .then((response) => {
        setTutorials(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openTutorial = (rowIndex) => {
    const id = tutorialsRef.current[rowIndex].id;

    props.history.push("/tutorials/" + id);
  };

  const deleteTutorial = (rowIndex) => {
    const id = tutorialsRef.current[rowIndex].id;

    TutorialDataService.remove(id)
      .then((response) => {
        props.history.push("/tutorials");

        let newTutorials = [...tutorialsRef.current];
        newTutorials.splice(rowIndex, 1);

        setTutorials(newTutorials);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const columns = useMemo(
    () => [
      {
        Header: "id",
        accessor: "id",
      },
      {
        Header: "Title",
        accessor: "title",
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
        Header: "calories",
        accessor: "calories",
      },
      {
        Header: "price",
        accessor: "price",
      },
      {
        Header: "Description",
        accessor: "description",
        wrap: true,
      },
      // {
      //   Header: "Status",
      //   accessor: "published",
      //   Cell: (props) => {
      //     return props.value ? "Published" : "Pending";
      //   },
      // },
      // {
      //   Header: "Actions",
      //   accessor: "actions",
      //   Cell: (props) => {
      //     const rowIdx = props.row.id;
      //     return (
      //       <div>
      //         <span onClick={() => openTutorial(rowIdx)}>
      //           <i className="far fa-edit action mr-2"></i>
      //         </span>

      //         <span onClick={() => deleteTutorial(rowIdx)}>
      //           <i className="fas fa-trash action"></i>
      //         </span>
      //       </div>
      //     );
      //   },
      // },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: foodItems,
  });

  return (
    <div className="flex flex-col ">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
  <div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
        <div class="py-3 px-4">
          <div class="relative max-w-xs">
            <label for="hs-table-search" class="sr-only">Search</label>
            <input type="text" name="hs-table-search" id="hs-table-search" class="p-3 pl-10 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Search for items">
            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
              <svg class="h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </div>
          </div>
        </div>
        

          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <table
          className="min-w-full text-left text-sm font-light"
          {...getTableProps()}
          
        >
          <thead className="border-b font-medium dark:border-neutral-500">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  className="border-b dark:border-neutral-500"
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        className="whitespace-nowrap px-6 py-4"
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="col-md-8">
        <button className="btn btn-sm btn-danger" onClick={removeAllTutorials}>
          Remove All
        </button>
      </div>
    </div>
  );
};

export default TutorialsList;
