import  Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Products from './components/Products'
import CompanyBio from './components/CompanyBio'
import Team from './components/Team'
import Contact from './components/Contact'
import Help from './components/Help'
import Footer from './components/Footer'
import { DarkModeProvider } from './contexts/DarkModeContext'

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />
        <Products />
        <CompanyBio />
        <Team />
        <Contact />
        <Help />
        <Footer />
      </div>
    </DarkModeProvider>
  )
}

export default App
 