import LetterGrid from "./components/LetterGrid"

export default function Home() {
  const letters = ["l", "t", "d", "u", "c", "i", "e"]

  return (
    <div className="mx-auto max-w-64">
      <LetterGrid letters={letters} />
    </div>
  )
}
