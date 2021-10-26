import React from "react";
import PropTypes from "prop-types";

function CheckBox({ label, name, checked }) {
  return (
    <div className='form-control w-max space-x-4'>
      <label className='label'>
        <input
          type='radio'
          name={name}
          checked={checked}
          value=''
          className='radio checked:bg-custom-l1 mr-3'
        />
        <span className='label-text'>{label}</span>
      </label>
    </div>
  );
}

CheckBox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
};

export default CheckBox;
