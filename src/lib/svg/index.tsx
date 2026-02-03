const YouTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="YouTube"
  >
    <path
      d="M23.498 6.186a2.997 2.997 0 0 0-2.111-2.12C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.387.566A2.997 2.997 0 0 0 .5 6.186 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.814 2.997 2.997 0 0 0 2.113 2.12C4.6 20.5 12 20.5 12 20.5s7.4 0 9.387-.566a2.997 2.997 0 0 0 2.111-2.12A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.502-5.814z"
      fill="#FF0000"
    />
    <path d="M9.75 8.5v7l6-3.5-6-3.5z" fill="#ffffff" />
  </svg>
);

export { YouTubeIcon };
