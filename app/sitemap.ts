import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

// TODO: replace with the production domain when available.
const BASE_URL = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL },
    ...projects.map((project) => ({
      url: `${BASE_URL}/work/${project.slug}`,
    })),
  ];
}
