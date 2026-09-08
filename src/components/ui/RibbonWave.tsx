import React from 'react';

export type RibbonWaveProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'color' | 'width' | 'height'
> & {
  color?: string;
  width?: number;
  height?: number;
};

export const DEFAULT_RIBBON_COLOR = '#4AB4E8';

const MASK = {
  WebkitMaskImage: 'url(/ribbon-wave-icon.svg)',
  maskImage: 'url(/ribbon-wave-icon.svg)',
  WebkitMaskSize: '100% 100%',
  maskSize: '100% 100%',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
} as const;

export const RibbonWave = ({
  color = DEFAULT_RIBBON_COLOR,
  width = 253,
  height = 135,
  className = '',
  style,
  ...rest
}: RibbonWaveProps) => (
  <div
    aria-hidden='true'
    className={className}
    style={{
      aspectRatio: `${width} / ${height}`,
      backgroundColor: color,
      ...MASK,
      ...style,
    }}
    {...rest}
  />
);

export default RibbonWave;
