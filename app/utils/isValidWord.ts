export const isValidWord = (
  word: string,
  letters: string[],
  centerLetter: string,
  dictionary: Record<string, true>
): { isValid: boolean; message?: string } => {
  if (word.length < 4) {
    return { isValid: false, message: "Too short" }
  }

  if ([...word].every((letter) => letters.includes(letter))) {
    return { isValid: false, message: "Bad letters" }
  }

  if (!word.includes(centerLetter)) {
    return { isValid: false, message: "Missing center letter" }
  }

  if (!dictionary[word]) {
    return { isValid: false, message: "Not in word list" }
  }

  return { isValid: true }
}
