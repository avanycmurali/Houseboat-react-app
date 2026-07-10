import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddBoat from './components/AddBoat'
import SearchBoat from './components/SearchBoat'
import DeleteBoat from './components/DeleteBoat'
import ViewBoat from './components/ViewBoat'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AddBoat/>}/>
      <Route path='/search'element={<SearchBoat/>}/>
      <Route path='/delete'element={<DeleteBoat/>}/>
      <Route path='/view'element={<ViewBoat/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
