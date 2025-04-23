export const isPangram = (word: string, letters: string[]): boolean => {
  return letters.every((letter) => word.includes(letter))
}
