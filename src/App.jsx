
import './App.css'
import Especializacion from './Components/Especializacion/Especializacion'
import Footer from './Components/Footer/Footer'
import Formulario from './Components/Formulario/Formulario'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Info from './Components/Info/Info'
import Portfolio from './Components/Portfolio/Portfolio'
import Servicios from './Components/Servicios/Servicios'
import Skills from './Components/Skills/Skills'

function App() {
 

  return (
    <>
      <Header  />
      <Hero />
      <Info/>
      <Skills/>
      <Especializacion/>
      <Servicios/>
      <Portfolio/>
      <Formulario/>
      <Footer/>
     
       
    </>
  )
}

export default App
