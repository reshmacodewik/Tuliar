// utils/htmlToPlain.ts
export const htmlToPlainText = (html: string) => {
  if (!html) return "";

  // Convert breaks/paragraphs into newlines first
  let s = html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<\/div>/gi, "\n");

  // Strip all remaining tags
  s = s.replace(/<[^>]+>/g, "");

  // Decode a few common HTML entities
  s = s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");

  // Collapse extra newlines/whitespace
  return s.replace(/\n{3,}/g, "\n\n").trim();
};
