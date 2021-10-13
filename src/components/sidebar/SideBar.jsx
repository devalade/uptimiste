import React from "react";
import Items from "./Items";
import Home from "../icons/Home";
import Calendar from "../icons/Calendar";
import Document from "../icons/Document";
import Paper from "../icons/Paper";
import TickSquare from "../icons/TickSquare";
import Category from "../icons/Category";
import Work from "../icons/Work";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="h-screen overflow-y-hidden  lg:block shadow-lg relative w-96">
      <div className="bg-[#173E48] h-full dark:bg-gray-700">
        <div className="flex items-center justify-start pt-12 ml-8">
          <p className="font-semibold text-white text-4xl dark:text-white">
            Uptimiste
          </p>
        </div>
        <nav className="mt-8">
          <div>
            <Items icon={Home} name="Home" to="/home" />
            <Items icon={Calendar} name="Absences" to="/absences" />
            <Items icon={Paper} name="Note de frais" to="/notes-de-frais" />
            <Items icon={Document} name="Bulletins de paie" to="/dsd" />
            <Items icon={TickSquare} name="Validations" to="/validations" />
            <Items icon={Work} name="Temps de travail" to="/temps-de-travail" />
            <Items icon={Category} name="Mon entreprise" to="mon-entreprise" />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
