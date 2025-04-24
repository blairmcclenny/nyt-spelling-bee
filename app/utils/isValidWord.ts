import { Dictionary } from "@/app/types"

export const isWordFromLetters = (
  word: string,
  letters: string[],
  centerLetter: string
): { isValid: boolean; message?: string } => {
  if (word.length < 4) {
    return { isValid: false, message: "Too short" }
  }

  if (!word.includes(centerLetter)) {
    return { isValid: false, message: "Missing center letter" }
  }

  if (![...word].every((letter) => letters.includes(letter))) {
    return { isValid: false, message: "Bad letters" }
  }

  return { isValid: true }
}

export const isWordInDictionary = (
  word: string,
  dictionary: Dictionary
): { isValid: boolean; message?: string } => {
  if (!dictionary[word]) {
    return { isValid: false, message: "Not in word list" }
  }

  return { isValid: true }
}

export const isValidWord = (
  word: string,
  letters: string[],
  centerLetter: string,
  dictionary: Dictionary
): { isValid: boolean; message?: string } => {
  const wordFromLetters = isWordFromLetters(word, letters, centerLetter)

  if (!wordFromLetters.isValid) {
    return wordFromLetters
  }

  const wordInDictionary = isWordInDictionary(word, dictionary)

  if (!wordInDictionary.isValid) {
    return wordInDictionary
  }

  return { isValid: true }
}
