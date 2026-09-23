
import {
  FaHeart,
  FaComment,
  FaArrowRight,
} from "react-icons/fa";
function ProjetosDestaque() {
  const projetos = [
    {
      imagem: "/projeto-programacao.jpg",
      areas: ["Programação"],
      titulo: "Sistema de Biblioteca",
      descricao:
        "Uma plataforma desenvolvida para facilitar o gerenciamento da biblioteca escolar.",
      autor: "Gabriel Martins",
      curtidas: 42,
      comentarios: 8,
    },
    {
      imagem: "/projeto-quimica.jpg",
      areas: ["Química"],
      titulo: "Bioplástico a partir de Amido",
      descricao:
        "Pesquisa experimental sobre a produção de um material biodegradável utilizando amido como alternativa aos plásticos convencionais.",
      autor: "Ana Clara Souza",
      curtidas: 36,
      comentarios: 7,
    },
    {
      imagem: "/projeto-robotica.jpg",
      areas: ["Robótica", "Programação"],
      titulo: "Estufa Inteligente",
      descricao:
        "Sistema automatizado que utiliza sensores e programação para monitorar temperatura e umidade e controlar as condições de uma pequena estufa.",
      autor: "Rafael Oliveira",
      curtidas: 51,
      comentarios: 11,
    },
  ];

  return (
    <section className="w-full bg-[#fffff] px-5 py-24">
      <div className="mx-auto max-w-[1200px]">

        {/* Cabeçalho */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#275fcf]">
            Projetos da comunidade
          </p>

          <h2 className="text-4xl font-bold text-[#ff8000] md:text-5xl">
            Projetos em destaque
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-base leading-7 text-[#16458f] md:text-lg">
            Conheça algumas das ideias desenvolvidas por alunos e professores
            em diferentes áreas do conhecimento.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {projetos.map((projeto) => (
            <article
              key={projeto.titulo}
              className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
            >
              {/* Imagem */}
              <div className="h-[220px] overflow-hidden">
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6">

                {/* Áreas */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {projeto.areas.map((area) => (
                    <span
                      key={area}
                      className="rounded-md bg-[#16458f] px-3 py-1.5 text-xs font-semibold text-white"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                {/* Título */}
                <h3 className="mb-2 text-2xl font-bold text-[#ff8000]">
                  {projeto.titulo}
                </h3>

                {/* Descrição */}
                <p className="mb-6 line-clamp-3 text-sm leading-6 text-[#16458f]/80">
                  {projeto.descricao}
                </p>

                {/* Rodapé */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">

                  <span className="text-sm font-medium text-[#16458f]">
                    {projeto.autor}
                  </span>

                  <div className="flex items-center gap-4 text-sm text-[#16458f]/70">

                    <span className="flex items-center gap-1.5">
                      <FaHeart className="text-[#ff8000]" />
                      {projeto.curtidas}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <FaComment className="text-[#275fcf]" />
                      {projeto.comentarios}
                    </span>

                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Botão para o Feed */}
        <div className="mt-12 text-center">
          <a
            href="/feed"
            className="inline-flex items-center gap-2 rounded-lg bg-[#ff8000] px-7 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#e66f00]"
          >
            Explorar o Feed
            <FaArrowRight className="text-sm" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default ProjetosDestaque;
