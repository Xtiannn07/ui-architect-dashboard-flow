
/**
 * Get initials from a name
 * @param name The full name
 * @returns The initials (first letter of each word in the name)
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(part => part.charAt(0).toUpperCase())
    .join('')
    .substring(0, 2);
}
