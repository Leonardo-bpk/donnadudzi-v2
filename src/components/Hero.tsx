import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-[85vh] w-full items-center bg-[#275fcf] px-6 py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#ff9a3c]">
            Biopark Educação
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Ideias que saem da{" "}
            <span className="text-[#ff8a1f]">
              sala de aula
            </span>{" "}
            e ganham vida.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
            Um espaço para conhecer projetos, ideias e soluções desenvolvidos
            por alunos e professores do Biopark Educação.
          </p>
        </motion.div>

     

      </div>
    </section>
  );
}