import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

import logo from "../assets/logo.png";

type ProvedorSocial = "google" | "microsoft" | "apple";

function GoogleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
    >
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.46c-.28 1.5-1.12 2.77-2.39 3.63v3.02h3.87c2.26-2.08 3.55-5.14 3.55-8.68z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.87-3.02c-1.08.72-2.46 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.11C3.24 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.26c-.24-.72-.38-1.49-.38-2.26s.14-1.54.38-2.26V6.63H1.27C.46 8.24 0 10.06 0 12s.46 3.76 1.27 5.37l4-3.11z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.76 0 3.34.6 4.58 1.79l3.43-3.43C17.95 1.19 15.24 0 12 0 7.31 0 3.24 2.7 1.27 6.63l4 3.11C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
    >
      <path fill="#F25022" d="M1 1h10.5v10.5H1z" />
      <path fill="#7FBA00" d="M12.5 1H23v10.5H12.5z" />
      <path fill="#00A4EF" d="M1 12.5h10.5V23H1z" />
      <path fill="#FFB900" d="M12.5 12.5H23V23H12.5z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 fill-current"
    >
      <path d="M16.37 12.63c-.03-2.27 1.85-3.36 1.93-3.41-1.06-1.54-2.7-1.75-3.27-1.77-1.39-.14-2.72.82-3.43.82-.71 0-1.8-.8-2.97-.78-1.53.02-2.94.89-3.73 2.26-1.59 2.76-.41 6.85 1.14 9.09.76 1.1 1.66 2.33 2.84 2.29 1.14-.05 1.57-.74 2.95-.74 1.37 0 1.76.74 2.97.71 1.23-.02 2-1.12 2.75-2.23.87-1.27 1.23-2.5 1.25-2.56-.03-.01-2.39-.92-2.43-3.68zM14.4 6.4c.63-.76 1.05-1.82.93-2.88-.9.04-1.99.6-2.63 1.36-.58.67-1.08 1.75-.95 2.78 1 .08 2.03-.51 2.65-1.26z" />
    </svg>
  );
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erros, setErros] = useState<Record<string, string>>({});

  const formularioVazio = !email.trim() || !senha.trim();

  function validarFormulario() {
    const novosErros: Record<string, string> = {};
    const emailTrim = email.trim();

    if (!emailTrim) {
      novosErros.email = "Informe o seu e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim)) {
      novosErros.email = "Informe um e-mail válido.";
    }

    if (!senha.trim()) {
      novosErros.senha = "Informe a sua senha.";
    } else if (senha.length < 6) {
      novosErros.senha = "A senha deve ter pelo menos 6 caracteres.";
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    // TODO: integrar autenticação quando o backend estiver disponível
  }

  function handleSocialLogin(provedor: ProvedorSocial) {
    // TODO: implementar OAuth quando o backend estiver disponível
    void provedor;
  }

  const inputClass = (campo: string) =>
    `
      w-full rounded-lg border bg-white py-3 pl-11 pr-4 text-sm text-[#172B4D]
      outline-none transition-all duration-150
      placeholder:text-[#8A97A8]
      hover:border-[#275fcf]/35
      focus:border-[#275fcf] focus:ring-2 focus:ring-[#275fcf]/20
      ${
        erros[campo]
          ? "border-red-400 focus:border-red-400 focus:ring-red-400/15"
          : "border-slate-200"
      }
    `;

  const botaoSocialClass =
    "flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#172B4D] transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#275fcf]/30 active:bg-slate-100";

  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white lg:flex-row">
      <header className="flex items-center bg-[#275fcf] px-6 py-3 lg:hidden">
        <Link to="/" aria-label="Página inicial">
          <img
            src={logo}
            alt="Academia Donaduzzi"
            className="h-10 w-auto object-contain"
          />
        </Link>
      </header>

      {/* Lado visual */}
      <motion.aside
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative hidden w-[45%] shrink-0 overflow-hidden bg-[#275fcf] px-10 py-12 text-white lg:flex lg:flex-col lg:justify-between lg:px-14"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-white/5"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-28 right-16 h-3 w-3 rounded-full bg-[#ff8000]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-28 top-40 h-2 w-2 rounded-full bg-white/50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-20 right-10 h-16 w-16 rotate-45 border border-[#ff8000]/40"
        />

        <div>
          <Link to="/" className="inline-flex items-center" aria-label="Página inicial">
            <img
              src={logo}
              alt="Academia Donaduzzi"
              className="h-12 w-auto max-w-[220px] object-contain"
            />
          </Link>
        </div>

        <div className="relative z-10 max-w-md">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#ff8000]" />
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              Biopark Educação
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
            Aprenda. Crie. Inove.
          </h1>

          <p className="mt-5 max-w-sm text-base leading-7 text-white/80 lg:text-lg">
            Conecte-se à comunidade de inovação e aprendizagem.
          </p>
        </div>

        <p className="relative z-10 text-sm text-white/60">
          Academia Donaduzzi
        </p>
      </motion.aside>

      {/* Formulário */}
      <section className="flex min-w-0 w-full flex-1 flex-col bg-white">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex w-full max-w-[440px] flex-1 flex-col justify-center px-5 py-8 sm:px-8 sm:py-10"
        >

          <h2 className="text-3xl font-bold tracking-tight text-[#172B4D]">
            Bem-vindo de volta!
          </h2>
          <p className="mt-2 text-base text-[#52637A]">
            Entre na sua conta para continuar.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
            noValidate
          >
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#1f456e]"
              >
                E-mail
              </label>
              <div className="relative">
                <Mail
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A97A8]"
                />
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Digite seu e-mail"
                  aria-invalid={Boolean(erros.email)}
                  aria-describedby={erros.email ? "email-erro" : undefined}
                  className={inputClass("email")}
                />
              </div>
              {erros.email && (
                <p id="email-erro" className="mt-2 text-xs text-red-600">
                  {erros.email}
                </p>
              )}
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="senha"
                  className="block text-sm font-medium text-[#1f456e]"
                >
                  Senha
                </label>
                <a
                  href="#"
                  className="text-sm font-medium text-[#52637A] transition-colors hover:text-[#275fcf] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#275fcf]/30"
                >
                  Esqueceu sua senha?
                </a>
              </div>
              <div className="relative">
                <Lock
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A97A8]"
                />
                <input
                  id="senha"
                  type={mostrarSenha ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                  placeholder="Digite sua senha"
                  aria-invalid={Boolean(erros.senha)}
                  aria-describedby={erros.senha ? "senha-erro" : undefined}
                  className={`${inputClass("senha")} pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setMostrarSenha((atual) => !atual)}
                  aria-label={mostrarSenha ? "Esconder senha" : "Mostrar senha"}
                  aria-pressed={mostrarSenha}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-2 text-[#8A97A8] transition-colors hover:text-[#275fcf] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#275fcf]/30"
                >
                  {mostrarSenha ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {erros.senha && (
                <p id="senha-erro" className="mt-2 text-xs text-red-600">
                  {erros.senha}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={formularioVazio}
              className="
                w-full rounded-lg bg-[#275fcf] px-6 py-3
                text-sm font-bold text-white
                transition-all duration-200
                hover:bg-[#1d4fb0] hover:-translate-y-0.5
                active:translate-y-0 active:bg-[#1a4498]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#275fcf]/40 focus-visible:ring-offset-2
                disabled:pointer-events-none disabled:translate-y-0 disabled:bg-[#275fcf]/45 disabled:text-white/80
              "
            >
              Entrar
            </button>
          </form>

          <div className="my-7 flex items-center gap-3">
            <span className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#8A97A8]">
              ou continue com
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => handleSocialLogin("google")}
              className={botaoSocialClass}
            >
              <GoogleIcon />
              Continuar com Google
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin("microsoft")}
              className={botaoSocialClass}
            >
              <MicrosoftIcon />
              Continuar com Microsoft
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin("apple")}
              className={botaoSocialClass}
            >
              <AppleIcon />
              Continuar com Apple
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-[#52637A]">
            Ainda não possui uma conta?{" "}
            <a
              href="#"
              className="font-semibold text-[#275fcf] transition-colors hover:text-[#ff8000] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#275fcf]/30"
            >
              Criar conta
            </a>
          </p>
        </motion.div>

        <footer className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 px-6 py-5 text-xs text-[#8A97A8] sm:flex-row sm:px-10">
          <p>© 2026 Academia Donaduzzi</p>
          <nav className="flex items-center gap-4">
            <a
              href="#"
              className="transition-colors hover:text-[#275fcf] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#275fcf]/30"
            >
              Termos de uso
            </a>
            <a
              href="#"
              className="transition-colors hover:text-[#275fcf] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#275fcf]/30"
            >
              Privacidade
            </a>
          </nav>
        </footer>
      </section>
    </main>
  );
}
