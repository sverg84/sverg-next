import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stephen Vergara",
    short_name: "sverg",
    description: "Stephen's porfolio, powered by Next.js",
    display: "standalone",
    start_url: "/",
    icons: [
      {
        purpose: "maskable",
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        purpose: "any",
        src: "/react.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    screenshots: [
      // mobile vs. desktop despite the type definition not including it.
      { form_factor: "wide", sizes: "2880x1626", src: "/desktop.png" },
      { form_factor: "narrow", sizes: "666x1452", src: "/mobile.png" },
    ],
    background_color: "black",
    theme_color: "black",
  };
}
