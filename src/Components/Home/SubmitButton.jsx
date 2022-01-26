import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SubmitButton = (props) => {
  return (
    <Link to={"/searchresults/" + props.queryString}>
      <Button variant="primary">Submit</Button>
    </Link>
  );
};

export default SubmitButton;
