import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './destinations/App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './main.css'
import AllFlashcard from './flashcard/AllFlashcard.jsx';
import LearnMode from './flashcard/LearnMode.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
      <Route index={true} path="/" element={<App />} />
          <Route path="flashcard" element={<AllFlashcard />} />
          <Route index={false} path="flashcard/learn" element={<LearnMode />} />
      </Routes></BrowserRouter>

)
