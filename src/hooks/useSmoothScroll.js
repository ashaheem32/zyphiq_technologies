import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// Clears the fixed navbar (h-18) with a little breathing room.
const ANCHOR_OFFSET = -88

// Site-wide inertial smooth scrolling. Wheel input is eased over ~1.6s for a
// slow-mo glide; touch devices keep native scrolling (Lenis default).
export default function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    // Glide to in-page anchors ourselves — Lenis otherwise fights the native
    // jump and the page never moves.
    const onClick = (event) => {
      const link = event.target.closest('a[href^="#"]')
      if (!link) return
      const hash = link.getAttribute('href')
      const target = hash.length > 1 && document.querySelector(hash)
      if (!target) return
      event.preventDefault()
      history.pushState(null, '', hash)
      lenis.scrollTo(target, { offset: ANCHOR_OFFSET })
    }
    document.addEventListener('click', onClick)

    let rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    })

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('click', onClick)
      lenis.destroy()
    }
  }, [])
}
