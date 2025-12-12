"use client";
import CountUp from "react-countup";

export default function CountUpWrapper({ number }: { number: number }) {
  return <CountUp start={0} end={number} duration={2} suffix="+" />;
}
