import { describe, expect, test } from "vitest"
import { isPangram } from "./isPangram"

describe("isPangram", () => {
  const baseLetters = ["l", "t", "d", "u", "c", "i", "e"]

  test("accepts a valid pangram using all 7 letters", () => {
    expect(isPangram("ductile", baseLetters)).toBe(true)
  })

  test("rejects a word that is missing letters", () => {
    expect(isPangram("title", baseLetters)).toBe(false)
  })
})
