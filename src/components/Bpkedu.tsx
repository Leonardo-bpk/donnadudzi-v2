
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

function Bpkedu() {
  const [titleNumber, setTitleNumber] = useState(0);

  const titles = useMemo(
    () => [
      "inovador",
      "tecnológico",
      "criativo",
      "inspirador",
      "incentivado",
    ],
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTitleNumber((current) =>
        current === titles.length - 1 ? 0 : current + 1
      );
    }, 2000);

    return () => clearTimeout(timeout);
  }, [titleNumber, titles]);

  return (
    <section className="relative mt-10 w-full overflow-hidden bg-white">

      <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-6 py-20 sm:px-8 lg:min-h-[650px] lg:px-12 lg:py-24">

        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Conteúdo principal */}
          <div className="max-w-3xl">

            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#FF7200]" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#275fcf]">
                Biopark Educação
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#172B4D] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              Onde o conhecimento é
              <br />

              {/* PALAVRAS GIRANDO */}
              <span className="relative mt-2 inline-flex h-[1.15em] min-w-full overflow-hidden text-[#FF7200] lg:min-w-[600px]">
                {titles.map((title, index) => (
                  <motion.span
                    key={title}
                    className="absolute left-0 font-bold"
                    initial={{
                      y: "110%",
                      opacity: 0,
                    }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y:
                              titleNumber > index
                                ? "-110%"
                                : "110%",
                            opacity: 0,
                          }
                    }
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {title}.
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Texto maior */}
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#52637A] sm:text-lg lg:text-xl">
              No Biopark Educação, conhecimento, tecnologia e criatividade se
              encontram para transformar ideias em projetos e preparar alunos
              para construir o futuro.
            </p>

          </div>

          {/* Elemento visual */}
          <div className="hidden lg:flex lg:justify-end">

            <div className="relative h-[330px] w-[330px]">

              {/* Círculo externo */}
              <motion.div
                className="absolute inset-8 rounded-full border border-[#275fcf]/15"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Círculo interno */}
              <motion.div
                className="absolute inset-16 rounded-full border border-[#FF7200]/30"
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Centro */}
              <div className="absolute inset-[5.5rem] flex items-center justify-center rounded-full bg-[#275fcf]/5">
                <div className="text-center">

                  <BookOpen className="mx-auto mb-4 h-9 w-9 text-[#FF7200]" />

                  <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#275fcf]">
                    Educação
                  </span>

                  <span className="mt-1 block text-2xl font-semibold text-[#172B4D]">
                    que transforma
                  </span>

                </div>
              </div>

              {/* Pontos decorativos */}
              <motion.div
                className="absolute left-5 top-24 h-3 w-3 rounded-full bg-[#FF7200]"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="absolute right-7 top-16 h-2 w-2 rounded-full bg-[#275fcf]/50" />

              <div className="absolute bottom-16 left-12 h-2 w-2 rounded-full bg-[#275fcf]/30" />

              <motion.div
                className="absolute bottom-10 right-16 h-3 w-3 rounded-full bg-[#FF7200]/80"
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Bpkedu;
