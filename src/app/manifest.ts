import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Monobombo Calculator",
    short_name: "Monobombo",
    description: "Roblox fan hub for Monobombo with codes status, role guides, wiki notes, and source checks.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1108",
    theme_color: "#11160a",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/app-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      }
    ]
  };
}
