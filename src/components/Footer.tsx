
import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className="w-full bg-[#275FCF] text-white">

      {/* Conteúdo principal */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-14 md:grid-cols-4 md:px-10">

        {/* Logo */}
        <div className="flex flex-col items-start">
          <img
            src={logo}
            alt="Logo da Donaduzzi Academy"
            className="w-full max-w-[240px] object-contain"
          />

          <p className="mt-5 max-w-[260px] text-sm leading-relaxed text-white/80">
            Educação, tecnologia e inovação para transformar ideias em projetos.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-5 text-lg font-bold">
            Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="/"
                className="text-white/80 transition-colors hover:text-[#FF8000]"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#projetos"
                className="text-white/80 transition-colors hover:text-[#FF8000]"
              >
                Projetos
              </a>
            </li>

            <li>
              <a
                href="/login"
                className="text-white/80 transition-colors hover:text-[#FF8000]"
              >
                Login
              </a>
            </li>

            <li>
              <a
                href="/cadastrar-projeto"
                className="text-white/80 transition-colors hover:text-[#FF8000]"
              >
                Adicionar Projeto
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="mb-5 text-lg font-bold">
            Contato
          </h3>

          <div className="space-y-3 text-sm text-white/80">
            <p>
              Email:{' '}
              <a
                href="mailto:contato@site.com"
                className="transition-colors hover:text-[#FF8000]"
              >
                contato@site.com
              </a>
            </p>

            <p>
              Telefone: +55 1234-5678
            </p>
          </div>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="mb-5 text-lg font-bold">
            Siga-nos
          </h3>

          <p className="mb-5 max-w-[230px] text-sm leading-relaxed text-white/80">
            Acompanhe o Biopark Educação e fique por dentro das novidades.
          </p>

          <div className="flex gap-3">

            <a
              href="https://www.instagram.com/biopark_clubedeciencias/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#FF8000] hover:bg-[#FF8000]"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://www.youtube.com/@bioparkeducacao"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#FF8000] hover:bg-[#FF8000]"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>

            <a
              href="https://www.facebook.com/biopark.edu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#FF8000] hover:bg-[#FF8000]"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a
              href="https://br.linkedin.com/school/bioparkedu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#FF8000] hover:bg-[#FF8000]"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

          </div>
        </div>

      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-white/15 px-6 py-5">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 text-center text-sm text-white/70 md:flex-row md:text-left">
          <p>
            © 2026 Donaduzzi Academy. Todos os direitos reservados.
          </p>

          <p>
            Biopark Educação
          </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer
