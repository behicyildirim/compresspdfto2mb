export default function sitemap() {
  const baseUrl = "https://compresspdfto2mb.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}