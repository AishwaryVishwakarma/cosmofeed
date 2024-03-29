import React from 'react';

import {type CommonIconProps} from './types';

export const ShoppingBag: React.FC<CommonIconProps> = ({
  height = 43,
  width = 43,
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 43 44'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...rest}
    >
      <rect y='0.5' width='43' height='43' fill='url(#pattern0)' />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0_260_8' transform='scale(0.0111111)' />
        </pattern>
        <image
          id='image0_260_8'
          width='90'
          height='90'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADfElEQVR4nO2cPU8UURSGB0kAG+yERIMmaCH4A/CrEZP1LxjLxQ60MGojup0f2PuR9S8YSyzQwu9KLTD+CC1gUSzUx0xyC9jszOzeOffMzO55EkLFe88chjvz3LvcKDIMwzAMwzAMwzAMwzB2AYwBV4CPwBbVZwv4AFwGRkvx6wYOAl/oXz7H11iGO7mfm7yz2cXd2W66GBSWimx0PCcPCu+LbHSLwaFVVJPHPQv+CSwD08CI+34L+CXcmBBjjRfR6BnPC59LyDsh3OwQY80Eb2yHYmsehS5nZN72yNQcqxZpA9Q9Cp3OyDzikak5Vj3SBmh4FDqWkTmMHMMZY+31yGxE2gBNj0KPdZErQqBnTDPSBnjhUeidLnJF6GKcex6xq5E2wLpHodvAfEauCBljnHO19Mp6pA2w4dmDbWAlJVeElPwV4Ldn7EawhiYUuy9gI0QImK8nLcBsiRsROl9PWoDzJW5E6Hw9aQEWBAoeCbhQ1XEujdeUBbLrZZeVdvYnZH8jP18TsicEsvWkBXgqUPBcQvYTgeyHCdmnBLL1pCV+cRco+GrKO25eziZkXxPI1pOW+E9ToODXKflrOXJfpeS+E6h7vQqyspM/KfP0UeAHvfM9adUOmAT+kp+Nsu+sdOJ+yjhnemx23OTTKXkPkGO8ErLSpuNTGWvGL8lmLW39GTicQ7s7MRuswTl3VtJ4BgxljDkPPHbPhpb7ihe1HiU9+Hb87BDwHFlqVZGVdm6W/J1fX1oCFf4PuBCg1osuW5pGVWSlE3FD7gJ7BGqMp4sbQm8ZxUiLkKxkzdlTOeo7FGBO1pcWz50Vr82BeG2ih7om3Suc5NtFcdIiJCvdEv/pv3HqfNItCo24VbgJt3ZxHXgbcJrQlxaJnZU+Ipy0AMeLvroSMVvqnZU+olY1Wakq9arJSlVpVFFWqkizbB8D61dWy76z0i+EkxZgs+irKxGboZpssqIhLSYrStJisqIkLSYrStJisqIkLSYrStJisqIkLSYrStJisqIgLSYrStJisqIkLSYrStICXEofa6BZkGy07axoSIvJipK0mKwoSYvSx8Cqipy0mKwoScuAHbtW3OfwBuwgweIOHnSnzhqdWZRs9Kg7CNXYzaekwwPyHl9szd7d5AOiTW67s5fieWlAH5At92/Oi+J3smEYhmEYhmEYhmEYRlQd/gP1FM7lSIBbVwAAAABJRU5ErkJggg=='
        />
      </defs>
    </svg>
  );
};
