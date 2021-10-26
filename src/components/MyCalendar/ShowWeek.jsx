import React from "react";

const DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

function ShowWeek() {
  return (
    <div className='mt-2 border-2 divide-y-2 h-full w-full'>
      <div className='grid grid-cols-7 h-10 divide-x-2'>
        {DAYS.map((d, key) => (
          <h4
            key={key}
            className='text-right flex items-center justify-end pr-2'>
            {d}
          </h4>
        ))}
      </div>
      <div className='grid grid-cols-7 h-72 divide-x-2'>
        <h4 className='text-right flex justify-end text-gray-400 pt-2 pr-2'>
          1
        </h4>
        <h4 className='text-right flex justify-end text-gray-400 pt-2 pr-2'>
          2
        </h4>
        <h4 className='text-right flex justify-end text-gray-400 pt-2 pr-2'>
          3
        </h4>
        <h4 className='text-right flex justify-end text-gray-400 pt-2 pr-2'>
          4
        </h4>
        <h4 className='text-right flex justify-end text-gray-400 pt-2 pr-2'>
          5
        </h4>
        <h4 className='text-right flex justify-end text-gray-400 pt-2 pr-2'>
          6
        </h4>
        <h4 className='text-right flex justify-end text-gray-900 pt-2 pr-2'>
          7
        </h4>
      </div>
    </div>
  );
}

export default ShowWeek;
