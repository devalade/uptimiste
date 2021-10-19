import React from "react";
import Days from "./Days";
const DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

function ShowMonth() {
  return (
    <div className="mt-2 border-2 divide-y-2 h-full w-full">
      <div className="grid grid-cols-7 h-10 divide-x-2">
        {DAYS.map((d, key) => (
          <h4
            key={key}
            className="text-right flex items-center justify-end pr-2">
            {d}
          </h4>
        ))}
      </div>
      <div className="grid grid-cols-7 h-80  divide-x-2 divide-y">
        <Days value="26" />
        <Days value="27" />
        <Days value="28" />
        <Days value="29" />
        <Days value="30" />
        <Days value="31" />
        <Days value="1" />
        <Days value="2" />
        <Days value="3" />
        <Days value="4" />
        <Days value="5" />
        <Days value="6" />
        <Days value="7" />
        <Days value="8" />
        <Days value="9" />
        <Days value="10" />
        <Days value="11" />
        <Days value="12" />
        <Days value="13" />
        <Days value="14" />
        <Days value="15" />
        <Days value="16" />
        <Days value="17" />
        <Days value="18" />
        <Days value="19" />
        <Days value="20" />
        <Days value="21" />
        <Days value="22" />
        <Days value="23" active />
        <Days value="24" current />
        <Days value="25" active />
        <Days value="26" active />
        <Days value="27" active />
        <Days value="28" active />
        <Days value="29" active />
        <Days value="30" />
        <Days value="31" />
        <Days value="1" />
        <Days value="2" />
        <Days value="3" />
        <Days value="4" />
        <Days value="5" />
      </div>
    </div>
  );
}

export default ShowMonth;
