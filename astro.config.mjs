import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  // HTTPS w dev — żyroskop (DeviceOrientationEvent) wymaga bezpiecznego kontekstu.
  vite: {
    plugins: [basicSsl()],
    server: {
      https: {},
    },
  },
})
