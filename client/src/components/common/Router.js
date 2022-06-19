import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import AboutUs from '../pages/AboutUs'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import Error from '../pages/Error'
import Footer from './Footer'
export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index exact path='/' element={<AboutUs />} />
        <Route exact path='/portfolio' element={<Portfolio/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='*' element={<Error/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )

}


