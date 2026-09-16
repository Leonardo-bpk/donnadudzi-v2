import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const areas = [
  {
    nome: 'Química',
    imagem: '/Quimica.png',
    detalhe:
      'A Química é a ciência que estuda a composição, a estrutura, as propriedades da matéria e as transformações que ela sofre. É essencial em inúmeras áreas, desde a produção de medicamentos até o desenvolvimento de novos materiais.',
  },
  {
    nome: 'Robótica',
    imagem: '/Robotica.png',
    detalhe:
      'A Robótica envolve o projeto, a construção, a operação e o uso de robôs. É uma área interdisciplinar que une engenharia, ciência da computação e matemática, impulsionando a automação e a inovação tecnológica.',
  },
  {
    nome: 'Teatro',
    imagem: '/Teatro.png',
    detalhe:
      'O Teatro é uma forma de arte cênica que combina atuação, fala, gesto, música, dança e espetáculo para contar histórias. Ele desenvolve a criatividade, a expressão corporal e a comunicação.',
  },
  {
    nome: 'Inglês',
    imagem: '/Ingles.png',
    detalhe:
      'O Inglês é a língua universal para negócios, ciência e internet. Dominá-lo abre portas para oportunidades globais, permitindo a comunicação e o acesso a um vasto conhecimento e cultura.',
  },
]

function AreasAtuacao() {
  const [selecionada, setSelecionada] = useState<number | null>(null)

  const areaSelecionada =
    selecionada !== null ? areas[selecionada] : null

  return (
    <section className="w-full bg-white px-5 py-20 md:px-10 md:py-28">

      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-14 text-center text-4xl font-bold text-[#1f456e] md:text-5xl"
      >
        Áreas de Atuação
      </motion.h1>

      <div className="mx-auto max-w-[1200px]">

        {/* Áreas */}
        <div
          className={`
            relative flex min-h-[260px] items-center
            transition-all duration-500
            ${
              selecionada !== null
                ? 'justify-start'
                : 'justify-center'
            }
          `}
        >

          <AnimatePresence mode="popLayout">

            {/* Imagens */}
            {selecionada === null ? (

              <motion.div
                key="lista"
                className="flex w-full items-center justify-center gap-8 md:gap-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >

                {areas.map((area, index) => (
                  <motion.button
                    key={area.nome}
                    onClick={() => setSelecionada(index)}
                    className="group flex flex-col items-center outline-none"
                    whileHover={{ y: -8 }}
                    whileTap={{ scale: 0.95 }}
                  >

                    <motion.img
                      src={area.imagem}
                      alt={area.nome}
                      className="h-32 w-32 object-contain md:h-40 md:w-40"
                    />

                    <span className="mt-4 text-lg font-semibold text-[#1f456e] transition-colors duration-300 group-hover:text-[#ff8000]">
                      {area.nome}
                    </span>

                  </motion.button>
                ))}

              </motion.div>

            ) : (

              /* Área selecionada */
              <motion.div
                key="selecionada"
                className="flex w-full items-center gap-8 md:gap-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.45,
                  ease: 'easeOut',
                }}
              >

                {/* Imagem */}
                <motion.div
                  layoutId={`area-${selecionada}`}
                  className="flex shrink-0 flex-col items-center"
                  initial={{ x: 80, scale: 1.15 }}
                  animate={{ x: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeInOut',
                  }}
                >

                  <img
                    src={areaSelecionada?.imagem}
                    alt={areaSelecionada?.nome}
                    className="h-32 w-32 object-contain md:h-44 md:w-44"
                  />

                  <span className="mt-3 font-semibold text-[#ff8000]">
                    {areaSelecionada?.nome}
                  </span>

                </motion.div>

                {/* Texto */}
                <motion.div
                  className="min-w-0 flex-1 pr-10"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                  }}
                >

                  <h2 className="mb-4 text-3xl font-bold text-[#1f456e] md:text-4xl">
                    {areaSelecionada?.nome}
                  </h2>

                  <p className="max-w-[650px] text-base leading-7 text-[#4a4a4a] md:text-lg">
                    {areaSelecionada?.detalhe}
                  </p>

                </motion.div>

                {/* X */}
                <motion.button
                  onClick={() => setSelecionada(null)}
                  className="absolute right-0 top-1 flex h-10 w-10 items-center justify-center rounded-full text-3xl font-light text-[#1f456e] transition-colors duration-300 hover:bg-[#f0f2f5] hover:text-[#ff8000]"
                  aria-label="Fechar"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </div>

    </section>
  )
}

export default AreasAtuacao