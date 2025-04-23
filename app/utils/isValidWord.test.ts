import { describe, test, expect } from "vitest"
import { isValidWord } from "./isValidWord"

const dictionary: Record<string, true> = {
  badge: true,
  bead: true,
}

describe("isValidWord", () => {
  const baseLetters = ["a", "b", "c", "d", "e", "f", "g"]

  test("rejects words shorter than 4 letters", () => {
    const result = isValidWord("cat", baseLetters, "a", dictionary)
    expect(result).toEqual({ isValid: false, message: "Too short" })
  })

  test("rejects words with letters outside of the allowed set", () => {
    const result = isValidWord("queen", baseLetters, "e", dictionary)
    expect(result).toEqual({ isValid: false, message: "Bad letters" })
  })

  test("rejects words that don't include the center letter", () => {
    const result = isValidWord("bead", baseLetters, "f", dictionary)
    expect(result).toEqual({ isValid: false, message: "Missing center letter" })
  })

  test("rejects words not in dictionary", () => {
    const result = isValidWord("abcdef", baseLetters, "a", dictionary)
    expect(result).toEqual({ isValid: false, message: "Not in word list" })
  })

  test("accepts a valid word", () => {
    const result = isValidWord("badge", baseLetters, "a", dictionary)
    expect(result).toEqual({ isValid: true })
  })
})
