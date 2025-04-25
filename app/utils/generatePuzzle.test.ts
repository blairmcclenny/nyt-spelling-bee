import { describe, expect, test } from "vitest"
import { generatePuzzle } from "./generatePuzzle"
import dictionary from "@/app/data/filteredWords.json"
import { Dictionary } from "../types"

describe("generatePuzzle", () => {
  test("returns a valid puzzle with expected structure", () => {
    const puzzle = generatePuzzle(dictionary as Dictionary, 3)

    expect(puzzle.letters).toHaveLength(7)
    expect(puzzle.letters).toContain(puzzle.centerLetter)

    expect(puzzle.validWords.length).toBeGreaterThanOrEqual(3)
    expect(puzzle.pangrams.length).toBeGreaterThanOrEqual(1)

    for (const word of puzzle.validWords) {
      expect(word.length).toBeGreaterThanOrEqual(4)
    }
  })

  test("throws an error if no valid puzzle is found", () => {
    const smallDict: Dictionary = {
      abc: true,
    }

    expect(() => generatePuzzle(smallDict, 10, true)).toThrow(
      "Unable to generate a valid puzzle"
    )
  })
})
