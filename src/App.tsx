import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoCaixa from './components/InfoCaixa'
import Projetos from './components/Projetos'
import AreasAtuacao from './components/AreasAtuacao'
import Faq from './components/Faq'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <main>
        <InfoCaixa />

        <Projetos />

        <AreasAtuacao />

        <Faq />
      </main>

      <Footer />
    </>
  )
}

export default App