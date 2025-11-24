"use client";

import Error from "next/error";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GlobalNotFound() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    router.replace(`/uk/${pathname}`);
  }, [pathname, router]);

  return (
    <html lang="uk">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
