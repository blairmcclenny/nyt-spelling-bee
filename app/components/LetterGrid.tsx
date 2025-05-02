"use client"

type Position =
  | "center"
  | "topLeft"
  | "top"
  | "topRight"
  | "bottomRight"
  | "bottom"
  | "bottomLeft"

function Cell({
  letter,
  position,
  onClick,
}: {
  letter: string
  position: Position
  onClick: () => void
}) {
  const positions = {
    center: "",
    topLeft: "-translate-x-3/4 -translate-y-1/2",
    top: "-translate-y-full",
    topRight: "translate-x-3/4 -translate-y-1/2",
    bottomRight: "translate-x-3/4 translate-y-1/2",
    bottom: "translate-y-full",
    bottomLeft: "-translate-x-3/4 translate-y-1/2",
  }

  return (
    <svg
      viewBox="0 0 120 103.92304845413263"
      className={`absolute top-1/3 left-[30%] w-[40%] h-1/3 fill-yellow-300 ${positions[position]}`}
    >
      <polygon
        points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
        className="stroke-white stroke-[7.5] cursor-pointer"
        onClick={onClick}
        role="button"
        aria-label={`${letter} button`}
      />
      <text
        x="50%"
        y="50%"
        dy="0.35em"
        className="fill-black text-3xl font-bold [text-anchor:middle] uppercase pointer-events-none"
      >
        {letter}
      </text>
    </svg>
  )
}

export default function LetterGrid({ letters }: { letters: string[] }) {
  const positions: Position[] = [
    "center",
    "topLeft",
    "top",
    "topRight",
    "bottomRight",
    "bottom",
    "bottomLeft",
  ]

  return (
    <div className="w-full pb-[103.92304845413263%] relative">
      {letters.map((letter, i) => (
        <Cell
          key={letter}
          letter={letter}
          position={positions?.[i]}
          onClick={() => console.log(`${letter} clicked`)}
        />
      ))}
    </div>
  )
}
