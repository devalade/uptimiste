import React from "react";
import ChevronRight from "../icons/ChevronRight";
import StatusIcons from "../StatusIcons";

function SplitBoxItems({
  headText = "Transport",
  headValue = "20.000",
  bodyText = "Essence",
  date = "01 Avril 2021",
  startDate = "29 Mars",
  endDate = "01 Avril 2021",
  status,
  componentTitle,
}) {
  return (
    <div className='px-3 py-4'>
      {(componentTitle === "NoteDeFrais" && (
        <>
          <span className='flex justify-between pb-1.5'>
            <h2 className='uppercase text-lg '>{headText}</h2>
            <small className='text-lg'>{headValue}</small>
          </span>
          <span className='flex justify-between pb-1.5'>
            <h2 className='text-lg font-medium'>{bodyText}</h2>
          </span>
          <span className='flex items-center justify-between pb-1.5'>
            <h2 className='text-lg '>{date}</h2>
            <StatusIcons status={status} />
          </span>
        </>
      )) ||
        (componentTitle === "Absences" && (
          <>
            <span className='flex justify-between pb-1.5'>
              <h2 className='uppercase text-lg '>{headText}</h2>
              <small className='text-lg'>{headValue}</small>
            </span>
            <span className='flex items-center justify-between pb-1.5'>
              <h2 className='text-lg '>{startDate + " - " + endDate}</h2>
              <StatusIcons status={status} />
            </span>
          </>
        )) ||
        (componentTitle === "BulletinDePaie" && (
          <>
            <span className='flex items-center justify-between'>
              <h2 className='text-lg '>{date}</h2>
              <ChevronRight className='w-6 h-4 stroke-current text-gray-300' />
            </span>
          </>
        ))}
    </div>
  );
}

export default SplitBoxItems;
