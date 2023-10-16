import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from "./components/AppRouter.jsx";
import { PortraitModeOnly } from "./components/PortraitModeOnly.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PortraitModeOnly>
            <AppRouter />
        </PortraitModeOnly>
    </React.StrictMode>,
)
