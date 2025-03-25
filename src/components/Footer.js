import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    '>
      <Layout className='py-8 flex items-baseline justify-between lg:flex-col lg:py-6'>
        <span>Todos os Direitos Reservados {new Date().getFullYear()} &copy; </span>
        <div className='flex items-center lg:py-2'>
        Feito com <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
        Por&nbsp;<Link href="https://github.com/lucassr-dev/lucassr.dev" className='underline underline-offset-2' target='_blank'>Lucassr-dev</Link>
        </div>
      </Layout>
    </footer>
  )
}

export default Footer