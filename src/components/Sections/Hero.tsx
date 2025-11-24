// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Hero({ data }: { data: any }) {
  return <div>{data.__component}</div>;
}

export default Hero;
