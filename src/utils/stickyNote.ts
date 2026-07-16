import type { CSSProperties } from 'react'

/** Stable hash of a string so a note's tilt & colour never change between renders. */
function hash(str: string) {
  let h = 0
  for (let i = 0; i < str.length; i += 1) {
    h = (h * 31 + str.charCodeAt(i)) | 0
  }
  return Math.abs(h)
}

/** hue offsets around the theme --hue for a small sticky-note palette */
const NOTE_SHIFTS = [-42, -18, 6, 30, 58]

/** Deterministic tilt (-4deg..+4deg) and colour derived from the note text. */
export function noteStyle(text: string): CSSProperties {
  const h = hash(text)
  const rot = (h % 9) - 4
  const shift = NOTE_SHIFTS[h % NOTE_SHIFTS.length]
  return {
    '--rot': `${rot}deg`,
    '--note-shift': shift,
  } as CSSProperties
}
