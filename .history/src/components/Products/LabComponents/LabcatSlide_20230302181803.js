import { Fragment, useState } from "react";
import { useStateValue } from "../../../context/StateProvider";
import { categories } from "../../../utils/data";
import RowContainer from "../../RowContainer";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const LabcatSlide = ({ dataArray }) => {
  const [filter, setFilter] = useState("");
console.log(filter);
  const [{ foodItems }, dispatch] = useStateValue();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div
        id="hospital"
        className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none"
      >
        {dataArray.map((res) => (
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
        ))}
      </div>
      <div className="w-full">
        <RowContainer
          flag={false}
          data={foodItems?.filter((n) => n.category == filter)}
        />
      </div>
    </div>
  );
};

export default LabcatSlide;
