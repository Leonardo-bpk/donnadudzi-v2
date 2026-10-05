import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import InfoCaixa from './components/InfoCaixa'
import ProjetosExpli from './components/ProjetosExpli'
import AreasAtuacao from './components/AreasAtuacao'
import Faq from './components/Faq'
import ProjetosDestaque from './components/ProjetosDestaque'
import Footer from './components/Footer'
import Perfil from './pages/Perfil'
import Projetos from './pages/Projetos'
import Dashboard from './pages/Dashboard'

import InversionCircleScrollAnimation from './components/InversionCircleScrollAnimation'

import CadastroProjeto from './pages/CadastroProjetos'
import Login from './pages/Login'

import './App.css'

function Home() {
  return (
    <>
      <Navbar />

      <InversionCircleScrollAnimation />
      <ProjetosExpli />
      <InfoCaixa />

      <AreasAtuacao />

      <Faq />

      <ProjetosDestaque />

      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/projetos"
          element={<Projetos />}
        />

        <Route
          path="/cadastrar-projeto"
          element={<CadastroProjeto />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/perfil"
          element={<Perfil />}
        />

        <Route
          path="/admin"
          element={<Dashboard />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App