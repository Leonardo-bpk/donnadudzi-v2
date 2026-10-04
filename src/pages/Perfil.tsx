import {
  FaArrowLeft,
  FaEdit,
  FaHeart,
  FaComment,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Perfil() {
  const projetos = [
    {
      titulo: "Sistema de Biblioteca",
      descricao:
        "Sistema desenvolvido para facilitar o gerenciamento de livros, empréstimos e usuários da biblioteca escolar.",
      area: "Programação",
      curtidas: 42,
      comentarios: 8,
      imagem: "/projeto-programacao.jpg",
    },
    {
      titulo: "Horta Sustentável",
      descricao:
        "Projeto voltado à criação de uma horta escolar utilizando práticas sustentáveis.",
      area: "Meio Ambiente",
      curtidas: 31,
      comentarios: 5,
      imagem: "/projeto-meio-ambiente.jpg",
    },
    {
      titulo: "Robótica Educacional",
      descricao:
        "Protótipo desenvolvido durante as atividades de robótica e tecnologia.",
      area: "Robótica",
      curtidas: 27,
      comentarios: 4,
      imagem: "/projeto-robotica.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1f456e]">

      {/* HERO DO PERFIL */}
      <section className="bg-[#275FCF] text-white">
        <div className="mx-auto max-w-[1200px] px-6 py-10 md:px-10">

          {/* Voltar */}
          <button
            onClick={() => window.history.back()}
            className="mb-8 flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white"
          >
            <FaArrowLeft />
            Voltar
          </button>

          <div className="flex flex-col gap-8 md:flex-row md:items-center">

            {/* Foto */}
            <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white text-4xl font-bold text-[#275FCF] shadow-lg">
              LS
            </div>

            {/* Informações */}
            <div className="flex-1">
              <div className="mb-2 inline-flex items-center rounded-full bg-[#FF8000] px-4 py-1 text-sm font-semibold text-white">
                Aluno
              </div>

              <h1 className="text-3xl font-bold md:text-4xl">
                Aluno genérico da silva
              </h1>

              <p className="mt-2 max-w-2xl text-base leading-relaxed text-white/90">
                Estudante do colégio Biopark Educação, apaixonado por tecnologia e inovação. Sempre em busca de novos desafios e oportunidades para aprender e crescer.
              </p>

              <div className="mt-5 flex flex-wrap gap-5 text-sm text-white/90">
                <span className="flex items-center gap-2">
                  <FaGraduationCap />
                  Ensino Médio
                </span>

                <span className="flex items-center gap-2">
                  <FaCalendarAlt />
                  Desde 2024
                </span>

                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  Biopark Educação
                </span>
              </div>
            </div>

            {/* Editar */}
            <button className="flex items-center justify-center gap-2 self-start rounded-lg bg-white px-5 py-3 font-semibold text-[#275FCF] transition hover:bg-[#f5f7fb]">
              <FaEdit />
              Editar perfil
            </button>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-10">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">

          {/* COLUNA LATERAL */}
          <aside className="space-y-6">

            {/* Sobre */}
            <div className="border-b border-gray-200 pb-7">
              <h2 className="mb-4 text-xl font-bold text-[#1f456e]">
                Sobre mim
              </h2>

              <p className="text-sm leading-7 text-gray-600">
                Sou estudante do ensino médio e gosto de aprender através de
                projetos práticos. Tenho interesse principalmente em
                programação, tecnologia e desenvolvimento de soluções digitais.
              </p>
            </div>

            {/* Áreas */}
            <div className="border-b border-gray-200 pb-7">
              <h2 className="mb-4 text-xl font-bold text-[#1f456e]">
                Áreas de interesse
              </h2>

              <div className="flex flex-wrap gap-2">
                {[
                  "Programação",
                  "Tecnologia",
                  "Robótica",
                  "Inovação",
                ].map((area) => (
                  <span
                    key={area}
                    className="border border-[#275FCF]/20 bg-[#275FCF]/5 px-3 py-2 text-sm font-medium text-[#275FCF]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Estatísticas */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-[#1f456e]">
                Atividade
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-200 p-4">
                  <strong className="block text-2xl text-[#275FCF]">
                    12
                  </strong>
                  <span className="text-sm text-gray-500">
                    Projetos
                  </span>
                </div>

                <div className="border border-gray-200 p-4">
                  <strong className="block text-2xl text-[#FF8000]">
                    186
                  </strong>
                  <span className="text-sm text-gray-500">
                    Curtidas
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* PROJETOS */}
          <div>

            <div className="mb-7 flex items-end justify-between gap-4">
              <div>
                <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-[#FF8000]">
                  Produções
                </p>

                <h2 className="text-2xl font-bold text-[#1f456e] md:text-3xl">
                  Projetos que participei
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Confira alguns dos projetos desenvolvidos durante minha
                  trajetória escolar.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {projetos.map((projeto) => (
                <article
                  key={projeto.titulo}
                  className="group flex flex-col overflow-hidden border border-gray-200 bg-white transition hover:border-[#275FCF]/30 hover:shadow-md md:flex-row"
                >
                  {/* Imagem */}
                  <div className="h-52 w-full shrink-0 overflow-hidden bg-[#275FCF]/5 md:h-auto md:w-56">
                    <img
                      src={projeto.imagem}
                      alt={projeto.titulo}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="flex flex-1 flex-col justify-between p-6">

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FF8000]">
                        {projeto.area}
                      </span>

                      <h3 className="mt-2 text-xl font-bold text-[#1f456e]">
                        {projeto.titulo}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {projeto.descricao}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-5 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <FaHeart className="text-[#FF8000]" />
                        {projeto.curtidas}
                      </span>

                      <span className="flex items-center gap-2">
                        <FaComment className="text-[#275FCF]" />
                        {projeto.comentarios}
                      </span>

                      <button className="ml-auto font-semibold text-[#275FCF] transition hover:text-[#FF8000]">
                        Ver projeto →
                      </button>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Perfil;