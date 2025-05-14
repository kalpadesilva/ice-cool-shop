import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Order } from './components/Order'

function App() {

  return (
    <div className="bg-[url('/images/background.png')] w-[1280px] h-[1332px] mx-auto flex flex-col justify-between">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
