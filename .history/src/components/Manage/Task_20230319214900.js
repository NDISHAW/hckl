import './task.css'
import {useState} from 'react'
import TaskItem from './TaskItem'
import EditTask from './EditTask'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import { firestore } from "../../firebase.config";
// import { useStateValue } from "../../context/StateProvider";
import { motion } from "framer-motion";

function Task({ data, completed, flag, id }) {
  // const [{ foodItems }, dispatch] = useStateValue();

  const [checked, setChecked] = useState(completed);
  const [open, setOpen] = useState({ edit: false, view: false });

  const handleClose = () => {
    setOpen({ edit: false, view: false });
  };

  /* function to update firestore */
  const handleChange = async () => {
    const taskDocRef = doc(firestore, "foodItems", id);
    console.log(taskDocRef);
    try {
      await updateDoc(taskDocRef, {
        completed: checked,
      });
    } catch (err) {
      alert(err);
    }
  };

  /* function to delete a document from firstore */
  const handleDelete = async () => {
    const taskDocRef = doc(firestore, "foodItems", id);
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className={`task `}>
      <div
        // ref={rowContainer}
        className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${
          flag
            ? "overflow-x-scroll scrollbar-none"
            : "overflow-x-hidden flex-wrap justify-center"
        }`}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              key={item?.id}
              item={item}
              className="w-275 h-[375px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
            >
              <div className="w-full flex h-fit items-center justify-between">
                <motion.div
                  className="w-40 h-40 -mt-8 drop-shadow-2xl"
                  whileHover={{ scale: 1.2 }}
                >
                  <img
                    src={item?.imageURL}
                    alt=""
                    className="w-full h-full object-contain"
                    // onClick={() => openModal(item)}
                    variant="gradient"
                  />
                </motion.div>
                {/* <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                  onClick={() => setItems([...cartItems, item])}
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div> */}
              </div>

              <div className="w-full flex flex-col items-end justify-end -mt-8">
                <p className="text-textColor font-semibold text-base md:text-lg">
                  {item?.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">{item?.calories}</p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    <span className="text-sm text-blue-500">ksh</span>{" "}
                    {item?.price}
                  </p>
                </div>
                <button
                  type="button"
                  className="bg-gradient-to-br bg-blue-300 hover:bg-blue-900 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
                  // onClick={() => openModal(item)}
                >
                  Learn more <span className="font-bold">...</span>
                </button>
              </div>
              
              {/* <Modal
                onClose={() => {
                  setIsOpen(false);
                }}
                open={isOpen}
              >
                {isClicked.map((prod) => {
                  return (
                    <>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        className="bg-gradient-to-br bg-blue-900 hover:bg-red-600 w-flex md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
                      >
                        X
                      </button>
                      <div
                        key={item?.id}
                        item={item}
                        className="w-675 h-[575px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
                      >
                        <div className="w-full flex h-fit items-center justify-between">
                          <motion.div
                            className="w-40 h-40 -mt-8 drop-shadow-2xl"
                            whileHover={{ scale: 1.2 }}
                          >
                            <img
                              src={prod.imageURL}
                              alt=""
                              className="w-full h-full object-contain"
                              // onClick={() => openModal(item)}
                              variant="gradient"
                            />
                          </motion.div>
                        </div>

                        <div className="w-full flex flex-col items-end justify-end -mt-8">
                          <p className="text-textColor font-semibold text-base md:text-lg">
                            {prod.title}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {prod.description}
                          </p>
                          <div className="flex items-center gap-8">
                            <p className="text-lg text-headingColor font-semibold">
                              <span className="text-sm text-blue-500">ksh</span>{" "}
                              {prod.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Modal> */}
            </div>
          ))
        ) : (
          <div className="w-full flex flex-col items-center justify-center">
            {/* <img src={NotFound} alt="img" className="h-340" /> */}
            <p className="text-xl text-headingColor font-semibold my-2">
              Items Not Available
            </p>
          </div>
        )}
      </div>
      <div className="task__body">
        {/* <h1>{category}</h1> */}
        {/* <h2>{title}</h2> */}
        {/* <p>{description}</p> */}
        {/* <img src={imageURL} alt="Prod img" /> */}
        {/* <p>{price}</p> */}
        {/* <p>{calories}</p> */}

        

      {/* {open.view && (
        <TaskItem
          onClose={handleClose}
          title={calories}
          description={description}
          open={open.view}
        />
      )}

      {open.edit && (
        <EditTask
          onClose={handleClose}
          toEditTitle={calories}
          toEditDescription={description}
          open={open.edit}
          id={id}
        />
      )} */}
    </div>
  );
}

export default Task