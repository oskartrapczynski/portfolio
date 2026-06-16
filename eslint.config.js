import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import astro from 'eslint-plugin-astro'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-config-prettier'

export default tseslint.config(
  { ignores: ['dist/', '.astro/', 'node_modules/'] },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,

  // Komponenty i funkcje: named exports, nie default exports.
  // Astro (.astro) i pliki konfiguracyjne wymagają default exportu — stąd zakres tylko TS/TSX.
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { 'react-hooks': reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ExportDefaultDeclaration',
          message: 'Używaj named exportów zamiast default exportów.',
        },
      ],
    },
  },

  // Astro generuje env.d.ts z triple-slash referencją — to wymagany wzorzec.
  {
    files: ['**/*.d.ts'],
    rules: { '@typescript-eslint/triple-slash-reference': 'off' },
  },

  // Wyłącza reguły ESLinta kolidujące z Prettierem (musi być na końcu).
  prettier
)
