import React from "react";

function CheckBox({ name, checked = "" }) {
  return (
    <div className="form-control w-max space-x-4">
      <label className="label">
        <input
          type="radio"
          name="opt"
          checked={checked}
          value=""
          className="radio checked:bg-custom-l1 mr-3"
        />
        <span className="label-text">{name}</span>
      </label>
    </div>
  );
}

export default CheckBox;
