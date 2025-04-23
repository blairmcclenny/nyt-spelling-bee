import { describe, expect, test } from "vitest"
import { isPangram } from "./isPangram"

describe("isPangram", () => {
  const baseLetters = ["l", "t", "d", "u", "c", "i", "e"]

  test("accepts valid pangram", () => {
    expect(isPangram("ductile", baseLetters)).toBe(true)
  })

  test("rejects invalid pangram", () => {
    expect(isPangram("cuticle", baseLetters)).toBe(false)
  })
})
