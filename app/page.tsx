import type { Dictionary } from "@/app/types"
import LetterGrid from "@/app/components/LetterGrid"
import dictionary from "@/app/data/filteredWords.json"
import { getTodayPuzzle } from "@/app/utils/puzzleService"

export default function Home() {
  const puzzle = getTodayPuzzle(dictionary as Dictionary)

  return (
    <div className="mx-auto max-w-64">
      <LetterGrid letters={puzzle.letters} />
    </div>
  )
}
