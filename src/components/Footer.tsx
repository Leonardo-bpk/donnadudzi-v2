import logo from '../assets/logo.png'
function Footer() {
  return (
    <footer className="w-full bg-[#1f456e] text-white">

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4 md:px-10">

        {/* Logo */}
        <div className="flex items-start">
         <img
  src={logo}
  alt="Logo da Donaduzzi Academy"
  className="w-full max-w-[260px] object-contain"
/>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-4 text-xl font-bold">
            Links
          </h3>

          <ul className="space-y-3">
            <li>
              <a href="#" className="transition-colors hover:text-[#ff8000]">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="transition-colors hover:text-[#ff8000]">
                Projetos
              </a>
            </li>

            <li>
              <a href="/login" className="transition-colors hover:text-[#ff8000]">
                Login
              </a>
            </li>

            <li>
              <a href="#" className="transition-colors hover:text-[#ff8000]">
                Adicionar Projeto
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="mb-4 text-xl font-bold">
            Contato
          </h3>

          <p className="mb-3">
            Email:{' '}
            <a
              href="mailto:contato@site.com"
              className="transition-colors hover:text-[#ff8000]"
            >
              contato@site.com
            </a>
          </p>

          <p>
            Telefone: +55 1234-5678
          </p>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="mb-4 text-xl font-bold">
            Siga-nos
          </h3>

          <div className="flex gap-4">

            <a
              href="https://www.instagram.com/biopark_clubedeciencias/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff8000]"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://www.youtube.com/@bioparkeducacao"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff8000]"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>

            <a
              href="https://www.facebook.com/biopark.edu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff8000]"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a
              href="https://br.linkedin.com/school/bioparkedu/?trk=similar-pages"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff8000]"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-white/80">
        © 2025 Donaduzzi Academy. Todos os direitos reservados.
      </div>

    </footer>
  )
}

export default Footer