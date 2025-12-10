import { Fragment } from "react";

const LabcatSlide = ({ dataArray }) => {
  return (
    <Fragment>
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
