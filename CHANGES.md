# Changes Log

## 2026-01-29T16:14:45-05:00 - Gemini 2.5 Pro

### Created `tsconfig.json`
- Created a new TypeScript configuration file for the Vite + React project
- Enabled `allowJs: true` and `checkJs: true` to enable error reporting in type-checked JavaScript files

### Removed unused React imports
- Removed `import React from 'react';` from the following files to fix TS6133 errors:
  - `src/App.tsx`
  - `src/components/BrandStory.tsx`
  - `src/components/Hero.tsx`
  - `src/components/SauceShowcase.tsx`
- The new JSX transform (`"jsx": "react-jsx"` in tsconfig) does not require explicit React imports
