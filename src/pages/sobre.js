import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])


  return <span ref={ref}></span>
}

const sobre = () => {
  return (
    <>
      <Head>
        <title>Lucassr-Dev | Sobre-me</title>
        <meta name="description" content="Lucassr-dev Portifolio, web developer, front-end" />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="A paixão alimenta o propósito!" delay={700} className='mb-16 lg:!text-7xl sm:!text-6xl sm:mb-8 xs:!text-4xl' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biografia</h2>
              <p className='font-medium'>
                Olá, sou Lucassr-dev, um desenvolvedor front-end e
                futuro full-stack, apaixonado por tecnologia e programação.
                Estou em busca do meu primeiro emprego na área, para contribuir
                com meu conhecimento adquirido.
              </p>
              <p className='font-medium my-4'>
                Acredito que a tecnologia e a programação são ferramentas
                poderosas que nos permitem criar soluções inovadoras e
                transformar o mundo ao nosso redor. Com o conhecimento e a
                criatividade certos, podemos construir um futuro mais inclusivo,
                sustentável e próspero para todos.</p>
              <p className='font-medium'>
                Como alguém que está começando na programação, estou ansioso
                para aplicar minhas habilidades e conhecimentos em cada projeto
                que eu realizar. Apesar de não ter experiência em design, estou
                comprometido em aprender e aprimorar minhas habilidades para
                oferecer as melhores soluções para os usuários. Estou empolgado
                para fazer parte de equipes colaborativas que compartilhem
                esses mesmos valores..</p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
            '>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image src={profilePic} alt="lucassr-dev" className='w-full h-auto rounded-2xl'
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={9} />+
                </span>
                <h2 className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm
                '>Clientes Satisfeitos</h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={9} />+
                </span>
                <h2 className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm
                '>Projetos Completos</h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm
                '>Anos de experiência</h2>
              </div>
            </div>

          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default sobre