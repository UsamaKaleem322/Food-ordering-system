import React from "react";
import { FaGooglePlusG } from "react-icons/fa";

const GoogleButton = () => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        border: "1px solid #ccc",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <FaGooglePlusG size={25} color="red" />
    </div>
  );
};

export default GoogleButton;
