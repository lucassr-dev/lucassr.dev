import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    '>
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
        <span>Todos os Direitos Reservados {new Date().getFullYear()} &copy; </span>
        <div className='flex items-center lg:py-2'>
        Feito com <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
        Por&nbsp;<Link href="http://localhost:3000/" className='underline underline-offset-2'>Lucassr-dev</Link>
        </div>
        <Link href="http://localhost:3000/" target={"_blank"} className='underline underline-offset-2'>Diga Olá</Link>
      </Layout>
    </footer>
  )
}

export default Footer