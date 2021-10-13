import React from "react";

function Select({ name, placeholder = "", error, datas }) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-sm text-gray-900 font-medium">
          {name}
        </span>
      </label>
      <select class="select select-bordered text-gray-700 w-full bg-gray-50 border-2 border-custom-l3  focus:shadow-none focus:ring-custom-l3 focus:ring-2">
        <option disabled="disabled" selected="selected">
          {placeholder}
        </option>
        <option>Donnee 1</option>
        <option>Donnee 2</option>
        <option>Donne 3</option>
      </select>
      <label className="label">
        <small href="#" class="label-text-alt text-error">
          {error}
        </small>
      </label>
    </div>
  );
}

export default Select;
