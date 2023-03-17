import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoWeb from '../../../public/LogoWeb.png'

export default function Footer() {
  return (
    <div className='w-screen h-full flex flex-col bg-primary py-6 gap-4'>
        <Image alt='' src={LogoWeb} width={200} height={100}/>
        <div className='flex flex-col px-4 gap-4'>
            <h1 className='text-white'>ENLACES RÁPIDOS</h1>
            <div className='flex flex-col text-white'>
                <Link href='/'>Liga Profesional Argentina</Link>
                <Link href='/'>Premier League</Link>
                <Link href='/'>La Liga</Link>
                <Link href='/'>Brasileirao Serie A</Link>
                <Link href='/'>Bundesliga</Link>
                <Link href='/'>Ligue 1</Link>
                <Link href='/'>Serie A</Link>
            </div>
        </div>
    </div>
  )
}
