import React from "react";

function ChevronRight({ className }) {
  return (
    <svg
      className={className}
      width={6}
      height={10}
      viewBox='0 0 6 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1.34985 8.58531L4.43235 5.50281C4.57204 5.36229 4.65045 5.1722 4.65045 4.97406C4.65045 4.77592 4.57204 4.58583 4.43235 4.44531L1.43235 1.44531'
        stroke='#151515'
        strokeWidth='1.3125'
        strokeLinecap='round'
        strokeLinejoin='bevel'
      />
    </svg>
  );
}

export default ChevronRight;
