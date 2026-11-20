import React from 'react';

const VIEWBOX_WIDTH = 19;
const VIEWBOX_HEIGHT = 15.0417;

const BAR_HEIGHT = 2.375;
const BAR_RADIUS = BAR_HEIGHT / 2;
const BAR_OFFSETS = [0, 6.33333, 12.6666];

export type MenuIconProps = Omit<React.SVGAttributes<SVGSVGElement>, 'width' | 'height'> & {
  size?: number;
  color?: string;
};

export const MenuIcon = ({
  size = 20,
  color = 'currentColor',
  className,
  ...rest
}: MenuIconProps) => (
  <svg
    width={size}
    height={(VIEWBOX_HEIGHT / VIEWBOX_WIDTH) * size}
    viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...rest}
  >
    {BAR_OFFSETS.map((y) => (
      <rect
        key={y}
        y={y}
        width={VIEWBOX_WIDTH}
        height={BAR_HEIGHT}
        rx={BAR_RADIUS}
        fill={color}
      />
    ))}
  </svg>
);

export default MenuIcon;
