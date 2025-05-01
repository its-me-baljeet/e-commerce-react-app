import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Homepage'
import ShopPage from './pages/ShopPage'
import AboutUsPage from './pages/AboutUsPage'
import ContactUsPage from './pages/ContactUsPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
