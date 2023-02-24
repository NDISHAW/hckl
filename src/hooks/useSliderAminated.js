import { useEffect, useState } from "react";

const useSliderAminated = () => {
  const [clickedLabEquipment, setclickedLabEquipment] = useState(true);
  const [clickedlabReagents, setclickedlabReagents] = useState(false);
  const [labEqupmentClassName, setlabEqupmentClassName] = useState("");
  const [labReagentsClassName, setlabReagentsClassName] = useState("");

  const handleClickAction = () => {
    setclickedLabEquipment((clickedLabEquipment) => !clickedLabEquipment);
    setclickedlabReagents((clickedlabReagents) => !clickedlabReagents);
  };

  useEffect(() => {
    if (clickedLabEquipment) {
      setlabReagentsClassName("moveToRight");
      setTimeout(() => {
        setlabEqupmentClassName("moveFromLeft");
      }, 500);
    }

    if (clickedlabReagents) {
      setlabEqupmentClassName("moveToLeft");
      setTimeout(() => {
        setlabReagentsClassName("moveFromRight");
      }, 500);
    }
    // const autoSlideTimer = setInterval(() => {
    //   handleClickAction();
    // }, 3700);

    return () => {
      // clearInterval(autoSlideTimer);
      clearTimeout(setTimeout);
    };
  }, [clickedLabEquipment, clickedlabReagents]);

  return {
    clickedLabEquipment,
    handleClickAction,
    clickedlabReagents,
    labEqupmentClassName,
    labReagentsClassName,
  };
};

export default useSliderAminated;
