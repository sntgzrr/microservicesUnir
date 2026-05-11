import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Carousel({ items, autoPlay = true, autoPlayInterval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, items.length])

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full h-96 md:h-96 bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
      <div className="relative w-full h-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="w-full h-full flex items-center justify-center text-6xl"
              style={{
                background: `linear-gradient(135deg, ${item.color1} 0%, ${item.color2} 100%)`
              }}
            >
              <div className="text-center">
                <p className="text-6xl mb-4">{item.emoji}</p>
                <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-lg text-white/80">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all backdrop-blur-sm"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all backdrop-blur-sm"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentIndex
                ? "bg-white w-8 h-3 rounded-full"
                : "bg-white/50 w-3 h-3 rounded-full hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
