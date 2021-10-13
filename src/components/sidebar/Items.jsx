import React from "react";
import { Link, NavLink } from "react-router-dom";

function Items({ icon: Icon, name, to = "" }) {
  return (
    <NavLink
      to={to}
      activeClassName="bg-custom-light text-custom-d"
      className="w-full group text-gray-50  hover:bg-custom-light hover:text-custom-d flex items-center pl-8 p-2 py-3  my-2 transition-colors duration-200 justify-start"
      href="#">
      <span className="text-left">
        <Icon className=" fill-current text-custom-l2  group-hover:text-custom-d" />
      </span>
      <span className="ml-8 mx-2 text-lg font-normal">{name}</span>
    </NavLink>
  );
}

export default Items;
