export type RichTextSection = {
  heading?: string | null;
  content?: { raw?: any } | null;
} | null;

export const textOf = (node: any): string =>
  node?.text ?? (node?.children ?? []).map(textOf).join("");

export const hasText = (node: any): boolean => !!textOf(node).trim();
