/**
 * Safely resolve a localized string with fallback to English.
 * If the requested language value is empty/undefined, English is returned.
 */
export function localized(
  obj: { en: string; am?: string } | undefined | null,
  lang: 'en' | 'am',
): string {
  if (!obj) return '';
  if (lang === 'am' && obj.am) return obj.am;
  return obj.en ?? '';
}
