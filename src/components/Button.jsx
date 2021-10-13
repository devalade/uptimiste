import React from "react";
import Add from "../components/icons/Add";

function Button({ text }) {
  return (
    <button
      className="btn capitalize bg-custom-d border-custom-d hover:bg-custom-d hover:border-custom-d"
      role="button"
      aria-pressed="true">
      <Add className="h-5 w-5 font-bold mr-3" />
      {text}
    </button>
  );
}

export default Button;
