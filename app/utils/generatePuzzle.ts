import type { Dictionary, Puzzle } from "@/app/types"
import { isWordFromLetters } from "@/app/utils/isValidWord"
import { isPangram } from "@/app/utils/isPangram"

export const fisherYatesShuffle = <T>(
  arr: T[],
  randomFn: () => number = Math.random
): T[] => {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(randomFn() * (i + 1))

    const temp = copy[i]
    copy[i] = copy[j]
    copy[j] = temp
  }
  return copy
}

export const generatePuzzle = (
  dictionary: Dictionary,
  minWords = 120,
  requirePangram = true,
  randomFn: () => number = Math.random
): Puzzle => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  const allWords = Object.keys(dictionary)

  let attempts = 0

  while (attempts < 1000) {
    const letters = fisherYatesShuffle(alphabet, randomFn).slice(0, 7)
    const centerLetter = letters[Math.floor(randomFn() * 7)]

    const validWords = allWords.filter(
      (word) => isWordFromLetters(word, letters, centerLetter).isValid
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
