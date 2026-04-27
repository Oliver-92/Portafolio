import "@fontsource/coda/400.css";
import "@fontsource/coda/800.css";
import "@fontsource/fira-code/300.css";
import "@fontsource/fira-code/700.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { LanguageProvider } from './context/LanguageProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
