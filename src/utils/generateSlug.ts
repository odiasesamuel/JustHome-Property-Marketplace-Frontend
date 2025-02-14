import slugify from "slugify";

export const generateSlug = (title: string, id: string) => {
  const slug = slugify(title, { lower: true, strict: true });
  return `${slug}-${id}`;
};
