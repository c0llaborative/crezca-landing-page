import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://crezca.co",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
