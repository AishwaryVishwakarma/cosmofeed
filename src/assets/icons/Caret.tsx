import React from 'react';

import {type CommonIconProps} from './types';

export const Caret: React.FC<CommonIconProps> = ({
  height = 15,
  width = 10,
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 10 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d='M0.499986 8L8.49999 0L9.93332 1.43333L3.33332 8L9.89999 14.5667L8.46665 16L0.499986 8Z'
        fill='#000000'
      />
    </svg>
  );
};
