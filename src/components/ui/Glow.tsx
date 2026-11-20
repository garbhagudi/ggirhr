import React from 'react';
export type GlowProps = React.HTMLAttributes<HTMLDivElement>;

export const Glow = ({ className = '', ...rest }: GlowProps) => (
  <div
    className={`absolute rounded-full pointer-events-none ${className}`}
    aria-hidden="true"
    {...rest}
  />
);

export default Glow;
