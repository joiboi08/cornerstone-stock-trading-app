import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Compose class values and resolve Tailwind CSS class conflicts.
 *
 * @param inputs - One or more class value inputs (strings, arrays, or objects) to be combined
 * @returns The final class string with Tailwind classes merged and conflicts resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
