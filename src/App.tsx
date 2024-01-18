import './App.css'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import { Login , Register , Test , Landing , Dashboard , ForgetPass} from './pages'

function App() {
  return (
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/test" element={<Test/>}/>
            <Route path="/forget-password" element={<ForgetPass/>}/>
        </Routes>
     </BrowserRouter>
  )
}

export default App
