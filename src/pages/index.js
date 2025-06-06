import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/profile3.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import ContrateMe from '@/components/ContrateMe'
import lightBuld from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect'
export default function Home() {
  return (
    <>
      <Head>
        <title>Lucassr-dev | Portfólio</title>
        <meta name="description" content="Personal Portfolio - lucassr-dev" />

      </Head>
      <TransitionEffect />
      <main className=' flex items-center text-dark w-full min-h-screen dark:text-light '>
        <Layout className='pt-0 md:p-16 sm:p-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-[85%] image-overlay inset-0 pointer-events-none'>
              <Image src={profilePic} alt="Lucassr-dev" className='w-full h-auto lg:hidden md:inline-block md:w-full'
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Transformando sonhos em realidade através da programação." delay={700} className='!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
              '/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              Como um habilidoso desenvolvedor full-stack, dedico-me a
              transformar ideias em aplicações web inovadoras.
              Explore meus projetos e artigos mais recentes,
              mostrando minha experiência em React.js e desenvolvimento web.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/curriculo.pdf" target={"_blank"} aria-label='Meu Curriculo'
                className='flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base
                '
                download={true}
                >Resumo <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:contato@lucassr.dev" target={"_blank"} aria-label='Para falar comigo'
                className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
                md:text-base
                '
                >Contato</Link>
              </div>
            </div>
          </div>
        </Layout>

        <ContrateMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBuld} alt="Lucassr-dev" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
