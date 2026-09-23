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
    `
      w-full
      border
      border-white/[0.10]
      bg-[#1B3D6D]
      px-3.5
      py-3
      text-sm
      text-white
      outline-none
      transition-all
      duration-150
      placeholder:text-blue-100/45
      hover:border-white/[0.18]
      focus:border-[#FF7A00]
      focus:ring-2
      focus:ring-[#FF7A00]/15
      ${
        erros[campo]
          ? "border-red-400/70 focus:border-red-400 focus:ring-red-400/10"
          : ""
      }
    `;

  return (
    <main className="min-h-screen bg-[#16345F] text-slate-100">
      {/* =====================================================
          CABEÇALHO
      ====================================================== */}
      <header>
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 sm:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2 w-2 bg-[#FF7A00]" />
              <span className="h-px w-8 bg-[#FF7A00]" />

              <span className="text-xs font-medium text-blue-100/60">
                Novo projeto
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Cadastrar{" "}
              <span className="text-[#FF7A00]">projeto</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100/65">
              Apresente um novo projeto da comunidade escolar e registre
              quem está participando dele.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <form onSubmit={handleSubmit} className="space-y-14">

          {/* =====================================================
              INFORMAÇÕES
          ====================================================== */}
          <section>
            <div className="mb-7">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-6 w-1 bg-[#FF7A00]" />

                <h2 className="text-xl font-semibold text-[#FF7A00]">
                  Informações do projeto
                </h2>
              </div>

              <p className="max-w-2xl text-sm leading-6 text-blue-100/65">
                Informe os dados que serão apresentados na página do
                projeto.
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-7 lg:grid-cols-2">

              {/* Nome */}
              <div className="lg:col-span-2">
                <label
                  htmlFor="titulo"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Nome do projeto
                </label>

                <input
                  id="titulo"
                  type="text"
                  value={titulo}
                  onChange={(event) => setTitulo(event.target.value)}
                  placeholder="Ex.: Robótica Sustentável"
                  className={inputClass("titulo")}
                  required
                />

                {erros.titulo && (
                  <p className="mt-2 text-xs text-red-300">
                    {erros.titulo}
                  </p>
                )}
              </div>

              {/* Descrição curta */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="descricaoCurta"
                    className="block text-sm font-medium text-white"
                  >
                    Descrição curta
                  </label>

                  <span
                    className={`text-xs ${
                      descricaoCurta.length >= 220
                        ? "text-[#FF7A00]"
                        : "text-blue-100/50"
                    }`}
                  >
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
                  placeholder="Resuma o projeto em poucas palavras."
                  rows={5}
                  maxLength={250}
                  className={`${inputClass(
                    "descricaoCurta"
                  )} resize-none leading-6`}
                  required
                />

                <p className="mt-2 text-xs text-blue-100/50">
                  Será exibida no feed.
                </p>

                {erros.descricaoCurta && (
                  <p className="mt-2 text-xs text-red-300">
                    {erros.descricaoCurta}
                  </p>
                )}
              </div>

              {/* Descrição completa */}
              <div>
                <label
                  htmlFor="descricaoLonga"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Descrição completa
                </label>

                <textarea
                  id="descricaoLonga"
                  value={descricaoLonga}
                  onChange={(event) =>
                    setDescricaoLonga(event.target.value)
                  }
                  placeholder="Explique os objetivos, desenvolvimento e resultados."
                  rows={5}
                  className={`${inputClass(
                    "descricaoLonga"
                  )} resize-y leading-6`}
                  required
                />

                <p className="mt-2 text-xs text-blue-100/50">
                  Será exibida na página do projeto.
                </p>

                {erros.descricaoLonga && (
                  <p className="mt-2 text-xs text-red-300">
                    {erros.descricaoLonga}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* =====================================================
              EQUIPE
          ====================================================== */}
          <section>
            <div className="mb-7">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-6 w-1 bg-[#FF7A00]" />

                <h2 className="text-xl font-semibold text-[#FF7A00]">
                  Equipe
                </h2>
              </div>

              <p className="max-w-2xl text-sm leading-6 text-blue-100/65">
                Informe os alunos e professores que participam ou
                acompanham o projeto.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">

              {/* =====================================================
                  ALUNOS
              ====================================================== */}
              <div>
                <div className="mb-6">
                  <h3 className="text-base font-semibold text-white">
                    Alunos participantes
                  </h3>

                  <p className="mt-1.5 text-sm leading-5 text-blue-100/60">
                    Informe os alunos que fazem parte da equipe.
                  </p>
                </div>

                <div className="mb-6 max-w-[180px]">
                  <label
                    htmlFor="quantidadeAlunos"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Quantidade
                  </label>

                  <select
                    id="quantidadeAlunos"
                    value={quantidadeAlunos}
                    onChange={(event) =>
                      alterarQuantidadeAlunos(
                        Number(event.target.value)
                      )
                    }
                    className={`${inputClass(
                      "alunos"
                    )} cursor-pointer appearance-auto`}
                  >
                    {Array.from(
                      { length: 10 },
                      (_, index) => index + 1
                    ).map((quantidade) => (
                      <option
                        key={quantidade}
                        value={quantidade}
                        className="bg-[#1B3D6D] text-white"
                      >
                        {quantidade}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-5">
                  {alunos.map((aluno, index) => (
                    <div key={index}>
                      <label
                        htmlFor={`aluno-${index}`}
                        className="mb-2 block text-sm font-medium text-white"
                      >
                        Aluno {index + 1}
                      </label>

                      <input
                        id={`aluno-${index}`}
                        type="text"
                        value={aluno.nome}
                        onChange={(event) =>
                          alterarNomeAluno(
                            index,
                            event.target.value
                          )
                        }
                        placeholder="Nome completo"
                        className={inputClass(`aluno-${index}`)}
                        required
                      />

                      {erros[`aluno-${index}`] && (
                        <p className="mt-2 text-xs text-red-300">
                          {erros[`aluno-${index}`]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* =====================================================
                  PROFESSORES
              ====================================================== */}
              <div>
                <div className="mb-6">
                  <h3 className="text-base font-semibold text-white">
                    Professores
                  </h3>

                  <p className="mt-1.5 text-sm leading-5 text-blue-100/60">
                    Defina quem acompanha e orienta o projeto.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="professor"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Professor responsável
                  </label>

                  <input
                    id="professor"
                    type="text"
                    value={professor}
                    onChange={(event) =>
                      setProfessor(event.target.value)
                    }
                    placeholder="Nome do professor"
                    className={inputClass("professor")}
                    required
                  />

                  {erros.professor && (
                    <p className="mt-2 text-xs text-red-300">
                      {erros.professor}
                    </p>
                  )}
                </div>

                {/* Orientador */}
                <div className="mt-9 pt-7">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-sm font-medium text-white">
                        Professor orientador
                      </p>

                      <p className="mt-1.5 max-w-md text-xs leading-5 text-blue-100/55">
                        Ative se houver um professor orientador
                        diferente do responsável.
                      </p>
                    </div>

                    <button
                      type="button"
                      role="switch"
                      aria-checked={temOrientador}
                      aria-label="Projeto terá professor orientador"
                      onClick={() =>
                        alternarOrientador(!temOrientador)
                      }
                      className={`
                        relative mt-0.5 h-5 w-9 shrink-0
                        border
                        transition-colors
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#FF7A00]/30
                        ${
                          temOrientador
                            ? "border-[#FF7A00] bg-[#FF7A00]"
                            : "border-white/[0.15] bg-[#1B3D6D]"
                        }
                      `}
                    >
                      <span
                        className={`
                          absolute top-0.5 h-3.5 w-3.5 bg-white
                          transition-transform duration-150
                          ${
                            temOrientador
                              ? "translate-x-[17px]"
                              : "translate-x-0.5"
                          }
                        `}
                      />
                    </button>
                  </div>

                  {temOrientador && (
                    <div className="mt-5">
                      <label
                        htmlFor="orientador"
                        className="mb-2 block text-sm font-medium text-white"
                      >
                        Nome do professor orientador
                      </label>

                      <input
                        id="orientador"
                        type="text"
                        value={orientador}
                        onChange={(event) =>
                          setOrientador(event.target.value)
                        }
                        placeholder="Nome do professor"
                        className={inputClass("orientador")}
                        required={temOrientador}
                      />

                      {erros.orientador && (
                        <p className="mt-2 text-xs text-red-300">
                          {erros.orientador}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              SUCESSO
          ====================================================== */}
          {sucesso && (
            <div className="border-l-2 border-[#FF7A00] bg-[#1B3D6D] px-5 py-4">
              <p className="text-sm font-semibold text-white">
                Projeto cadastrado com sucesso.
              </p>

              <p className="mt-1 text-xs text-blue-100/60">
                Os dados foram registrados no console do navegador.
              </p>
            </div>
          )}

          {/* =====================================================
              AÇÕES
          ====================================================== */}
          <div className="flex flex-col-reverse items-stretch justify-end gap-3 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center">
            <button
              type="button"
              className="
                px-4 py-2.5
                text-sm font-medium
                text-blue-100/65
                transition-colors
                hover:text-white
                focus:outline-none
              "
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="
                bg-[#FF7A00]
                px-6 py-3
                text-sm font-semibold
                text-white
                transition-colors
                hover:bg-[#FF8B1A]
                active:bg-[#E66D00]
                focus:outline-none
                focus:ring-2
                focus:ring-[#FF7A00]/30
                focus:ring-offset-2
                focus:ring-offset-[#16345F]
              "
            >
              Cadastrar projeto
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}