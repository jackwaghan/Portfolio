import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jackwaghan.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
      images: [
        "https://res.cloudinary.com/dqswovyzi/image/upload/v1738251548/Portfolio/wfz9ph5xnzoyfz6svshu.jpg",
      ],
    },
  ];
}
