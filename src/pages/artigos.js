import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import artigo1 from "../../public/images/articles/pagination component in reactjs.jpg"
import artigo2 from "../../public/images/articles/create loading screen in react js.jpg"
import { motion, useMotionValue } from 'framer-motion'
import artigo3 from "../../public/images/articles/create modal component in react using react portals.png"
import artigo4 from "../../public/images/articles/form validation in reactjs using custom react hook.png"
import artigo5 from "../../public/images/articles/smooth scrolling in reactjs.png"
import artigo6 from "../../public/images/articles/todo list app built using react redux and framer motion.png"
import artigo7 from "../../public/images/articles/What is higher order component in React.jpg"
import artigo8 from "../../public/images/articles/What is Redux with easy explanation.png"
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {

  const x = useMotionValue();
  const y = useMotionValue();
  const imgRef = useRef(null);

  function handleMouse(event){
    imgRef.current.style.display="inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event){
    imgRef.current.style.display="none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link} target="_blank"
    onMouseMove={handleMouse}
    onMouseLeave={handleMouseLeave}
    >
      <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
      <FramerImage
      style={{x:x, y:y}}
      initial={{opacity:0}}
      whileInView={{opacity:1, transition:{duration: 0.2}}}
      ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' />
    </Link>
  )

}

const Artigo = ({ img, title, date, link }) => {

  return (
    <motion.li
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"} }}
    viewport={{once: true}}
    className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light
        sm:flex-col
        '>
      <MovingImage title={title} img={img} link={link} />
      <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
    </motion.li>
  )
}

const FeaturedArtigos = ({ img, title, time, summary, link }) => {

  return (
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl
    dark:bg-dark dark:border-light
    '>

      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-3xl dark:bg-light
      ' />

      <Link href={link} target="_blank"
        className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className='capitalize text-2xl font-bold mt-4 my-2 hover:underline xs:text-lg'>{title}</h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
    </li>
  )

}

const artigos = () => {
  return (
    <>
      <Head>
        <title>Lucassr-dev | Artigos</title>
        <meta name="description" content="Lucassr-dev Portifolio, web developer, front-end" />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Palavras podem mudar o mundo!" delay={700} className='mb-16 
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />
          <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
            <FeaturedArtigos
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in
                ReactJS from scratch. Follow this step-by-step guide to
                integrate Pagination component in your ReactJS project."
              time="9min de leitura"
              link="/"
              img={artigo1}
            />

            <FeaturedArtigos
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              summary="Learn how to create stunning loading screens in React
                with 3 different methods. Discover how to use React-Loading, 
                React-Lottie & build a custom loading screen. Improve the user experience"
              time="10min de leitura"
              link="/"
              img={artigo2}
            />


          </ul>

          <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>Todos os Artigos</h2>

          <ul>

            <Artigo
              title="Form Validation In Reactjs: 
                Build A Reusable Custom Hook For Inputs And Error Handling"
              date="07 Março 2023"
              link="/"
              img={artigo3}
            />
            <Artigo
              title="Form Validation In Reactjs: 
                Build A Reusable Custom Hook For Inputs And Error Handling"
              date="07 Março 2023"
              link="/"
              img={artigo4}
            />
            <Artigo
              title="Form Validation In Reactjs: 
                Build A Reusable Custom Hook For Inputs And Error Handling"
              date="07 Março 2023"
              link="/"
              img={artigo5}
            />
            <Artigo
              title="Form Validation In Reactjs: 
                Build A Reusable Custom Hook For Inputs And Error Handling"
              date="07 Março 2023"
              link="/"
              img={artigo6}
            />
            <Artigo
              title="Form Validation In Reactjs: 
                Build A Reusable Custom Hook For Inputs And Error Handling"
              date="07 Março 2023"
              link="/"
              img={artigo7}
            />
            <Artigo
              title="Form Validation In Reactjs: 
                Build A Reusable Custom Hook For Inputs And Error Handling"
              date="07 Março 2023"
              link="/"
              img={artigo8}
            />
          </ul>

        </Layout>
      </main>
    </>
  )
}

export default artigos