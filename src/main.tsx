import App from '@/App.tsx'
import '@/assets/styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { RedirectProvider } from './contexts/RedirectContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RedirectProvider>
            <HashRouter>
                <App />
            </HashRouter>
        </RedirectProvider>
    </React.StrictMode>,
)

