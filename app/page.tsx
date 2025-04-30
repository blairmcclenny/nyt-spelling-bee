"use client"

export default function Home() {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 120 103.92304845413263"
        className="max-w-64 absolute inset-0 fill-yellow-300"
      >
        <polygon
          points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
          onClick={() => console.log("clicked")}
        />
        <text
          x="50%"
          y="50%"
          dy="0.35em"
          className="fill-black [font-size:1.875em] font-bold [text-anchor:middle] uppercase pointer-events-none"
        >
          a
        </text>
      </svg>
    </div>
  )
}
