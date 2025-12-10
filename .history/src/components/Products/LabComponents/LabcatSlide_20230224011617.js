import { Fragment,useState } from "react";
import { useStateValue } from "../../../context/StateProvider";
import { categories } from "../../../utils/data";
import RowContainer from "../../RowContainer";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const LabcatSlide = ({ dataArray }) => {
    const [filter, setFilter] = useState("hospital");

    const [{ foodItems }, dispatch] = useStateValue();
  return (
    <Fragment>
      {/* <div
        id="hospital"
        className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none"
      >
        {categories &&
          categories.map((dataArray) => (
            <motion.div
              whileTap={{ scale: 0.75 }}
              key={dataArray.id}
              className={`group ${
                filter === dataArray.urlParamName ? "bg-blue-400 " : "bg-card"
              } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-blue-900 `}
              onClick={() => setFilter(dataArray.urlParamName)}
            >
              <div
                className={`w-10 h-10 rounded-full shadow-lg ${
                  filter === dataArray.urlParamName ? "bg-white" : "bg-Main"
                } group-hover:bg-white flex items-center justify-center`}
              >
                <Icon
                  icon="medical-icon:hospital"
                  className={`${
                    filter === dataArray.urlParamName
                      ? "text-textColor"
                      : "text-white"
                  } group-hover:text-textColor text-lg`}
                />
              </div>
              <p
                className={`text-sm ${
                  filter === dataArray.urlParamName
                    ? "text-white"
                    : "text-textColor"
                } group-hover:text-white`}
              >
                {dataArray.name}
              </p>

             
            </motion.div>
          ))}
      </div>
      <div className="w-full">
        <RowContainer
          flag={false}
          data={foodItems?.filter((n) => n.dataArray == filter)}
        />
      </div> */}
      {dataArray.map((res) => (
        <li key={res.id}>
          <motion.div
            whileTap={{ scale: 0.75 }}
            key={dataArray.id}
            className={`group ${
              filter === dataArray.urlParamName ? "bg-blue-400 " : "bg-card"
            } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-blue-900 `}
            onClick={() => setFilter(dataArray.urlParamName)}
          >
            <div
              className={`w-10 h-10 rounded-full shadow-lg ${
                filter === dataArray.urlParamName ? "bg-white" : "bg-Main"
              } group-hover:bg-white flex items-center justify-center`}
            >
              <Icon
                icon="medical-icon:hospital"
                className={`${
                  filter === dataArray.urlParamName
                    ? "text-textColor"
                    : "text-white"
                } group-hover:text-textColor text-lg`}
              />
            </div>
            <p
              className={`text-sm ${
                filter === dataArray.urlParamName
                  ? "text-white"
                  : "text-textColor"
              } group-hover:text-white`}
            >
              {dataArray.name}
            </p>
          </motion.div>
          {/* <img
            loading="lazy"
            src={res.logo}
            alt="logo"
            style={{ width: res.width, height: "auto" }}
          />
          <br />
          <h4 style={{ fontSize: 17 }}>{res.name}</h4> */}
        </li>
      ))}
    </Fragment>
  );
};

export default LabcatSlide;
