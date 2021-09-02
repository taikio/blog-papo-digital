export default async () => {
  const { $content } = require("@nuxt/content");
  const files = await $content({ deep: true }).only(["slug"]).fetch();

  return files.map((file) => (`/blog/${file.slug}`));
};
