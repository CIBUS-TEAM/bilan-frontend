import qs from "qs";

export async function fetchFromStrapi(path: string, query: object) {
  const queryString = typeof query === "object" ? qs.stringify(query) : query;
  const url = `${process.env.STRAPI_URL}api${path}?${queryString}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_READ_ONLY_API_KEY}`,
    },
    // next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Strapi fetch failed");

  return res.json();
}
