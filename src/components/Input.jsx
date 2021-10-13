import React from "react";

function Input({ name, type, placeholder, error = "" }) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-sm text-gray-900 font-medium">
          {name}
        </span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered bg-gray-50 border-2 border-custom-l3  focus:shadow-none focus:ring-custom-l3 focus:ring-2"
      />
      <label className="label">
        <small href="#" class="label-text-alt text-error">
          {error}
        </small>
      </label>
    </div>
  );
}

export default Input;
