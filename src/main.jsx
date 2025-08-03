import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Start from './start screen/start.jsx'
import Bot_easy from './bots/Bot_easy.jsx'
import Bot_cheater from './bots/bot_cheater.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/app' element={<App />} />
        <Route path='bot_easy' element={<Bot_easy />} />
        <Route path='bot_cheater' element={<Bot_cheater/>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
