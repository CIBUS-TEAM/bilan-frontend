export function RhombusIcon({
  strokeColor,
  size = "16",
}: {
  strokeColor: string;
  size?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="7.80859"
        y="2.41421"
        width="7.62743"
        height="7.62743"
        transform="rotate(45 7.80859 2.41421)"
        stroke={strokeColor}
        strokeWidth="2"
      />
    </svg>
  );
}

export default RhombusIcon;
