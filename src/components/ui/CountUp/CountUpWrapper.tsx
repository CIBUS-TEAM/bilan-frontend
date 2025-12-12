"use client";
import { useEffect, useState } from "react";
type CountUpProps = {
  start?: number;
  end: number;
  duration?: number;
};
export default function CountUp({
  start = 0,
  end,
  duration = 2,
}: CountUpProps) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    const totalFrames = duration * 60;
    const increment = (end - start) / totalFrames;

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      setValue((prev) => {
        const next = prev + increment;
        return next >= end ? end : next;
      });

      if (frame >= totalFrames) clearInterval(interval);
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [start, end, duration]);

  return (
    <span className="text-[32px] font-bold leading-[42px] text-primary lg:text-[56px] lg:leading-16">
      {`${Math.round(value)}+`}
    </span>
  );
}
