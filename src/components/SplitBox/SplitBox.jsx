import React from "react";
import PropTypes from "prop-types";
import MiArrow from "../icons/MiArrow";
import SplitBoxItems from "./SplitBoxItems";

function SplitBox({
  title,
  status,
  componentTitle = "",
  date,
  startDate = "29 Mars",
  endDate = "01 Avril 2021",
}) {
  const [activeSplitBox, setActiveSplitBox] = React.useState(true);

  const handleClick = () => {
    setActiveSplitBox((prev) => !prev);
  };
  return (
    <div>
      <span
        onClick={handleClick}
        className='flex items-center bg-custom-l3 pl-4 py-1 space-x-2 cursor-pointer'>
        <MiArrow />
        <h2 className='w-full  text-lg text-gray-900 font-medium'>{title}</h2>
      </span>
      {activeSplitBox && (
        <div className='divide-y-2 divide-gray-200 transition-all'>
          <SplitBoxItems
            headText='Transport'
            headValue='20.000'
            bodyText='Essence'
            date={date || "01 Avril 2021"}
            status={status}
            componentTitle={componentTitle}
          />
          <SplitBoxItems
            headText='Autre'
            headValue='20.000'
            bodyText='Petit déjeuner'
            date={date || "01 Avril 2021"}
            status={status}
            componentTitle={componentTitle}
          />
          <SplitBoxItems
            headText='Autre'
            headValue='20.000'
            bodyText='Petit déjeuner'
            date={date || "01 Avril 2021"}
            status={status}
            componentTitle={componentTitle}
          />
        </div>
      )}
    </div>
  );
}

export default SplitBox;
