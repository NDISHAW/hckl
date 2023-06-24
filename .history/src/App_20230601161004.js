import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer, CartContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import Topbar from "./components/Topbar";
import About from './components/About/About';
import AOS from "aos";
import "aos/dist/aos.css";
import HomeContainer from './components/HomeContainer';
import Products from "./components/Products/Products";
import Footer from "./components/About/Footer/Footer";
// import MyApp from "./components/Admin/pages/MyApp";
// import Layout from './components/Admin/components/Layout';
// import Home from './components/Admin/Home';
import TaskManager from "./components/Manage/TaskManager";
import { MdAdminPanelSettings } from "react-icons/md";
import Contact from './components/Contact/Contact';


const App = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [{ foodItems, cartShow }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      console.log(data);
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const location = useLocation();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      {/* <Topbar /> */}
      {/* <> */}

      {/* <Slider /> */}
      <div className="w-auto h-auto flex flex-col bg-primary scrollbar-hide">
        <Header /> <br />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full scrollbar-hide">
          <Routes>
            <Route exact path="/*" element={<HomeContainer />} />
            <Route path="/products" element={<Products />} />

            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/admn" element={<TaskManager />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      {cartShow && <CartContainer />}
      {openLogInModal && (
        <SignIn
          onClose={() => setOpenLogInModal(false)}
          open={openLogInModal}
        />
      )}
      <Footer />
    </AnimatePresence>
    // {/* </> */}
  );
};

export default App;
