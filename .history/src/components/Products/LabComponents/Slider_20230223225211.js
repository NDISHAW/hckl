import { Fragment } from "react";
import LabcatSlide from "./LabcatSlide";
import { labEquipment, labReagents } from "../data";
import useSliderAminated from "..";
import SliderNav from "./SliderNav";

const Slider = () => {
  const {
    labEqupmentClassName,
    labReagentsClassName,
    clickedLabEquipment,
    handleClickAction,
    clickedlabReagents,
  } = useSliderAminated();
  return (
    <Fragment>
      <div id="slider" className="slider">
        <ul id="ListSport" className={`badgesList  ${labEqupmentClassName}`}>
          <LabcatSlide dataArray={labEquipment} />
        </ul>
        <ul id="ListElectric" className={`badgesList ${labReagentsClassName}`}>
          <LabcatSlide dataArray={labReagents} />
        </ul>
        <SliderNav
          clickedLabEquipment={clickedLabEquipment}
          handleClickAction={handleClickAction}
          clickedlabReagents={clickedlabReagents}
        />
      </div>
    </Fragment>
  );
};

export default Slider;
