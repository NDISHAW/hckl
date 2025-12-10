import { Fragment,useState } from "react";
import { useStateValue } from "../../../context/StateProvider";
import { categories } from "../.../";

const LabcatSlide = ({ dataArray }) => {
    const [filter, setFilter] = useState("hospital");

    const [{ foodItems }, dispatch] = useStateValue();
  return (
    <Fragment>
      <div
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

              {/* {category.subCartegories?.map((sub) => (
                  <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className="w-275 h-[575px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
                    <div
                      className={`text-sm ${
                        filter === category.urlParamName
                          ? "text-white"
                          : "text-textColor"
                      } group-hover:text-white`}
                    >
                      {sub.Equipment}
                    </div>
                    <div
                      className={`text-sm ${
                        filter === category.urlParamName
                          ? "text-white"
                          : "text-textColor"
                      } group-hover:text-white`}
                    >
                      {sub.Reagents}
                    </div>
                  </motion.div>
                ))} */}
            </motion.div>
          ))}
      </div>
      <div className="w-full">
        <RowContainer
          flag={false}
          data={foodItems?.filter((n) => n.category == filter)}
        />
      </div>
      {/* {dataArray.map((res) => (
        <li key={res.id}>
          <img
            loading="lazy"
            src={res.logo}
            alt="logo"
            style={{ width: res.width, height: "auto" }}
          />
          <br />
          <h4 style={{ fontSize: 17 }}>{res.name}</h4>
        </li>
      ))} */}
    </Fragment>
  );
};

export default LabcatSlide;
