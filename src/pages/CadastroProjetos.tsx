
import { useState } from "react";
import type { FormEvent } from "react";

interface Aluno {
  nome: string;
}

interface Projeto {
  titulo: string;
  descricaoCurta: string;
  descricaoLonga: string;
  alunos: Aluno[];
  professor: string;
  orientador: string | null;
}

export default function CadastroProjeto() {
  const [titulo, setTitulo] = useState("");
  const [descricaoCurta, setDescricaoCurta] = useState("");
  const [descricaoLonga, setDescricaoLonga] = useState("");

  const [quantidadeAlunos, setQuantidadeAlunos] = useState(1);
  const [alunos, setAlunos] = useState<Aluno[]>([{ nome: "" }]);

  const [professor, setProfessor] = useState("");
  const [temOrientador, setTemOrientador] = useState(false);
  const [orientador, setOrientador] = useState("");

  const [erros, setErros] = useState<Record<string, string>>({});
  const [sucesso, setSucesso] = useState(false);

  function alterarQuantidadeAlunos(quantidade: number) {
    setQuantidadeAlunos(quantidade);

    setAlunos((alunosAtuais) => {
      const novosAlunos = [...alunosAtuais];

      if (quantidade > novosAlunos.length) {
        while (novosAlunos.length < quantidade) {
          novosAlunos.push({ nome: "" });
        }
      } else {
        novosAlunos.length = quantidade;
      }

      return novosAlunos;
    });
  }

  function alterarNomeAluno(index: number, nome: string) {
    setAlunos((alunosAtuais) =>
      alunosAtuais.map((aluno, i) =>
        i === index ? { ...aluno, nome } : aluno
      )
    );
  }

  function alternarOrientador(ativo: boolean) {
    setTemOrientador(ativo);

    if (!ativo) {
      setOrientador("");
    }
  }

  function validarFormulario() {
    const novosErros: Record<string, string> = {};

    if (!titulo.trim()) {
      novosErros.titulo = "Informe o título do projeto.";
    }

    if (!descricaoCurta.trim()) {
      novosErros.descricaoCurta =
        "Informe uma descrição curta para o projeto.";
    }

    if (!descricaoLonga.trim()) {
      novosErros.descricaoLonga =
        "Informe uma descrição completa para o projeto.";
    }

    if (alunos.length < 1) {
      novosErros.alunos = "O projeto precisa ter pelo menos um aluno.";
    }

    alunos.forEach((aluno, index) => {
      if (!aluno.nome.trim()) {
        novosErros[`aluno-${index}`] = `Informe o nome do Aluno ${
          index + 1
        }.`;
      }
    });

    if (!professor.trim()) {
      novosErros.professor = "Informe o professor responsável.";
    }

    if (temOrientador && !orientador.trim()) {
      novosErros.orientador = "Informe o professor orientador.";
    }

    setErros(novosErros);

    return Object.keys(novosErros).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSucesso(false);

    if (!validarFormulario()) {
      return;
    }

    const projeto: Projeto = {
      titulo: titulo.trim(),
      descricaoCurta: descricaoCurta.trim(),
      descricaoLonga: descricaoLonga.trim(),
      alunos: alunos.map((aluno) => ({
        nome: aluno.nome.trim(),
      })),
      professor: professor.trim(),
      orientador: temOrientador ? orientador.trim() : null,
    };

    console.log("Projeto cadastrado:", projeto);

    setSucesso(true);
  }

  const inputClass = (campo: string) =>
    `w-full rounded-md border bg-[#0f172a] px-4 py-3 text-slate-100 outline-none transition
    placeholder:text-slate-500
    focus:border-[#275fcf] focus:ring-1 focus:ring-[#275fcf]/30
    ${
      erros[campo]
        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
        : "border-slate-700"
    }`;

  return (
    <main className="min-h-screen bg-[#0f172a]">
      {/* Cabeçalho */}
      <section className="border-b border-slate-800 bg-[#111827]">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Cadastrar projeto
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Cadastre um novo projeto para que ele possa aparecer no feed e ter
            sua própria página.
          </p>
        </div>
      </section>

      {/* Formulário */}
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Informações do projeto */}
          <div className="border border-slate-700 bg-[#1e293b] p-6 sm:p-8">
            <div className="mb-7">
              <h2 className="text-xl font-bold text-white">
                Informações do projeto
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Preencha as informações principais do projeto escolar.
              </p>
            </div>

            <div className="space-y-6">
              {/* Título */}
              <div>
                <label
                  htmlFor="titulo"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Título do projeto
                </label>

                <input
                  id="titulo"
                  type="text"
                  value={titulo}
                  onChange={(event) => setTitulo(event.target.value)}
                  placeholder="Ex: Robótica Sustentável"
                  className={inputClass("titulo")}
                  required
                />

                {erros.titulo && (
                  <p className="mt-2 text-sm text-red-400">
                    {erros.titulo}
                  </p>
                )}
              </div>

              {/* Descrição curta */}
              <div>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <label
                    htmlFor="descricaoCurta"
                    className="block text-sm font-semibold text-slate-200"
                  >
                    Descrição curta
                  </label>

                  <span className="text-xs text-slate-500">
                    {descricaoCurta.length}/250
                  </span>
                </div>

                <textarea
                  id="descricaoCurta"
                  value={descricaoCurta}
                  onChange={(event) => {
                    if (event.target.value.length <= 250) {
                      setDescricaoCurta(event.target.value);
                    }
                  }}
                  placeholder="Escreva uma breve descrição do projeto"
                  rows={4}
                  maxLength={250}
                  className={`${inputClass("descricaoCurta")} resize-none`}
                  required
                />

                <p className="mt-2 text-xs text-slate-500">
                  Essa descrição aparecerá no feed.
                </p>

                {erros.descricaoCurta && (
                  <p className="mt-2 text-sm text-red-400">
                    {erros.descricaoCurta}
                  </p>
                )}
              </div>

              {/* Descrição longa */}
              <div>
                <label
                  htmlFor="descricaoLonga"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Descrição completa
                </label>

                <textarea
                  id="descricaoLonga"
                  value={descricaoLonga}
                  onChange={(event) => setDescricaoLonga(event.target.value)}
                  placeholder="Descreva detalhadamente o projeto, seus objetivos, desenvolvimento e resultados."
                  rows={8}
                  className={`${inputClass("descricaoLonga")} resize-y`}
                  required
                />

                <p className="mt-2 text-xs text-slate-500">
                  Essa descrição aparecerá na página individual do projeto.
                </p>

                {erros.descricaoLonga && (
                  <p className="mt-2 text-sm text-red-400">
                    {erros.descricaoLonga}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Alunos */}
          <div className="border border-slate-700 bg-[#1e293b] p-6 sm:p-8">
            <div className="mb-7">
              <h2 className="text-xl font-bold text-white">
                Alunos participantes
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Selecione quantos alunos participam do projeto.
              </p>
            </div>

            <div className="space-y-6">
              {/* Quantidade */}
              <div>
                <label
                  htmlFor="quantidadeAlunos"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Quantidade de alunos
                </label>

                <select
                  id="quantidadeAlunos"
                  value={quantidadeAlunos}
                  onChange={(event) =>
                    alterarQuantidadeAlunos(Number(event.target.value))
                  }
                  className={inputClass("alunos")}
                >
                  {Array.from({ length: 10 }, (_, index) => index + 1).map(
                    (quantidade) => (
                      <option
                        key={quantidade}
                        value={quantidade}
                        className="bg-[#0f172a] text-slate-100"
                      >
                        {quantidade}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* Campos dinâmicos */}
              <div className="grid gap-5 sm:grid-cols-2">
                {alunos.map((aluno, index) => (
                  <div key={index}>
                    <label
                      htmlFor={`aluno-${index}`}
                      className="mb-2 block text-sm font-semibold text-slate-200"
                    >
                      Aluno {index + 1}
                    </label>

                    <input
                      id={`aluno-${index}`}
                      type="text"
                      value={aluno.nome}
                      onChange={(event) =>
                        alterarNomeAluno(index, event.target.value)
                      }
                      placeholder="Nome completo do aluno"
                      className={inputClass(`aluno-${index}`)}
                      required
                    />

                    {erros[`aluno-${index}`] && (
                      <p className="mt-2 text-sm text-red-400">
                        {erros[`aluno-${index}`]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professores */}
          <div className="border border-slate-700 bg-[#1e293b] p-6 sm:p-8">
            <div className="mb-7">
              <h2 className="text-xl font-bold text-white">
                Professores
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Informe os professores envolvidos no projeto.
              </p>
            </div>

            <div className="space-y-6">
              {/* Professor responsável */}
              <div>
                <label
                  htmlFor="professor"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Professor responsável
                </label>

                <input
                  id="professor"
                  type="text"
                  value={professor}
                  onChange={(event) => setProfessor(event.target.value)}
                  placeholder="Nome do professor responsável"
                  className={inputClass("professor")}
                  required
                />

                {erros.professor && (
                  <p className="mt-2 text-sm text-red-400">
                    {erros.professor}
                  </p>
                )}
              </div>

              {/* Orientador */}
              <div className="border-t border-slate-700 pt-6">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold text-slate-200">
                      O projeto terá professor orientador?
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Ative esta opção caso exista um professor orientador
                      diferente do responsável.
                    </p>
                  </div>

                  {/* Switch acessível */}
                  <button
                    type="button"
                    role="switch"
                    aria-checked={temOrientador}
                    aria-label="Projeto terá professor orientador"
                    onClick={() => alternarOrientador(!temOrientador)}
                    className={`relative h-7 w-12 shrink-0 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#275fcf] focus:ring-offset-2 focus:ring-offset-[#1e293b] ${
                      temOrientador ? "bg-[#275fcf]" : "bg-slate-600"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-transform ${
                        temOrientador
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Campo condicional */}
                {temOrientador && (
                  <div className="mt-5">
                    <label
                      htmlFor="orientador"
                      className="mb-2 block text-sm font-semibold text-slate-200"
                    >
                      Nome do professor orientador
                    </label>

                    <input
                      id="orientador"
                      type="text"
                      value={orientador}
                      onChange={(event) => setOrientador(event.target.value)}
                      placeholder="Nome do professor orientador"
                      className={inputClass("orientador")}
                      required={temOrientador}
                    />

                    {erros.orientador && (
                      <p className="mt-2 text-sm text-red-400">
                        {erros.orientador}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Feedback */}
          {sucesso && (
            <div
              role="status"
              className="border border-green-800 bg-green-950/40 px-4 py-3 text-sm text-green-400"
            >
              Projeto cadastrado com sucesso no frontend. Os dados foram
              enviados para o console do navegador.
            </div>
          )}

          {/* Botão */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full rounded-md bg-[#275fcf] px-6 py-3.5 font-semibold text-white transition hover:bg-[#1f51b5] focus:outline-none focus:ring-2 focus:ring-[#275fcf] focus:ring-offset-2 focus:ring-offset-[#0f172a] sm:w-auto"
            >
              Cadastrar projeto
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}


