import React from 'react';
import IconBase, {
  DEFAULT_ICON_COLOR,
  IconProps,
} from 'components/ui/icons/IconBase';

/**
 * CallSupportIcon
 *
 * Solid telephone handset (Figma "Call Support"). Used in the Call Support
 * card badge in `sections/contact/SupportCards.tsx`.
 *
 * Usage:
 *   <CallSupportIcon size={30} />
 */
export const CallSupportIcon = ({
  color = DEFAULT_ICON_COLOR,
  ...rest
}: IconProps) => (
  <IconBase viewBoxWidth={30} viewBoxHeight={30} {...rest}>
    <path
      d='M29.1275 21.9985L24.9445 17.8154C23.4505 16.3215 20.9108 16.9191 20.3132 18.8612C19.865 20.2058 18.3711 20.9528 17.0265 20.654C14.0386 19.907 10.0049 16.0227 9.25791 12.8854C8.80973 11.5408 9.7061 10.0468 11.0507 9.59867C12.9928 9.00109 13.5904 6.46136 12.0964 4.96741L7.91335 0.784328C6.71819 -0.261442 4.92544 -0.261442 3.87967 0.784328L1.04115 3.62285C-1.79737 6.61076 1.33994 14.5287 8.36154 21.5503C15.3831 28.5719 23.3011 31.8587 26.2089 28.8707L29.1275 26.0322C30.1734 24.837 30.1734 23.0443 29.1275 21.9985Z'
      fill={color}
    />
  </IconBase>
);

export default CallSupportIcon;
