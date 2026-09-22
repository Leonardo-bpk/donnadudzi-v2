
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoCaixa from './components/InfoCaixa'
import Projetos from './components/Projetos'
import AreasAtuacao from './components/AreasAtuacao'
import Faq from './components/Faq'
import ProjetosDestaque from './components/ProjetosDestaque'
import Footer from './components/Footer'

import CadastroProjeto from './pages/CadastroProjetos'

import './App.css'


function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <main>
        <InfoCaixa />

        <Projetos />

        <AreasAtuacao />

        <Faq />

        <ProjetosDestaque />
      </main>

      <Footer />
    </>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/cadastrar-projeto"
          element={<CadastroProjeto />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

