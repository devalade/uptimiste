import React from "react";

function Textarea({ name, placeholder }) {
  return (
    <div class="form-control">
      <label class="label">
        <span class="label-text text-gray-900 font-semibold">{name}</span>
      </label>
      <textarea
        class="textarea h-24 textarea-bordered bg-gray-50 border-2 border-custom-l3  focus:shadow-none focus:ring-custom-l3 focus:ring-2"
        placeholder={placeholder}></textarea>
    </div>
  );
}

export default Textarea;
