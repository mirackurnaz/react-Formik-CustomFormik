
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Singup from "./components/Singup"
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/singup' element={<Singup/>}/>
      
    </Routes>
    </>
  )
}

export default App
