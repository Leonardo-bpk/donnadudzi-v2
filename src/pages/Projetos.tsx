import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
  FaComment,
  FaArrowRight,
  FaSearch,
  FaFilter,
} from "react-icons/fa";

import Navbar from "../components/Navbar";

interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  autor: string;
  turma: string;
  area: string;
  data: string;
  curtidas: number;
  comentarios: number;
  tags: string[];
}

const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "Sistema de Biblioteca",
    descricao:
      "Sistema desenvolvido para facilitar o gerenciamento de livros, empréstimos e usuários da biblioteca escolar.",
    imagem: "/projeto-programacao.jpg",
    autor: "Equipe Tech Library",
    turma: "3º Ano",
    area: "Programação",
    data: "2 dias atrás",
    curtidas: 42,
    comentarios: 8,
    tags: ["Programação", "Tecnologia"],
  },
  {
    id: 2,
    titulo: "Horta Sustentável",
    descricao:
      "Projeto que busca incentivar a produção de alimentos de forma sustentável dentro do ambiente escolar.",
    imagem: "/projeto-horta.jpg",
    autor: "Ana Oliveira",
    turma: "2º Ano",
    area: "Meio Ambiente",
    data: "4 dias atrás",
    curtidas: 67,
    comentarios: 12,
    tags: ["Sustentabilidade", "Biologia"],
  },
  {
    id: 3,
    titulo: "Robótica na Educação",
    descricao:
      "Protótipo desenvolvido para demonstrar como a robótica pode ser aplicada na resolução de problemas do cotidiano.",
    imagem: "/projeto-robotica.jpg",
    autor: "Equipe RoboTech",
    turma: "3º Ano",
    area: "Robótica",
    data: "1 semana atrás",
    curtidas: 91,
    comentarios: 16,
    tags: ["Robótica", "Tecnologia"],
  },
  {
    id: 4,
    titulo: "Energia do Futuro",
    descricao:
      "Estudo sobre fontes de energia renovável e suas possibilidades de aplicação em comunidades.",
    imagem: "/projeto-energia.jpg",
    autor: "Lucas Mendes",
    turma: "1º Ano",
    area: "Ciências",
    data: "1 semana atrás",
    curtidas: 35,
    comentarios: 5,
    tags: ["Energia", "Ciências"],
  },
];

const areas = [
  "Todos",
  "Programação",
  "Tecnologia",
  "Robótica",
  "Ciências",
  "Meio Ambiente",
];

function Projetos() {
  const [curtidos, setCurtidos] = useState<number[]>([]);
  const [busca, setBusca] = useState("");
  const [areaSelecionada, setAreaSelecionada] = useState("Todos");

  function alternarCurtida(id: number) {
    setCurtidos((estadoAtual) =>
      estadoAtual.includes(id)
        ? estadoAtual.filter((projetoId) => projetoId !== id)
        : [...estadoAtual, id]
    );
  }

  const projetosFiltrados = projetos.filter((projeto) => {
    const correspondeArea =
      areaSelecionada === "Todos" || projeto.area === areaSelecionada;

    const textoBusca = busca.toLowerCase();

    const correspondeBusca =
      projeto.titulo.toLowerCase().includes(textoBusca) ||
      projeto.descricao.toLowerCase().includes(textoBusca) ||
      projeto.autor.toLowerCase().includes(textoBusca) ||
      projeto.tags.some((tag) => tag.toLowerCase().includes(textoBusca));

    return correspondeArea && correspondeBusca;
  });

  return (
    <>
      <Navbar />

<main className="min-h-screen bg-[#F6F8FC] pt-[72px]">
        <section className="bg-[#275FCF] px-6 py-14 text-white">
          <div className="mx-auto max-w-[1100px]">
            <div className="max-w-[700px]">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-white/80">
                Projetos da comunidade
              </span>

              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Descubra o que está sendo criado.
              </h1>

              <p className="mt-5 max-w-[650px] text-base leading-7 text-white/85 md:text-lg">
                Explore projetos desenvolvidos por alunos, professores e
                equipes da comunidade escolar.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1100px] px-4 py-8 md:px-6">
          <div className="mb-8">
            <div className="relative w-full md:max-w-[420px]">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Pesquisar projetos..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#275FCF]"
              />
            </div>
          </div>

          <div className="mb-8 flex items-center gap-3 overflow-x-auto pb-2">
            <FaFilter
              className="shrink-0 text-[#275FCF]"
              size={14}
            />

            {areas.map((area) => (
              <button
                key={area}
                onClick={() => setAreaSelecionada(area)}
                className={`shrink-0 px-4 py-2 text-sm font-medium transition ${
                  areaSelecionada === area
                    ? "bg-[#275FCF] text-white"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-[#275FCF] hover:text-[#275FCF]"
                }`}
              >
                {area}
              </button>
            ))}
          </div>

          <div className="mx-auto max-w-[760px] space-y-8">
            {projetosFiltrados.length > 0 ? (
              projetosFiltrados.map((projeto) => {
                const estaCurtido = curtidos.includes(projeto.id);

                return (
                  <article
                    key={projeto.id}
                    className="overflow-hidden border border-gray-200 bg-white"
                  >
                    <div className="flex items-center justify-between px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#275FCF] text-sm font-bold text-white">
                          {projeto.autor.charAt(0)}
                        </div>

                        <div>
                          <h2 className="text-sm font-semibold text-gray-900">
                            {projeto.autor}
                          </h2>

                          <p className="text-xs text-gray-500">
                            {projeto.turma} · {projeto.area}
                          </p>
                        </div>
                      </div>

                      <span className="text-xs text-gray-400">
                        {projeto.data}
                      </span>
                    </div>

                    <div className="aspect-[3/2] w-full overflow-hidden bg-gray-100">
                      <img
                        src={projeto.imagem}
                        alt={projeto.titulo}
                        className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
                      />
                    </div>

                    <div className="px-5 pt-4">
                      <div className="flex items-center gap-5">
                        <button
                          onClick={() => alternarCurtida(projeto.id)}
                          className={`flex items-center gap-2 text-sm transition ${
                            estaCurtido
                              ? "text-[#FF6200]"
                              : "text-gray-600 hover:text-[#FF6200]"
                          }`}
                        >
                          {estaCurtido ? (
                            <FaHeart size={19} />
                          ) : (
                            <FaRegHeart size={19} />
                          )}

                          <span>
                            {projeto.curtidas + (estaCurtido ? 1 : 0)}
                          </span>
                        </button>

                        <button className="flex items-center gap-2 text-sm text-gray-600 transition hover:text-[#275FCF]">
                          <FaComment size={18} />
                          <span>{projeto.comentarios}</span>
                        </button>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {projeto.titulo}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {projeto.descricao}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {projeto.tags.map((tag, index) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 text-xs font-medium ${
                              index === 0
                                ? "bg-[#275FCF]/10 text-[#275FCF]"
                                : "bg-[#FF6200]/10 text-[#FF6200]"
                            }`}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/projetos/${projeto.id}`}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#275FCF] transition hover:text-[#FF6200]"
                      >
                        Ver projeto completo
                        <FaArrowRight size={12} />
                      </Link>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="border border-gray-200 bg-white px-6 py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#275FCF]/10">
                  <FaSearch className="text-[#275FCF]" />
                </div>

                <h2 className="mt-5 text-xl font-bold text-gray-900">
                  Nenhum projeto encontrado
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Tente pesquisar por outro termo ou escolha outra área.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Projetos;