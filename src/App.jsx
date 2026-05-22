
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home.jsx"
import RecipeDetails from "./pages/RecipeDetails.jsx"
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recipe-detail/:id' element={<RecipeDetails/>}  />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
