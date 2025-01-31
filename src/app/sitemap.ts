import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jackwaghan.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1.0,
      images: [
        "https://res.cloudinary.com/dqswovyzi/image/upload/v1738251548/Portfolio/wfz9ph5xnzoyfz6svshu.jpg",
      ],
    },
  ];
}
