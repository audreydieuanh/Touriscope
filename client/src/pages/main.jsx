import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AllDestinations from './destinations/AllDestinations.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './main.css'
import AllFlashcard from './flashcard/AllFlashcard.jsx';
import AddQuestion from './flashcard/AddQuestion.jsx'
import LearnMode from './flashcard/LearnMode.jsx';
import LogIn from './user/LogIn.jsx';
import SignUp from './user/SignUp.jsx';
import AddReview from './destinations/AddReview.jsx'
import DestinationDetails from './destinations/DestinationDetails.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route index={true} path="/" element={<App />} />
            <Route path="destinations" element={<AllDestinations />} />
            <Route path="destinations/:id" element={<DestinationDetails />} />
            <Route path="flashcard" element={<AllFlashcard />} />
            <Route path="log-in" element={<LogIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="destinations/add-review/:id" element={<AddReview />} />
            <Route index={false} path="flashcard/learn" element={<LearnMode />} />
            <Route index={false} path="flashcard/add" element={<AddQuestion />} />
        </Routes></BrowserRouter>

)
