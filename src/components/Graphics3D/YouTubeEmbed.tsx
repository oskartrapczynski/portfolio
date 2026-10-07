import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

/**
 * Facade nad YouTube: dopóki nikt nie kliknie play, nie ładujemy iframe'a
 * (to ~1 MB requestów na film, jeszcze zanim ktokolwiek chce oglądać).
 * Klik podmienia poster na embed z autoplay — stan trzyma sekcja, więc gra
 * najwyżej jeden film naraz.
 */

type YouTubeEmbedProps = {
  id: string
  title: string
  kind: string
  duration: string
  poster?: string
  playing: boolean
  onPlay: () => void
}

export const YouTubeEmbed = ({
  id,
  title,
  kind,
  duration,
  poster,
  playing,
  onPlay,
}: YouTubeEmbedProps) => (
  <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-[color:color-mix(in_srgb,var(--accent)_25%,transparent)] bg-black">
    {playing ? (
      <iframe
        className="absolute inset-0 h-full w-full"
        // nocookie: bez ciasteczek trackingowych do momentu kliknięcia play.
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    ) : (
      <motion.button
        type="button"
        onClick={onPlay}
        aria-label={`Play: ${title}`}
        whileTap={{ scale: 0.99 }}
        className="video-poster group absolute inset-0 block w-full text-left"
      >
        {poster ? (
          <img
            src={poster}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-90"
          />
        ) : (
          <span className="grid-bg absolute inset-0 opacity-15" />
        )}

        {/* Nagłówek kadru — na gradiencie zastępuje miniaturę z YouTube. */}
        <span className="absolute inset-x-0 top-0 flex flex-col gap-1 p-5 md:p-7">
          <span className="font-mono text-xs tracking-[0.25em] text-[var(--accent)] uppercase">
            {kind}
          </span>
          <span className="max-w-[85%] font-mono text-lg leading-snug font-bold text-gray-100 md:text-2xl">
            {title}
          </span>
        </span>

        <span className="absolute inset-0 flex items-center justify-center">
          <span className="video-play flex h-16 w-16 items-center justify-center rounded-full md:h-20 md:w-20">
            {/* ml-1 — trójkąt play jest optycznie przesunięty w lewo. */}
            <Play className="ml-1 h-7 w-7 md:h-8 md:w-8" fill="currentColor" />
          </span>
        </span>

        <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 font-mono text-xs text-gray-400 md:p-7">
          <span className="transition-colors duration-300 group-hover:text-[var(--accent)]">
            ▶ Play on YouTube
          </span>
          <span>{duration}</span>
        </span>
      </motion.button>
    )}
  </div>
)
