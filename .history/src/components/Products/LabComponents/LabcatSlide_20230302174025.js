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
    <div className="w-full flex flex-col items-center justify-center">

      <div
        id="hospital"
        className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none"
      >
        
      </div>
      <div className="w-full">
        {/* <RowContainer
          flag={false}
          data={foodItems?.filter((n) => n.category == filter)}
        /> */}
      </div>
    </div>
  );
};

export default LabcatSlide;
