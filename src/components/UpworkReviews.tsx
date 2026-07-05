import { useEffect, useState } from 'react'
import Section from './Section'
import { links, upworkReviews } from '../data/profile'

const STAR = 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'

function StarRow({ className }: { className: string }) {
  return (
    <span className={`flex gap-0.5 ${className}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d={STAR} />
        </svg>
      ))}
    </span>
  )
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="relative inline-flex" role="img" aria-label={`Rated ${rating} out of 5`}>
        <StarRow className="text-line" />
        <span className="absolute inset-0 overflow-hidden" style={{ width: `${(rating / 5) * 100}%` }}>
          <StarRow className="text-amber-400" />
        </span>
      </span>
      <span className="font-mono text-sm font-bold text-fg">{rating.toFixed(1)}</span>
    </span>
  )
}

export default function UpworkReviews() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = upworkReviews.length

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), 7000)
    return () => clearInterval(timer)
  }, [count, paused])

  return (
    <Section id="reviews" eyebrow="upwork reviews" title="What clients say" fx="bubbles">
      <div
        className="reveal"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="overflow-hidden" aria-roledescription="carousel" aria-label="Upwork client reviews">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {upworkReviews.map((review, i) => (
              <article
                key={review.project}
                aria-hidden={i !== index}
                className="w-full shrink-0 px-0.5"
              >
                <div className="glow-card h-full rounded-2xl border border-line bg-panel p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <Stars rating={review.rating} />
                    <p className="font-mono text-xs font-medium text-vio">{review.period}</p>
                  </div>
                  <h3 className="mt-3 text-lg font-bold">{review.project}</h3>
                  {review.endorsements.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {review.endorsements.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-line bg-panel-2 px-2.5 py-0.5 text-[11px] font-medium text-mut"
                        >
                          ✓ {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-4 space-y-4">
                    {review.quotes.map((quote) => (
                      <blockquote key={quote.slice(0, 24)} className="text-sm leading-relaxed text-mut">
                        <span className="text-grad mr-1 text-xl font-extrabold leading-none" aria-hidden="true">
                          "
                        </span>
                        {quote}
                        <span className="text-grad ml-1 text-xl font-extrabold leading-none" aria-hidden="true">
                          "
                        </span>
                      </blockquote>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {upworkReviews.map((review, i) => (
              <button
                key={review.project}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'line-grad w-6' : 'w-2 bg-line hover:bg-faint'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={links.upwork}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-mut transition-colors hover:text-vio"
            >
              View Upwork profile ↗
            </a>
            <button
              type="button"
              onClick={() => setIndex((index - 1 + count) % count)}
              aria-label="Previous review"
              className="rounded-full border border-line bg-panel p-2 text-mut transition-colors hover:border-vio/50 hover:text-vio"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setIndex((index + 1) % count)}
              aria-label="Next review"
              className="rounded-full border border-line bg-panel p-2 text-mut transition-colors hover:border-vio/50 hover:text-vio"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
