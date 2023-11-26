import Ejercicio1 from './components/Ejercicio1'
import Footer from './components/Footer'
import Header from './components/Header'
import TituloPrincipal from './components/TituloPrincipal'
import './index.css'
import main from 'componets./main'


export default function App() {
  return (
    <>
      <Header />
      <main>
        <TituloPrincipal />
        <Ejercicio1 />
      </main>
      <Footer />
    </>
  )
}


