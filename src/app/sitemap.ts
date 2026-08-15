import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://novaserve.dev";
  const routes = [
    "",
    "/docs",
    "/contact",
    "/signin",
    "/pricing",
    "/architecture",
    "/providers",
    "/blog",
    "/comparison",
    "/about",
    "/changelog",
    "/community",
    "/roadmap",
    "/security",
    "/careers",
    "/examples",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1.0 : route === "/docs" ? 0.9 : 0.8,
  }));
}
