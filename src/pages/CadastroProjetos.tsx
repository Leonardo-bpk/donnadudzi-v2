
import { useState } from "react";
import type { FormEvent } from "react";
import Navbar from "../components/Navbar";

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

  /*
   * ============================================================
   * ESTILOS
   * ============================================================
   */

  const inputClass = (campo: string) => `
    w-full
    border
    ${
      erros[campo]
        ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
        : "border-slate-200 focus:border-[#275FCF] focus:ring-[#275FCF]/10"
    }
    bg-white
    px-4
    py-3
    text-sm
    text-slate-800
    outline-none
    transition-all
    duration-150
    placeholder:text-slate-400
    hover:border-slate-300
    focus:ring-4
  `;

  const blueInputClass = (campo: string) => `
    w-full
    border
    ${
      erros[campo]
        ? "border-red-300 focus:border-red-400 focus:ring-red-400/20"
        : "border-white/25 focus:border-white/70 focus:ring-white/10"
    }
    bg-white
    px-4
    py-3
    text-sm
    text-slate-800
    outline-none
    transition-all
    duration-150
    placeholder:text-slate-400
    hover:border-white/50
    focus:ring-4
  `;

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <Navbar />


<header className="bg-[#275FCF]">
  <div className="mx-auto max-w-7xl px-5 pb-14 pt-14 sm:px-8 sm:pb-16 sm:pt-16 lg:px-10 lg:pb-20 lg:pt-20">
    <div className="max-w-4xl">
      <div className="mb-6 flex items-center gap-3">
        <span className="h-2 w-2 bg-[#FF6200]" />

        <span className="text-sm font-semibold tracking-wide text-white/80">
          Projetos Donaduzzi
        </span>
      </div>

      <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Cadastre um novo{" "}
        <span className="text-white">projeto</span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
        Registre o projeto, apresente suas ideias e informe os
        estudantes e professores envolvidos no desenvolvimento.
      </p>
    </div>
  </div>

  <div className="h-1 bg-[#FF6200]" />
</header>

      {/* =========================================================
          CONTEÚDO
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <form onSubmit={handleSubmit}>

            {/* =====================================================
                01 — INFORMAÇÕES
                BRANCO
            ====================================================== */}
            <section className="bg-white px-0 py-14 sm:py-16 lg:py-20">

              <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">

                <div>
                  <span className="mb-3 block text-sm font-semibold text-[#275FCF]">
                    01
                  </span>

                  <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                    Informações do projeto
                  </h2>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
                    Apresente as principais informações que serão
                    utilizadas na página do projeto.
                  </p>
                </div>

                <div className="space-y-8">

                  {/* Nome */}
                  <div>
                    <label
                      htmlFor="titulo"
                      className="mb-2 block text-sm font-semibold text-slate-800"
                    >
                      Nome do projeto
                    </label>

                    <input
                      id="titulo"
                      type="text"
                      value={titulo}
                      onChange={(event) =>
                        setTitulo(event.target.value)
                      }
                      placeholder="Ex.: Robótica Sustentável"
                      className={inputClass("titulo")}
                      required
                    />

                    {erros.titulo && (
                      <p className="mt-2 text-xs text-red-500">
                        {erros.titulo}
                      </p>
                    )}
                  </div>

                  {/* Descrições */}
                  <div className="grid gap-8 lg:grid-cols-2">

                    {/* Descrição curta */}
                    <div>
                      <div className="mb-2 flex items-center justify-between gap-4">

                        <label
                          htmlFor="descricaoCurta"
                          className="block text-sm font-semibold text-slate-800"
                        >
                          Descrição curta
                        </label>

                        <span
                          className={`shrink-0 text-xs ${
                            descricaoCurta.length >= 220
                              ? "font-semibold text-[#FF6200]"
                              : "text-slate-400"
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
                        rows={6}
                        maxLength={250}
                        className={`${inputClass(
                          "descricaoCurta"
                        )} resize-none leading-6`}
                        required
                      />

                      <p className="mt-2 text-xs text-slate-400">
                        Será exibida no feed de projetos.
                      </p>

                      {erros.descricaoCurta && (
                        <p className="mt-2 text-xs text-red-500">
                          {erros.descricaoCurta}
                        </p>
                      )}
                    </div>

                    {/* Descrição completa */}
                    <div>
                      <label
                        htmlFor="descricaoLonga"
                        className="mb-2 block text-sm font-semibold text-slate-800"
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
                        rows={6}
                        className={`${inputClass(
                          "descricaoLonga"
                        )} resize-y leading-6`}
                        required
                      />

                      <p className="mt-2 text-xs text-slate-400">
                        Será exibida na página individual do projeto.
                      </p>

                      {erros.descricaoLonga && (
                        <p className="mt-2 text-xs text-red-500">
                          {erros.descricaoLonga}
                        </p>
                      )}
                    </div>

                  </div>

                </div>

              </div>
            </section>

            {/* =====================================================
                02 — PARTICIPANTES
                AZUL
            ====================================================== */}
            <section className="bg-[#275FCF] px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">

              <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">

                <div>
                  <span className="mb-3 block text-sm font-semibold text-white/60">
                    02
                  </span>

                  <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    Participantes
                  </h2>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
                    Informe os estudantes que fazem parte da equipe
                    responsável pelo projeto.
                  </p>
                </div>

                <div>

                  {/* Quantidade */}
                  <div className="mb-8 max-w-[180px]">

                    <label
                      htmlFor="quantidadeAlunos"
                      className="mb-2 block text-sm font-semibold text-white"
                    >
                      Quantidade de alunos
                    </label>

                    <select
                      id="quantidadeAlunos"
                      value={quantidadeAlunos}
                      onChange={(event) =>
                        alterarQuantidadeAlunos(
                          Number(event.target.value)
                        )
                      }
                      className="
                        w-full
                        border
                        border-white/25
                        bg-white
                        px-4
                        py-3
                        text-sm
                        text-slate-800
                        outline-none
                        transition
                        hover:border-white/50
                        focus:border-white
                        focus:ring-4
                        focus:ring-white/10
                      "
                    >
                      {Array.from(
                        { length: 10 },
                        (_, index) => index + 1
                      ).map((quantidade) => (
                        <option
                          key={quantidade}
                          value={quantidade}
                        >
                          {quantidade}
                        </option>
                      ))}
                    </select>

                  </div>

                  {/* Alunos */}
                  <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">

                    {alunos.map((aluno, index) => (
                      <div key={index}>

                        <label
                          htmlFor={`aluno-${index}`}
                          className="mb-2 block text-sm font-semibold text-white"
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
                          className={blueInputClass(
                            `aluno-${index}`
                          )}
                          required
                        />

                        {erros[`aluno-${index}`] && (
                          <p className="mt-2 text-xs text-red-200">
                            {erros[`aluno-${index}`]}
                          </p>
                        )}

                      </div>
                    ))}

                  </div>

                </div>

              </div>
            </section>

            {/* =====================================================
                03 — PROFESSORES
                AZUL
            ====================================================== */}
            <section className="bg-[#275FCF] px-6 pb-16 pt-0 sm:px-10 sm:pb-20 lg:px-14">

              <div className="border-t border-white/15 pt-14 sm:pt-16 lg:pt-20">

                <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">

                  <div>
                    <span className="mb-3 block text-sm font-semibold text-white/60">
                      03
                    </span>

                    <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                      Professores
                    </h2>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
                      Defina os professores responsáveis pelo
                      acompanhamento do projeto.
                    </p>
                  </div>

                  <div className="space-y-10">

                    {/* Professor responsável */}
                    <div>
                      <label
                        htmlFor="professor"
                        className="mb-2 block text-sm font-semibold text-white"
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
                        className={blueInputClass("professor")}
                        required
                      />

                      {erros.professor && (
                        <p className="mt-2 text-xs text-red-200">
                          {erros.professor}
                        </p>
                      )}
                    </div>

                    {/* Orientador */}
                    <div className="border-t border-white/15 pt-8">

                      <div className="flex items-start justify-between gap-8">

                        <div>
                          <p className="text-sm font-semibold text-white">
                            Professor orientador
                          </p>

                          <p className="mt-1.5 max-w-xl text-sm leading-6 text-white/65">
                            Ative esta opção caso exista um professor
                            orientador diferente do responsável.
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
                            relative
                            mt-1
                            h-6
                            w-11
                            shrink-0
                            border
                            transition-colors
                            focus:outline-none
                            focus:ring-4
                            focus:ring-white/15
                            ${
                              temOrientador
                                ? "border-[#FF6200] bg-[#FF6200]"
                                : "border-white/30 bg-white/10"
                            }
                          `}
                        >
                          <span
                            className={`
                              absolute
                              top-0.5
                              h-5
                              w-5
                              bg-white
                              shadow-sm
                              transition-transform
                              duration-150
                              ${
                                temOrientador
                                  ? "translate-x-[21px]"
                                  : "translate-x-0.5"
                              }
                            `}
                          />
                        </button>

                      </div>

                      {temOrientador && (
                        <div className="mt-6">

                          <label
                            htmlFor="orientador"
                            className="mb-2 block text-sm font-semibold text-white"
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
                            className={blueInputClass("orientador")}
                            required={temOrientador}
                          />

                          {erros.orientador && (
                            <p className="mt-2 text-xs text-red-200">
                              {erros.orientador}
                            </p>
                          )}

                        </div>
                      )}

                    </div>

                  </div>

                </div>

              </div>
            </section>

            {/* =====================================================
                SUCESSO — BRANCO
            ====================================================== */}
            {sucesso && (
              <section className="bg-white py-10">

                <div className="border-l-4 border-[#275FCF] bg-slate-50 px-6 py-5">

                  <p className="text-sm font-bold text-slate-900">
                    Projeto cadastrado com sucesso.
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Os dados foram registrados no console do navegador.
                  </p>

                </div>

              </section>
            )}

            {/* =====================================================
                AÇÕES — BRANCO
            ====================================================== */}
            <section className="bg-white py-10">

              <div className="flex flex-col gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">

                <p className="max-w-lg text-xs leading-5 text-slate-400">
                  Revise as informações antes de cadastrar o projeto.
                  Todos os campos obrigatórios precisam estar
                  preenchidos.
                </p>

                <div className="flex flex-col-reverse gap-3 sm:flex-row">

                  <button
                    type="button"
                    className="
                      border
                      border-slate-200
                      px-6
                      py-3
                      text-sm
                      font-semibold
                      text-slate-600
                      transition-colors
                      hover:border-slate-300
                      hover:bg-slate-50
                      hover:text-slate-900
                      focus:outline-none
                      focus:ring-4
                      focus:ring-slate-200
                    "
                  >
                    Cancelar
                  </button>

                  <button
                    type="submit"
                    className="
                      bg-[#275FCF]
                      px-7
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition-colors
                      hover:bg-[#1F55C0]
                      active:bg-[#1949A8]
                      focus:outline-none
                      focus:ring-4
                      focus:ring-[#275FCF]/20
                    "
                  >
                    Cadastrar projeto
                  </button>

                </div>

              </div>

            </section>

          </form>
        </div>
      </section>
    </main>
  );
}

