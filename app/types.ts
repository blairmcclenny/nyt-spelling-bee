export type Dictionary = Record<string, true>

export type Puzzle = {
  letters: string[]
  centerLetter: string
  validWords: string[]
  pangrams: string[]
}
