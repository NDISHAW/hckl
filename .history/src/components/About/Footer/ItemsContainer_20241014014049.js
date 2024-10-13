import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY } from "./Menus";
import { Link } from "react-router-dom";
import logo from "../../../img/logo.png";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 mt-10">
      <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">
            <Link to={"/"} className="flex items-center gap-2 ">
              <img
                src={logo}
                className="w-[125vh] h-[10vh] object-fill right-5"
                alt="logo"
              />
              {/* <p className="text-headingColor text-xl font-bold"> City</p> */}
            </Link>
          </span>
        </h1>
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="CONTACT INFORMATION" />
      {/* <Item Links={SUPPORT} title="SUPPORT" /> */}

        <iframe
          title="Map Directions"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.810762689687!2d36.87861611461446!3d-1.2876717359905419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13efb0a813ef%3A0x67fd419680769624!2sHospital%20Consumables!5e0!3m2!1sen!2ske!4v1678474322205!5m2!1sen!2ske"
          width="450"
          height="200"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  );
};

export default ItemsContainer;
  