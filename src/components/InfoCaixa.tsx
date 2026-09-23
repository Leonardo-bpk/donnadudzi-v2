function InfoCaixa() {
  return (
    <section
      id="infocaixa"
      className="w-full bg-white px-5 py-[70px] md:px-10 md:py-[100px]"
    >
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2">

        {/* Faculdade Donaduzzi */}
        <div className="flex min-h-[260px] flex-col justify-between rounded-xl bg-white p-[30px] shadow-[0_8px_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_25px_rgba(0,0,0,0.15)]">
          <div>
            <h2 className="mb-3 text-[1.8rem] font-bold text-[#1f456e]">
              Faculdade Donaduzzi
            </h2>

            <p className="text-base font-normal leading-[1.5] text-[#4a4a4a]">
              A faculdade Donaduzzi, parte do ecossistema Biopark,
              oferece soluções em Educação, Capacitação, Treinamento,
              Desenvolvimento de Pessoas e Consultoria. Com foco no
              desenvolvimento de profissionais.
            </p>
          </div>

          <a
            href="https://bioparkeducacao.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block self-start rounded-lg bg-[#ff6b00] px-[25px] py-3 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e05c00]"
          >
            Ver mais
          </a>
        </div>

        {/* Bolsa de estudos */}
        <div className="flex min-h-[260px] flex-col justify-between rounded-xl bg-white p-[30px] shadow-[0_8px_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_25px_rgba(0,0,0,0.15)]">
          <div>
            <h2 className="mb-3 text-[1.8rem] font-bold text-[#1f456e]">
              Bolsa de estudos
            </h2>

            <p className="text-base font-normal leading-[1.5] text-[#4a4a4a]">
              A Academia Donaduzzi oferece bolsas de estudos para alunos
              que se destacam em suas atividades, valorizando o esforço,
              a dedicação e incentivando o crescimento acadêmico em um
              ambiente de excelência.
            </p>
          </div>
        </div>

        {/* Nosso site */}
        <div className="flex min-h-[260px] flex-col justify-between rounded-xl bg-white p-[30px] shadow-[0_8px_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_25px_rgba(0,0,0,0.15)]">
          <div>
            <h2 className="mb-3 text-[1.8rem] font-bold text-[#1f456e]">
              Nosso site
            </h2>

            <p className="text-base font-normal leading-[1.5] text-[#4a4a4a]">
              Este site foi desenvolvido com o propósito de apresentar a
              Academia Donaduzzi, explicando sua estrutura, objetivos
              educacionais e o papel fundamental que desempenha na
              formação de seus alunos, promovendo conhecimento, inovação
              e desenvolvimento humano.
            </p>
          </div>
        </div>

        {/* Colégio Donaduzzi */}
        <div className="flex min-h-[260px] flex-col justify-between rounded-xl bg-white p-[30px] shadow-[0_8px_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_25px_rgba(0,0,0,0.15)]">
          <div>
            <a
              href="https://colegiodonaduzzi.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-[1.8rem] font-bold text-[#1f456e] transition-colors hover:text-[#ff6b00]">
                Colégio Donaduzzi
              </h2>
            </a>

            <p className="text-base font-normal leading-[1.5] text-[#4a4a4a]">
              O Colégio Donaduzzi, localizado no Biopark Educação, é um
              exemplo de excelência em ensino moderno, comprometido com
              o desenvolvimento integral dos estudantes, integrando
              pesquisa, inteligência artificial e aprendizado
              personalizado.
            </p>
          </div>

          <a
            href="https://www.google.com/maps/place/Biopark+Educa%C3%A7%C3%A3o/@-24.6176737,-53.7129739,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block self-start rounded-lg bg-[#1f456e] px-[25px] py-3 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#153457]"
          >
            Localização
          </a>
        </div>

      </div>
    </section>
  )
}

export default InfoCaixa