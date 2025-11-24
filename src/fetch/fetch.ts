import qs from "qs";
const READ_ONLY_API_KEY =
  "5fc5a305aeb40c6954f9ff3697d2ba2f598345d0ff66e7cb79308049be736f6d72170331cdc7e849fe8643b3fa218915a906f8666ce26b8a72fc6b711c7b7edae2bb8220927dc868ac59a12c1b781f11161e1b2d4a5616eca12ebdf4174ec4e5b40dbe7ffeceac0fdaafe399b2c56b63470d51310bf03e2de1d5986864b56790";
export async function fetchFromStrapi(path: string, query: object) {
  const queryString = typeof query === "object" ? qs.stringify(query) : query;
  const url = `https://mindful-sunrise-bae89da167.strapiapp.com/api${path}?${queryString}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${READ_ONLY_API_KEY}`,
    },
    // next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Strapi fetch failed");

  return res.json();
}
