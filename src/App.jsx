import { useState, useEffect } from 'react'
import './App.css'


import Header from './components/header'
import Footer from './components/footer'
import Pokedex from './components/pokedex'




function App() {



  return (
    <>
    <Header/>
    <Pokedex/>
    <div className='boxLong'></div>
    <Footer/>
    </>
  )
}

export default App
