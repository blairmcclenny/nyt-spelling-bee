import type { Dictionary, Puzzle } from "@/app/types"
import { generatePuzzle } from "@/app/utils/generatePuzzle"
import { createSeededRandom } from "@/app/utils/createSeededRandom"

const getDailySeed = (): number => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  return year * 10_000 + month * 100 + day
}

const getStorageKey = (seed: number): string => {
  return `puzzle-${seed}`
}

const savePuzzleToStorage = (key: string, puzzle: Puzzle) => {
  if (typeof window === "undefined") return

  localStorage.setItem(key, JSON.stringify(puzzle))
}

const loadPuzzleFromStorage = (key: string): Puzzle | null => {
  if (typeof window === "undefined") return null

  const stored = localStorage.getItem(key)
  if (!stored) return null

  try {
    return JSON.parse(stored) as Puzzle
  } catch {
    return null
  }
}

export const getTodayPuzzle = (
  dictionary: Dictionary,
  minWords = 10,
  requirePangram = true
): Puzzle => {
  const seed = getDailySeed()
  const storageKey = getStorageKey(seed)
  const randomFn = createSeededRandom(seed)

  const existingPuzzle = loadPuzzleFromStorage(storageKey)
  if (existingPuzzle) {
    return existingPuzzle
  }

  const newPuzzle = generatePuzzle(
    dictionary,
    minWords,
    requirePangram,
    randomFn
  )
  savePuzzleToStorage(storageKey, newPuzzle)

  return newPuzzle
}
