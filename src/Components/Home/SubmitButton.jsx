import React from "react";
import { Link } from "react-router-dom";

const SubmitButton = (props) => {
  return (
    <Link to={"/searchresults/" + props.queryString}>
      <button>Submit</button>
    </Link>
  );
};

export default SubmitButton;
