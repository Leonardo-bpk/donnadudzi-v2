import logo from '../assets/logo.png'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-[#1d54a2] px-6 py-3 shadow-md md:px-10">

      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Academia Donaduzzi"
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Links */}
      <nav className="hidden items-center gap-8 md:flex">
        <a
          href="#"
          className="font-semibold text-white transition-colors duration-300 hover:text-[#ff6200]"
        >
          Formulário
        </a>

        <a
          href="#"
          className="font-semibold text-white transition-colors duration-300 hover:text-[#ff6200]"
        >
          Projetos
        </a>

        <a
          href="#"
          className="font-semibold text-white transition-colors duration-300 hover:text-[#ff6200]"
        >
          Login
        </a>
      </nav>

      {/* Ações */}
      <div className="flex items-center gap-3">

        <button
          className="hidden rounded-lg bg-[#ff6200] px-5 py-2 font-bold text-white transition-all duration-300 hover:bg-[#e05500] hover:-translate-y-0.5 md:block"
        >
          Perfil
        </button>

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