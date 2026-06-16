import { useEffect } from 'react'
import type { MotionValue } from 'framer-motion'

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max)

type DeviceTiltOptions = {
  // Te same MotionValue, które na desktopie steruje kursor.
  tiltX: MotionValue<number>
  tiltY: MotionValue<number>
  engaged: MotionValue<number>
  // Opcjonalnie pozycja "kursora" 0..1 dla spotlightu/parallaxu tła.
  mx?: MotionValue<number>
  my?: MotionValue<number>
  // Wychylenie telefonu (w stopniach) mapowane na skrajny tilt.
  range?: number
}

// iOS 13+ udostępnia DeviceOrientationEvent.requestPermission().
type PermissionCtor = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<'granted' | 'denied'>
}

// Na urządzeniach dotykowych steruje tiltem/spotlightem żyroskopem zamiast kursora.
// Na desktopie (pointer: fine) nie robi nic — zostaje obsługa myszki.
export const useDeviceTilt = ({
  tiltX,
  tiltY,
  engaged,
  mx,
  my,
  range = 30,
}: DeviceTiltOptions) => {
  useEffect(() => {
    if (typeof window === 'undefined') return
    // Tylko gdy nie ma precyzyjnego kursora (telefon/tablet).
    if (!window.matchMedia('(pointer: coarse)').matches) return

    const Orientation = window.DeviceOrientationEvent as
      | PermissionCtor
      | undefined
    if (!Orientation) return

    // Pierwszy odczyt beta przyjmujemy za neutralny kąt trzymania telefonu.
    let baseBeta: number | null = null

    const handle = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return
      if (baseBeta == null) baseBeta = e.beta

      // gamma: przechył lewo-prawo → oś X; beta: przód-tył → oś Y.
      const nx = clamp(e.gamma / range, -1, 1)
      const ny = clamp((e.beta - baseBeta) / range, -1, 1)

      tiltX.set(nx)
      tiltY.set(ny)
      engaged.set(1)
      mx?.set(nx * 0.5 + 0.5)
      my?.set(ny * 0.5 + 0.5)
    }

    let listening = false
    const start = () => {
      if (listening) return
      listening = true
      window.addEventListener('deviceorientation', handle)
    }

    // iOS wymaga zgody przyznanej w geście użytkownika (dotyk).
    const requestPermission = () => {
      window.removeEventListener('touchend', requestPermission)
      Orientation.requestPermission?.()
        .then((state) => {
          if (state === 'granted') start()
        })
        .catch(() => {})
    }

    if (typeof Orientation.requestPermission === 'function') {
      window.addEventListener('touchend', requestPermission, { once: true })
    } else {
      start()
    }

    return () => {
      window.removeEventListener('deviceorientation', handle)
      window.removeEventListener('touchend', requestPermission)
    }
  }, [tiltX, tiltY, engaged, mx, my, range])
}
