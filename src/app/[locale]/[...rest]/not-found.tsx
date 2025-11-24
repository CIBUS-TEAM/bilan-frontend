import { getLocale } from "next-intl/server";

export default async function NotFound() {
  const locale = await getLocale();
  return <div>not-found locale:{locale}</div>;
}
