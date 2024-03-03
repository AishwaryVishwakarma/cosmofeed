import React from 'react';

import {type CommonIconProps} from './types';

export const HamMenu: React.FC<CommonIconProps> = ({
  height = 12,
  width = 25,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 25 12'
      fill='none'
      {...rest}
    >
      <line y1='1' x2='25' y2='1' stroke='white' strokeWidth='2' />
      <line y1='11' x2='25' y2='11' stroke='white' strokeWidth='2' />
    </svg>
  );
};
