import './App.css'
import {Route, Routes} from 'react-router-dom'
import BingoCard from './components/BingoCard'

function App() {

  return (
    <Routes>
      <Route path="/:category" element={<BingoCard/>} />
      <Route path="/:category/:id" element={<BingoCard/>} />
    </Routes>
  )
}

export default App
