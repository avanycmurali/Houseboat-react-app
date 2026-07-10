import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddBoat from './components/AddBoat'
import SearchBoat from './components/SearchBoat'
import DeleteBoat from './components/DeleteBoat'
import ViewBoat from './components/ViewBoat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddBoat/>
    <SearchBoat/>
    <DeleteBoat/>
    <ViewBoat/>
      
    </>
  )
}

export default App
