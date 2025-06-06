import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import projeto1 from '../../public/images/projects/upinside.png'
import projeto2 from '../../public/images/projects/onebitlife.png'
import projeto3 from '../../public/images/projects/rocketpay.png'
import projeto4 from '../../public/images/projects/youtube-masterclass.png'

import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const FeatureProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center relative rounded-br-2xl justify-between
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      ' />
      <Link href={link} target="_blank"
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <FramerImage src={img} alt={title} className='w-full h-auto'
        whileHover={{scale: 1.05}}
        transition={{duration:0.2}}
        priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target="_blank" className='w-10'> <GithubIcon /></Link>
          <Link href={link} target="_blank"
            className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold
            sm:px-4 sm:text-base
            '>Visite o Projeto</Link>
        </div>
      </div>

    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4
    '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      ' />
      <Link href={link} target="_blank"
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage src={img} alt={title} className='w-full h-auto'
        whileHover={{scale: 1.05}}
        transition={{duration:0.2}}
        />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link>
        
        <div className='w-full mt-2 flex items-center justify-between'>
        <Link href={link} target="_blank"
            className=' rounded-lg text-lg font-semibold underline md:text-base'
          >Visite</Link>
          <Link href={github} target="_blank" className='w-8 md:w-6'> <GithubIcon /></Link>
          
        </div>
      </div>
    </article>
  )
}

const projetos = () => {
  return (
    <>
      <Head>
        <title>Lucassr-dev | Meus Projetos</title>
        <meta name="description" content="Lucassr-dev Portifolio, web developer, front-end" />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Imaginação em cada pixel!" delay={700}
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeatureProject
                title="HTML5 e CSS3 Essentials da UpInside"
                img={projeto1}
                summary="Este é um site desenvolvido com HTML5 e CSS3 e um pouco 
                de Javascript utilizando as melhores práticas e semânticas, com otimização para SEO."
                link="https://html5-css3-essentials-upinside.vercel.app/"
                github="https://github.com/lucassr-dev/html5-css3-essentials-upinside"
                type="Projeto em Destaque"

              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Aplicativo OneBitLife"
                img={projeto2}
                summary="O aplicativo OneBitLife é um projeto desenvolvido durante 
                a Semana Mobile do OneBitCode. O objetivo dele é fazer um gerenciamento de tarefas,
                que ajudam o usuário a fixar hábitos melhores e mais saudáveis em sua vida."
                link="https://github.com/lucassr-dev/onebitlife"
                github="https://github.com/lucassr-dev/onebitlife"
                type="Projeto"

              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Componente RocketPay"
                img={projeto3}
                summary="O Rocketpay é um componente que simula o formulário de preenchimento de cartão de crédito, 
                onde é possível adicionar máscara aos inputs e atualizar elementos HTML via DOM.."
                link="https://explorer-lab-01-alves538.vercel.app/"
                github="https://github.com/lucassr-dev/explorer-lab"
                type="Projeto"

              />
            </div>

            <div className='col-span-12'>
            <FeatureProject
                title="HTML5 e CSS3 Essentials da UpInside"
                img={projeto1}
                summary="Este é um site desenvolvido com HTML5 e CSS3 e um pouco 
                de Javascript utilizando as melhores práticas e semânticas, com otimização para SEO."
                link="https://html5-css3-essentials-upinside.vercel.app/"
                github="https://github.com/lucassr-dev/html5-css3-essentials-upinside"
                type="Projeto em Destaque"

              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="API HTTP - Guarda URL"
                img={projeto4}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                link="http://youtube-masterclass-node-http.vercel.app/"
                github="https://github.com/lucassr-dev/youtube-masterclass-node-http"
                type="Projeto"

              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Crypto Screener Application"
                img={projeto3}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                link="/"
                github="/"
                type="Projeto"

              />
            </div>
          </div>

        </Layout>
      </main>
    </>
  )
}

export default projetos