import type { MouseEvent } from 'react'

/** Mousemove handler for .glow-card elements — sets --gx/--gy local to the card. */
export function cardGlow(e: MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--gx', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--gy', `${e.clientY - rect.top}px`)
}
