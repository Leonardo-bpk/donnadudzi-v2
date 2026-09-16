import { useState } from 'react'

const perguntas = [
  {
    pergunta: 'Até que idade pode participar?',
    resposta:
      'A Academia Donaduzzi do Biopark Educação é destinada a crianças e adolescentes com idades entre 03 à 17 anos.',
  },
  {
    pergunta: 'Como funciona o transporte?',
    resposta:
      'Disponibilizamos transporte exclusivo para os participantes da Academia Donaduzzi. Os horários de funcionamento são das 8h às 11h30min e das 14h às 17h30min.',
  },
  {
    pergunta: 'O que exatamente é a Academia Donaduzzi?',
    resposta:
      'A Academia do Biopark Educação é um projeto criado em 2018 com o propósito de integrar o conhecimento científico com momentos de diversão. Ele proporciona aulas que abrangem áreas como Física, Química, Matemática, Biologia, Tecnologia e Robótica, promovendo a cooperação, criatividade, inovação e pesquisa.',
  },
  {
    pergunta: 'Meu filho precisa ter conhecimentos prévios?',
    resposta:
      'Não, não é necessário que seu filho tenha conhecimentos prévios para participar da Academia Donaduzzi. Ele é aberto a todas as crianças e adolescentes interessados, sem a necessidade de processo seletivo.',
  },
  {
    pergunta: 'Há algum processo seletivo para participar da Academia Donaduzzi?',
    resposta:
      'Não, a Academia Donaduzzi do Biopark Educação é destinada a todas as crianças e adolescentes entre 03 e 17 anos e não requer um processo seletivo para participação.',
  },
]

function Faq() {
  const [aberta, setAberta] = useState<number | null>(null)

  const alternarPergunta = (index: number) => {
    setAberta(aberta === index ? null : index)
  }

  return (
   <section className="w-full bg-white px-5 py-20 md:px-10 md:py-28">

      <div className="mx-auto max-w-[900px]">

        <h2
          id="faq-titulo"
          className="mb-12 text-center text-4xl font-bold text-[#1f456e] md:text-5xl"
        >
          Perguntas Frequentes
        </h2>

        <div className="flex flex-col gap-4">

          {perguntas.map((item, index) => {
            const isOpen = aberta === index

            return (
              <div
                key={item.pergunta}
                className="overflow-hidden rounded-xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
              >

                {/* Pergunta */}
                <button
                  onClick={() => alternarPergunta(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-[#1f456e] transition-colors duration-300 hover:text-[#ff8000]"
                  aria-expanded={isOpen}
                >
                  <span>{item.pergunta}</span>

                  <span
                    className={`shrink-0 text-xl transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Resposta */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-7 text-[#4a4a4a]">
                      {item.resposta}
                    </p>
                  </div>
                </div>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default Faq