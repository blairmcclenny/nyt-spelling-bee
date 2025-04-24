import type { Dictionary, Puzzle } from "@/app/types"
import { isWordFromLetters } from "@/app/utils/isValidWord"
import { isPangram } from "@/app/utils/isPangram"

const shuffle = <T>(arr: T[]): T[] => {
  return arr.sort(() => Math.random() - 0.5)
}

export const generatePuzzle = (
  dictionary: Dictionary,
  minWords = 120,
  requirePangram = true
): Puzzle => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  const allWords = Object.keys(dictionary)

  let attempts = 0

  while (attempts < 1000) {
    const letters = shuffle(alphabet).slice(0, 7)
    const centerLetter = letters[Math.floor(Math.random() * 7)]

    const validWords = allWords.filter((word) =>
      isWordFromLetters(word, letters, centerLetter)
    )

    const pangrams = validWords.filter((word) => isPangram(word, letters))

    if (
      validWords.length >= minWords &&
      (!requirePangram || pangrams.length > 0)
    ) {
      return { letters, centerLetter, validWords, pangrams }
    }

    attempts++
  }

  throw new Error("Unable to generate a valid puzzle after 1000 tries.")
}
