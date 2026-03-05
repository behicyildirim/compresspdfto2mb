export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/*favicon*",
        "/*.ico$",
      ],
    },
    sitemap: "https://compresspdfto2mb.com/sitemap.xml",
  };
}