
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import Login from './Login'
import Body from './Body'
function App() {
  

  return (
    <>
    <BrowserRouter basename='/'>
     <Routes>
      <Route path="/" element={<Body />}>
         <Route path='/login' element={<Login />} />
       </Route>  
     </Routes>
    </BrowserRouter>
      
      <h1 className="text-3xl font-bold">Hello World</h1>
    </>
  )
}

export default App
