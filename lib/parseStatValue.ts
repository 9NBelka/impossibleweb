export function parseStatValue(value: string): { number: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { number: 0, suffix: value };
  return {
    number: parseInt(match[1], 10),
    suffix: match[2], // '+', '%', и т.д.
  };
}
