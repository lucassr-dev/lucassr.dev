import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

function ContrateMe() {
  return (
    <div className='fixed left-4 bottom-4 
    flex items-center justify-center overflow-hidden
    md:right-8 md:left-auto md:top-16 md:bottom-auto md:absolute
    sm:right-8
    '>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
      <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />

      <Link href="mailto:contato@lucassr.dev" className=' flex items-center text-center justify-center
      absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
      text-light shadow-md border-solid border-dark w-24 h-24 rounded-full
      font-semibold hover:bg-light hover:text-dark
      dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
      hover:dark:border-light md:w-12 md:h-12 md:text-[10px]
      '>Contrate me</Link>
      </div>
      </div>
  )
}

export default ContrateMe