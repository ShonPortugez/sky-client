import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CssBaseline, InitColorSchemeScript } from "@mui/material";
import AppTheme from "./theme/AppTheme.tsx";
import { BrowserRouter } from "react-router-dom";
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <InitColorSchemeScript />
        <AppTheme>
            <CssBaseline />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AppTheme>
    </StrictMode>,
)