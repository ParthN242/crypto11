import React from "react";
import "./error.scss";

const Error = ({ message }) => {
  return <div className="errorContainer">{message}</div>;
};

export default Error;
