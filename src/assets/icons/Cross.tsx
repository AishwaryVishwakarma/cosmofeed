import React from 'react';

import {type CommonIconProps} from './types';

export const Cross: React.FC<CommonIconProps> = ({
  height = 24,
  width = 24,
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={height}
      height={width}
      viewBox='0 0 24 24'
      fill='none'
      {...rest}
    >
      <line
        x1='1.29289'
        y1='22.2929'
        x2='22.5061'
        y2='1.07969'
        stroke='black'
        strokeWidth='2'
      />
      <line
        x1='22.5063'
        y1='22.9203'
        x2='1.29307'
        y2='1.7071'
        stroke='black'
        strokeWidth='2'
      />
    </svg>
  );
};
