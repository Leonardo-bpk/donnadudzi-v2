
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-[#275fcf] px-6 py-3 md:px-10">

      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Academia Donaduzzi"
          className="h-12 w-auto object-contain"
        />
      </Link>

      {/* Links */}
      <nav className="hidden items-center gap-8 md:flex">

        <Link
          to="/projetos"
          className="font-semibold text-white transition-colors duration-300 hover:text-[#ff8a1f]"
        >
          Projetos
        </Link>

        <Link
          to="/login"
          className="font-semibold text-white transition-colors duration-300 hover:text-[#ff8a1f]"
        >
          Login
        </Link>

      </nav>

      {/* Ações */}
      <div className="flex items-center gap-3">

        <Link
          to="/perfil"
          className="hidden rounded-lg bg-[#ff6200] px-5 py-2 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff8a1f] md:block"
        >
          Perfil
        </Link>

        <button
          className="rounded-lg px-3 py-2 text-2xl text-white transition-colors duration-300 hover:bg-white/10 md:hidden"
          aria-label="Abrir menu"
        >
          ☰
        </button>

      </div>

    </header>
  )
}

export default Navbar
