import { useState } from "react";
import {
  BarChart3,
  CheckCircle2,
  Clock3,
  FolderKanban,
  Users,
  Eye,
  Pencil,
  Search,
  ChevronDown,
  MessageCircle,
  Heart,
  XCircle,
} from "lucide-react";

type Projeto = {
  id: number;
  titulo: string;
  alunos: string[];
  professor: string;
  area: string;
  status: "Publicado" | "Pendente" | "Rejeitado";
  data: string;
  curtidas: number;
  comentarios: number;
};

const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "Sistema de Biblioteca",
    alunos: ["Leonardo", "Gabriel", "Lucas"],
    professor: "João Silva",
    area: "Programação",
    status: "Publicado",
    data: "05/10/2026",
    curtidas: 42,
    comentarios: 8,
  },
  {
    id: 2,
    titulo: "Robô Autônomo",
    alunos: ["Ana", "Mariana", "Pedro", "Rafael"],
    professor: "Maria Oliveira",
    area: "Robótica",
    status: "Pendente",
    data: "04/10/2026",
    curtidas: 17,
    comentarios: 3,
  },
  {
    id: 3,
    titulo: "Aplicativo Escolar",
    alunos: ["Carlos", "Felipe"],
    professor: "Carlos Mendes",
    area: "Programação",
    status: "Publicado",
    data: "03/10/2026",
    curtidas: 31,
    comentarios: 5,
  },
  {
    id: 4,
    titulo: "Horta Inteligente",
    alunos: ["Julia", "Beatriz", "Mateus"],
    professor: "Fernanda Costa",
    area: "Ciências",
    status: "Publicado",
    data: "01/10/2026",
    curtidas: 24,
    comentarios: 4,
  },
  {
    id: 5,
    titulo: "Identidade Visual da Escola",
    alunos: ["Laura", "Sofia"],
    professor: "Paulo Souza",
    area: "Design",
    status: "Rejeitado",
    data: "29/09/2026",
    curtidas: 6,
    comentarios: 1,
  },
];

const projetosPorMes = [
  { mes: "Mai", valor: 8 },
  { mes: "Jun", valor: 12 },
  { mes: "Jul", valor: 10 },
  { mes: "Ago", valor: 17 },
  { mes: "Set", valor: 23 },
  { mes: "Out", valor: 15 },
];

const areas = [
  { nome: "Programação", valor: 38 },
  { nome: "Robótica", valor: 24 },
  { nome: "Design", valor: 18 },
  { nome: "Ciências", valor: 12 },
  { nome: "Outros", valor: 8 },
];

function StatusBadge({ status }: { status: Projeto["status"] }) {
  const estilos = {
    Publicado: "bg-green-50 text-green-700 border-green-200",
    Pendente: "bg-orange-50 text-orange-700 border-orange-200",
    Rejeitado: "bg-red-50 text-red-700 border-red-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium ${estilos[status]}`}
    >
      {status}
    </span>
  );
}

function AdminDashboard() {
  const [busca, setBusca] = useState("");
  const [statusFiltro, setStatusFiltro] = useState("Todos");
  const [projetoSelecionado, setProjetoSelecionado] =
    useState<Projeto | null>(null);

  const projetosFiltrados = projetos.filter((projeto) => {
    const correspondeBusca =
      projeto.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      projeto.professor.toLowerCase().includes(busca.toLowerCase()) ||
      projeto.area.toLowerCase().includes(busca.toLowerCase());

    const correspondeStatus =
      statusFiltro === "Todos" || projeto.status === statusFiltro;

    return correspondeBusca && correspondeStatus;
  });

  const maxProjetos = Math.max(...projetosPorMes.map((item) => item.valor));

  return (
    <main className="min-h-screen bg-[#F6F8FB] text-[#172033]">
      <div className="mx-auto max-w-[1500px] px-6 py-10 md:px-10">
        {/* Cabeçalho */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-medium text-[#275FCF]">
              Administração
            </p>

            <h1 className="text-3xl font-semibold tracking-tight">
              Dashboard
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Visão geral dos projetos e atividades da plataforma.
            </p>
          </div>

          <div className="text-sm text-gray-500">
            Atualizado em 05/10/2026
          </div>
        </div>

        {/* Métricas */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          <div className="border border-gray-200 bg-white p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm text-gray-500">Projetos</span>
              <FolderKanban size={19} className="text-[#275FCF]" />
            </div>

            <strong className="text-3xl font-semibold">86</strong>

            <p className="mt-2 text-xs text-gray-500">
              +12% em relação ao mês anterior
            </p>
          </div>

          <div className="border border-gray-200 bg-white p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm text-gray-500">Publicados</span>
              <CheckCircle2 size={19} className="text-green-600" />
            </div>

            <strong className="text-3xl font-semibold">71</strong>

            <p className="mt-2 text-xs text-gray-500">
              82,5% dos projetos
            </p>
          </div>

          <div className="border border-gray-200 bg-white p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm text-gray-500">Pendentes</span>
              <Clock3 size={19} className="text-orange-500" />
            </div>

            <strong className="text-3xl font-semibold">11</strong>

            <p className="mt-2 text-xs text-gray-500">
              Aguardando aprovação
            </p>
          </div>

          <div className="border border-gray-200 bg-white p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm text-gray-500">Usuários</span>
              <Users size={19} className="text-[#275FCF]" />
            </div>

            <strong className="text-3xl font-semibold">324</strong>

            <p className="mt-2 text-xs text-gray-500">
              Alunos e professores
            </p>
          </div>

          <div className="border border-gray-200 bg-white p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm text-gray-500">Interações</span>
              <BarChart3 size={19} className="text-[#FF6200]" />
            </div>

            <strong className="text-3xl font-semibold">1.284</strong>

            <p className="mt-2 text-xs text-gray-500">
              Curtidas e comentários
            </p>
          </div>
        </section>

        {/* Gráficos */}
        <section className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-[1.5fr_1fr]">
          {/* Projetos por mês */}
          <div className="border border-gray-200 bg-white p-6">
            <div className="mb-8 flex items-start justify-between">
              <div>
                <h2 className="font-semibold">Projetos publicados</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Evolução nos últimos meses
                </p>
              </div>

              <BarChart3 size={20} className="text-gray-400" />
            </div>

            <div className="flex h-[260px] items-end gap-5 border-b border-gray-100 px-2">
              {projetosPorMes.map((item) => {
                const altura = (item.valor / maxProjetos) * 100;

                return (
                  <div
                    key={item.mes}
                    className="flex h-full flex-1 flex-col justify-end"
                  >
                    <div className="mb-2 text-center text-xs font-medium text-gray-500">
                      {item.valor}
                    </div>

                    <div
                      className="w-full bg-[#275FCF] transition-all hover:bg-[#1f4fae]"
                      style={{ height: `${altura}%` }}
                    />

                    <div className="pt-3 text-center text-xs text-gray-400">
                      {item.mes}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Áreas */}
          <div className="border border-gray-200 bg-white p-6">
            <div className="mb-8">
              <h2 className="font-semibold">Projetos por área</h2>
              <p className="mt-1 text-sm text-gray-500">
                Distribuição dos projetos publicados
              </p>
            </div>

            <div className="space-y-5">
              {areas.map((area) => (
                <div key={area.nome}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-gray-600">{area.nome}</span>
                    <span className="font-medium">{area.valor}%</span>
                  </div>

                  <div className="h-2 w-full bg-gray-100">
                    <div
                      className="h-full bg-[#275FCF]"
                      style={{ width: `${area.valor}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section className="border border-gray-200 bg-white">
          <div className="border-b border-gray-200 p-6">
            <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="font-semibold">Projetos</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Gerencie e acompanhe os projetos cadastrados.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:flex-row">
              {/* Busca */}
              <div className="relative flex-1">
                <Search
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  placeholder="Pesquisar projeto, professor ou área..."
                  className="h-10 w-full border border-gray-200 bg-white pl-10 pr-4 text-sm outline-none transition focus:border-[#275FCF]"
                />
              </div>

              {/* Filtro */}
              <div className="relative">
                <select
                  value={statusFiltro}
                  onChange={(e) => setStatusFiltro(e.target.value)}
                  className="h-10 appearance-none border border-gray-200 bg-white pl-4 pr-10 text-sm outline-none focus:border-[#275FCF]"
                >
                  <option>Todos</option>
                  <option>Publicado</option>
                  <option>Pendente</option>
                  <option>Rejeitado</option>
                </select>

                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Tabela */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-gray-500">
                    Projeto
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-gray-500">
                    Professor
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-gray-500">
                    Área
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-gray-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-gray-500">
                    Data
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wide text-gray-500">
                    Ações
                  </th>
                </tr>
              </thead>

              <tbody>
                {projetosFiltrados.map((projeto) => (
                  <tr
                    key={projeto.id}
                    className="border-b border-gray-100 transition hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-800">
                          {projeto.titulo}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          {projeto.alunos.length}{" "}
                          {projeto.alunos.length === 1
                            ? "aluno"
                            : "alunos"}
                        </p>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {projeto.professor}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {projeto.area}
                    </td>

                    <td className="px-6 py-4">
                      <StatusBadge status={projeto.status} />
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-500">
                      {projeto.data}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setProjetoSelecionado(projeto)}
                          className="flex h-8 items-center gap-2 border border-gray-200 px-3 text-xs font-medium text-gray-600 transition hover:border-[#275FCF] hover:text-[#275FCF]"
                        >
                          <Eye size={14} />
                          Ver
                        </button>

                        <button
                          onClick={() => setProjetoSelecionado(projeto)}
                          className="flex h-8 items-center gap-2 border border-gray-200 px-3 text-xs font-medium text-gray-600 transition hover:border-[#275FCF] hover:text-[#275FCF]"
                        >
                          <Pencil size={14} />
                          Editar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {projetosFiltrados.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-12 text-center text-sm text-gray-500"
                    >
                      Nenhum projeto encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Modal de detalhes */}
      {projetoSelecionado && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-5"
          onClick={() => setProjetoSelecionado(null)}
        >
          <div
            className="w-full max-w-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-gray-200 p-6">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[#275FCF]">
                  Detalhes do projeto
                </p>

                <h2 className="text-2xl font-semibold">
                  {projetoSelecionado.titulo}
                </h2>
              </div>

              <button
                onClick={() => setProjetoSelecionado(null)}
                className="text-gray-400 transition hover:text-gray-700"
              >
                <XCircle size={22} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
              <div>
                <p className="mb-1 text-xs text-gray-400">Professor</p>
                <p className="text-sm font-medium">
                  {projetoSelecionado.professor}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs text-gray-400">Área</p>
                <p className="text-sm font-medium">
                  {projetoSelecionado.area}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs text-gray-400">Status</p>
                <StatusBadge status={projetoSelecionado.status} />
              </div>

              <div>
                <p className="mb-1 text-xs text-gray-400">Data</p>
                <p className="text-sm font-medium">
                  {projetoSelecionado.data}
                </p>
              </div>

              <div className="md:col-span-2">
                <p className="mb-2 text-xs text-gray-400">
                  Alunos participantes
                </p>

                <div className="flex flex-wrap gap-2">
                  {projetoSelecionado.alunos.map((aluno) => (
                    <span
                      key={aluno}
                      className="border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-600"
                    >
                      {aluno}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 border-t border-gray-100 pt-5">
                <Heart size={17} className="text-[#FF6200]" />
                <span className="text-sm">
                  {projetoSelecionado.curtidas} curtidas
                </span>
              </div>

              <div className="flex items-center gap-2 border-t border-gray-100 pt-5">
                <MessageCircle size={17} className="text-[#275FCF]" />
                <span className="text-sm">
                  {projetoSelecionado.comentarios} comentários
                </span>
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-gray-200 p-6">
              {projetoSelecionado.status === "Pendente" && (
                <>
                  <button className="border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50">
                    Rejeitar
                  </button>

                  <button className="bg-[#275FCF] px-4 py-2 text-sm font-medium text-white hover:bg-[#1f4fae]">
                    Aprovar projeto
                  </button>
                </>
              )}

              <button
                onClick={() => setProjetoSelecionado(null)}
                className="border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default AdminDashboard;