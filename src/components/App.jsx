import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import '../App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header/>
      <Note/>
      <Footer/>
    </>
  )
}

export default App
