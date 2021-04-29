import React from "react";
import Errorimg from "./undraw_page_not_found_su7k.svg";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={Errorimg} height="500" width="500" alt="404 not found" />
    </div>
  );
};

export default Error;
