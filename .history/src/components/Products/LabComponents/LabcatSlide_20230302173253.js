import { Fragment, useState } from "react";
import { useStateValue } from "../../../context/StateProvider";
import { categories } from "../../../utils/data";
import RowContainer from "../../RowContainer";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const LabcatSlide = ({ dataArray }) => {
  const [filter, setFilter] = useState("hospital");
console.log(filter);
  const [{ foodItems }, dispatch] = useStateValue();
  return (
    <Fragment>
      {/* <div
        id="hospital"
        className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none"
      >
        {categories &&
          categories.map((category) => (
            <motion.div
              whileTap={{ scale: 0.75 }}
              key={category.id}
              className={`group ${
                filter === category.urlParamName ? "bg-blue-400 " : "bg-card"
              } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-blue-900 `}
              onClick={() => setFilter(category.urlParamName)}
            >
              <div
                className={`w-10 h-10 rounded-full shadow-lg ${
                  filter === category.urlParamName ? "bg-white" : "bg-Main"
                } group-hover:bg-white flex items-center justify-center`}
              >
                <Icon
                  icon="medical-icon:hospital"
                  className={`${
                    filter === category.urlParamName
                      ? "text-textColor"
                      : "text-white"
                  } group-hover:text-textColor text-lg`}
                />
              </div>
              <p
                className={`text-sm ${
                  filter === category.urlParamName
                    ? "text-white"
                    : "text-textColor"
                } group-hover:text-white`}
              >
                {category.name}
              </p>

             
            </motion.div>
          ))}
      </div>
      <div className="w-full">
        <RowContainer
          flag={false}
          data={foodItems?.filter((n) => n.category == filter)}
        />
      </div> */}
            <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-300 to-blue-900 transition-all ease-in-out duration-100 mr-auto">
          Our Products
        </p>

        <div
          id="hospital"
          className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none"
        >
      {dataArray.map((res) => (
        <>
          <li key={res.id}>
           
            <img
              loading="lazy"
              src={res.logo}
              alt="logo"
              style={{ width: res.width, height: "auto" }}
              onClick={() => setFilter(res.urlParamName)}
            />
            <br />
            <h4 style={{ fontSize: 17 }}>{res.urlParamName}</h4>
          </li>
          <div className="w-full">
            <RowContainer
              flag={false}
              data={foodItems?.filter((n) => n.category == filter) }
            />
          </div>
        </>
      ))}
    </Fragment>
  );
};

export default LabcatSlide;
