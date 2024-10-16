import { useState, useEffect } from 'react'
import './App.css'
import AuthDetails from './user/AuthDetails.jsx'
import Header from '../components/Header.jsx'

const App = () => {
  return (
    <>
      <Header />
      <AuthDetails />
    </>
  )
}


export default App
