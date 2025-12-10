import "./S"

const SliderNav = (props) => {
  const { clickedLabEquipment, handleClickAction, clickedlabReagents } = props;
  return (
    <nav>
      <span
        className={clickedLabEquipment ? "selected" : ""}
        onClick={handleClickAction}
      >
        Equipment
      </span>
      <span
        className={clickedlabReagents ? "selected" : ""}
        onClick={handleClickAction}
      >
        Reagents
      </span>
    </nav>
  );
};

export default SliderNav;
