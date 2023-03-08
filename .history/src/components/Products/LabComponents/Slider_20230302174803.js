import { Fragment } from "react";
import LabcatSlide from "./LabcatSlide";
import { labEquipment, labReagents } from "../../../utils/data";
import useSliderAminated from "../../../hooks/useSliderAminated";
import SliderNav from "./SliderNav";
import RowContainer from "../../RowContainer";
const Slider = ({filter, foodItems}) => {
  const {
    labEqupmentClassName,
    labReagentsClassName,
    clickedLabEquipment,
    handleClickAction,
    clickedlabReagents,
  } = useSliderAminated();
  return (
    <Fragment>
      <div id="slider" className="slider ">
        <SliderNav
          clickedLabEquipment={clickedLabEquipment}
          handleClickAction={handleClickAction}
          clickedlabReagents={clickedlabReagents}
        />{" "}
        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category == filter)}
          />
        </div>
        <ul id="ListSport" className={`badgesList  ${labEqupmentClassName}`}>
          <LabcatSlide dataArray={labEquipment} />
        </ul>
        <ul id="ListElectric" className={`badgesList ${labReagentsClassName}`}>
          <LabcatSlide dataArray={labReagents} />
        </ul>
      </div>
    </Fragment>
  );
};

export default Slider;
