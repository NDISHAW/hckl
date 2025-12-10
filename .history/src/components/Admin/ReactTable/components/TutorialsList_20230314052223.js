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
        maxWidth: "40px",
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
