import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import PlumbingDemo from './pages/PlumbingDemo'
import HvacDemo from './pages/HvacDemo'
import BakeryDemo from './pages/BakeryDemo'

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demos/plumbing" element={<PlumbingDemo />} />
        <Route path="/demos/hvac" element={<HvacDemo />} />
        <Route path="/demos/bakery" element={<BakeryDemo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
