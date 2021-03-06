import React from "react";

function ChevronLeft({ className }) {
  return (
    <svg
      className={className}
      width={6}
      height={10}
      viewBox='0 0 6 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4.65015 1.41469L1.56765 4.49719C1.42796 4.63771 1.34955 4.8278 1.34955 5.02594C1.34955 5.22408 1.42796 5.41417 1.56765 5.55469L4.56765 8.55469'
        stroke='#151515'
        strokeWidth='1.3125'
        strokeLinecap='round'
        strokeLinejoin='bevel'
      />
    </svg>
  );
}

export default ChevronLeft;
