import { Fragment } from "react";
import LabcatSlide from "./LabcatSlide";
import { labEquipment, labReagents } from "../../../utils/data";
import useSliderAminated from "../../../hooks/useSliderAminated";
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
      <div id="slider" className="slider "w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
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
