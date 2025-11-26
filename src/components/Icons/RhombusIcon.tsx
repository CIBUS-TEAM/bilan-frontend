export function RhombusIcon({
  className,
  size = "16",
}: {
  className?: string;
  size?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="7.80859"
        y="2.41421"
        width="7.62743"
        height="7.62743"
        transform="rotate(45 7.80859 2.41421)"
        strokeWidth="2"
      />
    </svg>
  );
}

export default RhombusIcon;
