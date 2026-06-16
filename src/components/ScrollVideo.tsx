import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion'

const FRAME_COUNT = 168
const SCROLL_HEIGHT = '300vh'
const SCRUB_END = 0.58

const framePath = (i: number) =>
  `/frames/promo/frame_${String(i).padStart(4, '0')}.webp`

export const ScrollVideo = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const [loaded, setLoaded] = useState(0)
  const ready = loaded >= FRAME_COUNT

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const frameIndex = useTransform(
    scrollYProgress,
    [0, SCRUB_END],
    [1, FRAME_COUNT]
  )
  const hintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])

  const fadeRef = useRef({ start: Infinity, span: 1 })
  useEffect(() => {
    const measure = () => {
      const el = sectionRef.current
      if (!el) return
      const vh = window.innerHeight
      const bottomDoc =
        el.getBoundingClientRect().top + window.scrollY + el.offsetHeight
      const pEnd = bottomDoc - vh // scrollY przy progress = 1
      fadeRef.current = { start: pEnd + vh * 0.55, span: vh * 0.5 }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    let cancelled = false
    const imgs: HTMLImageElement[] = []
    let count = 0
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image()
      img.src = framePath(i)
      img.onload = img.onerror = () => {
        if (cancelled) return
        count += 1
        setLoaded(count)
      }
      imgs[i - 1] = img
    }
    imagesRef.current = imgs
    return () => {
      cancelled = true
    }
  }, [])

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current
    const img =
      imagesRef.current[
        Math.min(FRAME_COUNT, Math.max(1, Math.round(index))) - 1
      ]
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const cw = canvas.clientWidth
    const ch = canvas.clientHeight
    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr
      canvas.height = ch * dpr
    }

    const iw = img.naturalWidth
    const ih = img.naturalHeight
    // Cover when the viewport is at least as wide (relative to height) as the
    // source frame; otherwise contain (letterbox) so narrow/portrait screens
    // see the whole frame instead of a heavily cropped, over-wide center crop.
    const cover = cw / ch >= iw / ih
    const fit = cover ? Math.max : Math.min
    const scale = fit((cw * dpr) / iw, (ch * dpr) / ih)
    const dw = iw * scale
    const dh = ih * scale
    const dx = (cw * dpr - dw) / 2
    const dy = (ch * dpr - dh) / 2

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, dx, dy, dw, dh)
  }

  useMotionValueEvent(frameIndex, 'change', (v) => drawFrame(v))

  useEffect(() => {
    drawFrame(frameIndex.get())
    const onResize = () => drawFrame(frameIndex.get())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded])

  return (
    <section
      ref={sectionRef}
      className="relative z-0"
      style={{ height: SCROLL_HEIGHT }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        {!ready && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black">
            <p className="mb-4 font-mono text-sm tracking-widest text-neon-cyan">
              LOADING {Math.round((loaded / FRAME_COUNT) * 100)}%
            </p>
            <div className="h-[2px] w-48 overflow-hidden bg-white/10">
              <div
                className="h-full bg-neon-cyan transition-all duration-150"
                style={{ width: `${(loaded / FRAME_COUNT) * 100}%` }}
              />
            </div>
          </div>
        )}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 font-mono text-xs tracking-[0.3em] text-white/60"
        >
          SCROLL ↓
        </motion.div>
      </div>
    </section>
  )
}
