import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
    md:w-[80%]
    '>

      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
          target="_blank"
          className='text-primary dark:text-primaryDark capitalize'
        >@{company}</a></h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>
          {work}
        </p>
      </motion.div>
    </li>
  );
}

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <>
      <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl'>
          Experiências
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

          <motion.div
            style={{ scaleY: scrollYProgress }}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]
            '/>

          <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details
              position="Auxiliar Administrativo"
              company="Sotel"
              companyLink="https://sotel.ind.br/"
              time="2020 - 2022"
              address="Brasília, Distrito Federal"
              work="- Emissão de notas fiscais de venda.
              - Entrada de notas fiscais de compra.
              - Contas a pagar e contas a receber, com alimentação de planilhas e por sistema ERP Software Clipp Pro.
              - Responsável por orçamento e compra de material;
              - Atendimento e agendamento de clientes;
              - Vendas de balcão
              - Criação de pedidos internos."
            />

            <Details
              position="Auxiliar Administrativo"
              company="AlarmeShow"
              companyLink="https://alarmeshow.bsb.br/"
              time="2017 - 2019"
              address="Brasília, Distrito Federal"
              work="- Pagamento de fornecedores e funcionários;
              - Controle de ponto.
              - Entrada e saída de notas fiscais.
              - Emissão de recibos e pedidos internos.
              - Responsável por orçamento e compra de material;
              - Atendimento e agendamento de clientes;
              - Gestão financeira e pessoal, através de planilhas e sistema ERP MAQPLAN."
            />

            <Details
              position="Fiscal de prevenção de Perdas"
              company="GPA"
              companyLink="https://www.gpabr.com/pt/"
              time="2014 - 2016"
              address="Brasília, Distrito Federal"
              work="- Implementação de uma Política de Prevenção de Perdas na organização;
              - Identificação e avaliação das situações, atividades e processos com potencial de gerar perdas;
              - Identificação e avaliação de riscos de perdas;
              - Prevenir e combater desperdícios, fraudes e furtos;
              - Reduzir e eliminar gastos desnecessários;
              - Aumentar e potencializar a margem de lucros da empresa."
            />

            <Details
              position="Auxiliar Administrativo"
              company="Codevasf"
              companyLink="https://www.codevasf.gov.br/"
              time="2010 - 2012"
              address="Brasília, Distrito Federal"
              work="- Controle de correspondências e documentações;
              - Atendimento e agendamento de clientes;
              - Responsável por orçamento e compra de material;
              - Gestão administrativa, financeira e pessoal."
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Experience