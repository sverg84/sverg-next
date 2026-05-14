import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stephen Vergara",
    short_name: "sverg",
    description: "Stephen's portfolio, powered by Next.js",
    display: "standalone",
    start_url: "/",
    icons: [
      {
        purpose: "any",
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        purpose: "maskable",
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    screenshots: [
      // mobile vs. desktop despite the type definition not including it.
      { form_factor: "wide", sizes: "2880x1626", src: "/desktop.png" },
      { form_factor: "narrow", sizes: "666x1452", src: "/mobile.png" },
    ],
    background_color: "#cfd8e8",
    theme_color: "#cfd8e8",
  };
}
