import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {CssBaseline, InitColorSchemeScript} from "@mui/material";
import AppTheme from "./theme/AppTheme.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <InitColorSchemeScript />
      <AppTheme>
          <CssBaseline />
          <App />
      </AppTheme>
  </StrictMode>,
)
