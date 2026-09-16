function Projetos() {
  return (
    <section className="relative w-full overflow-hidden bg-[#275fcf]">

      {/* Onda superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[80px] w-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#f0f2f5"
          />
        </svg>
      </div>

      {/* Conteúdo */}
      <div className="mx-auto flex min-h-[600px] w-full max-w-[1200px] flex-col items-center justify-center gap-10 px-5 pb-20 pt-32 md:flex-row md:gap-16 md:px-10">

        {/* Imagem */}
        <div className="w-full md:w-1/2">
          <img
            src="/imageotavio.jpg"
            alt="Alunos apresentando projetos"
            className="w-full rounded-2xl object-cover shadow-[0_12px_30px_rgba(0,0,0,0.2)]"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 text-white">

          <h1 className="mb-5 text-4xl font-bold md:text-5xl">
            Projetos
          </h1>

          <p className="mb-8 text-base leading-7 md:text-lg">
            Aqui, alunos que se destacam têm a oportunidade de desenvolver
            projetos nas áreas de inovação, tecnologia, cultura ou ciências.
            Com orientação e apoio, podem transformar ideias em soluções reais.
            Se o projeto for bem avaliado, pode ser selecionado para competições
            e eventos, com chances de premiações e reconhecimento.
          </p>

          <a
            href="./projetos.html"
            className="inline-block rounded-lg bg-[#ff8000] px-7 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#e66f00]"
          >
            Ver Projetos
          </a>

        </div>

      </div>

    </section>
  )
}

export default Projetos