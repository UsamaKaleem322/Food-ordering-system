import React from "react";
import { FaFacebookF } from "react-icons/fa";

const FacebooxButton = () => {
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
      <FaFacebookF size={25} color="#0861F2" />
    </div>
  );
};

export default FacebooxButton;
