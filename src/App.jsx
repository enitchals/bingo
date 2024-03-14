import './App.css'
import {Route, Routes} from 'react-router-dom'
import BingoCard from './components/BingoCard'
import Build from './components/Build'

function App() {

  return (
    <Routes>
      <Route path="/build" element={<Build/>}/>
      <Route path="/" element={<BingoCard/>}/>
      <Route path="/cat/:category" element={<BingoCard/>} />
      <Route path="/cat/:category/:id" element={<BingoCard/>} />
    </Routes>
  )
}

export default App
