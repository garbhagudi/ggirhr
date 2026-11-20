import React from 'react';
import Image from 'next/image';

/**
 * HexagonPhoto
 *
 * Decorative rounded-hexagon photo badge from the Figma About Us frame
 * (Group 2085663218, 120×116 desktop / 71×68 mobile): a grey hairline hexagon
 * outline with the photo, clipped to the same hexagon, offset down-right
 * inside it. Used in
 * `sections/About/AboutUs.tsx`.
 *
 * Usage:
 *   <HexagonPhoto src='/images/about/about-hex-left.png' alt='…' className='absolute …' />
 */

const SIZE = 112;
const CORNER_RADIUS = 10;

// Pointy-top hexagon stretched to a SIZE×SIZE box (as Figma draws it), with
// each corner replaced by a quadratic curve through the vertex.
const buildRoundedHexPath = () => {
  const s = SIZE;
  const vertices: Array<[number, number]> = [
    [s / 2, 0],
    [s, s / 4],
    [s, (3 * s) / 4],
    [s / 2, s],
    [0, (3 * s) / 4],
    [0, s / 4],
  ];
  const towards = (
    [x1, y1]: [number, number],
    [x2, y2]: [number, number]
  ): [number, number] => {
    const len = Math.hypot(x2 - x1, y2 - y1);
    const t = CORNER_RADIUS / len;
    return [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t];
  };
  const fmt = ([x, y]: [number, number]) => `${x.toFixed(2)} ${y.toFixed(2)}`;

  return (
    vertices
      .map((v, i) => {
        const prev = vertices[(i + vertices.length - 1) % vertices.length];
        const next = vertices[(i + 1) % vertices.length];
        const start = towards(v, prev);
        const end = towards(v, next);
        return `${i === 0 ? 'M' : 'L'} ${fmt(start)} Q ${fmt(v)} ${fmt(end)}`;
      })
      .join(' ') + ' Z'
  );
};

const HEX_PATH = buildRoundedHexPath();

export type HexagonPhotoProps = {
  src: string;
  alt: string;
  className?: string;
};

export const HexagonPhoto = ({ src, alt, className = '' }: HexagonPhotoProps) => (
  // Drawn once at the desktop size (120×116) and scaled to the 71×68 mobile
  // spec, so both breakpoints share the same path.
  <div className={`h-[68px] w-[71px] sm:h-[116px] sm:w-[120px] ${className}`}>
    <div className='relative h-[116px] w-[120px] origin-top-left scale-[0.5917] sm:scale-100'>
      <svg
        aria-hidden='true'
        width={SIZE}
        height={SIZE}
        viewBox={`-1 -1 ${SIZE + 2} ${SIZE + 2}`}
        fill='none'
        className='absolute left-0 top-0'
      >
        <path d={HEX_PATH} stroke='#BFBCBC' strokeWidth={1.17} />
      </svg>
      <div
        className='absolute left-[7.57px] top-[3.24px] h-[112px] w-[112px]'
        style={{ clipPath: `path('${HEX_PATH}')` }}
      >
        <Image src={src} alt={alt} fill sizes='112px' className='object-cover' />
      </div>
    </div>
  </div>
);

export default HexagonPhoto;
