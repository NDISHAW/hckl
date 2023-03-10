import React, { useEffect } from "react";
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


const App = () => {
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
      <div className="w-screen h-auto flex flex-col bg-primary scrollbar-hide">
        <Header /> <br />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full scrollbar-hide">
          <Routes>
            <Route path="/*" element={<HomeContainer />} />
            <Route path="/products" element={<Products />} />

            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
      {cartShow && <CartContainer />}
      
    </AnimatePresence>
    // {/* </> */}
  );
};

export default App;
