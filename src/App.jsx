import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import NewsList from './components/NewsList'
import { ReadMore } from './pages/ReadMore'

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/news' element={ <NewsList/> }/>
      <Route path='/read-more' element={ <ReadMore/> }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
