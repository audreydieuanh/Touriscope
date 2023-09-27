import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Flashcard from './Flashcard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route index={true} element={<App />} path="/" />
        <Route element={<Flashcard />} path="flashcard" />
      </Routes></BrowserRouter>
  </>

)
