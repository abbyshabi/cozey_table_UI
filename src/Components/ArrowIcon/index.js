import React from 'react';

const ArrowIcon = ({ size = 32, color = '#19142B', direction = 'right' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d={
          direction === 'right'
            ? 'M18.5 6L17.07 7.393L24.65 15H4.5V17H24.65L17.07 24.573L18.5 26L28.5 16L18.5 6Z'
            : 'M28.5 17H8.35L15.93 9.427L14.5 8L4.5 18L14.5 28L15.93 26.573L8.35 19H28.5V17Z'
        }
        fill={color}
      />
    </svg>
  );
};

export default ArrowIcon;
