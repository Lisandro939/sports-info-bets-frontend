'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import WebLogo from '../../../public/LogoWeb.png'
import { BsJustify, BsFillPersonFill, BsXLg } from 'react-icons/bs'

export default function Navbar({logos}) {

  const [sideBar, setSideBar] = useState('hidden')
  const [iconHamburguer, setIconHamburguer] = useState('')
  const [iconX, setIconX] = useState('hidden')

  const linkLeagueStyle = 'text-white text-xl flex flex-row gap-2 items-center'

  function changeVisibility () {
    if (sideBar === 'hidden') {
      setSideBar('')
      setIconHamburguer('hidden')
      setIconX('')
    } else {
      setSideBar('hidden')
      setIconHamburguer('')
      setIconX('hidden')
    }
  }
  

  return (
    <span className='w-screen h-14 flex flex-row justify-between items-center bg-primary px-6 py-2'>
      <button 
      onClick={() => changeVisibility()}
      className='sm:hidden'>
        <BsJustify className={'h-8 w-8 text-white ' + iconHamburguer} />
        <BsXLg className={'h-8 w-8 text-white ' + iconX} />
      </button>
      <Link href='/'>
        <Image alt='' src={WebLogo} width={200} height={200}/>
      </Link>
      <button className='bg-secondary rounded-full p-2'>
        <BsFillPersonFill className='h-6 w-6 text-white'/>
      </button>
      <div className={'absolute top-14 left-0 w-screen h-fit flex flex-col gap-4 bg-primary border-t-2 border-secondary px-4 py-6 ' + sideBar}>
        <p className='text-white mb-4'>Competiciones populares</p>
        <Link href='/' className={linkLeagueStyle}>
          <Image alt='' src={logos.ligaProfesionalArgentina} width={30} height={20} className='w-auto h-auto'/>
          Liga Profesional Argentina
        </Link>
        <Link href='/' className={linkLeagueStyle}>
          <Image alt='' src={logos.premierLeague} width={30} height={20} className='w-auto h-auto'/>
          Premier League
        </Link>
        <Link href='/' className={linkLeagueStyle}>
          <Image alt='' src={logos.laLiga} width={30} height={20} className='w-auto h-auto'/>
          La Liga
        </Link>
        <Link href='/' className={linkLeagueStyle}>
          <Image alt='' src='' width={30} height={20} className='w-auto h-auto'/>
          Brasileirao Serie A
        </Link>
        <Link href='/' className={linkLeagueStyle}>
          <Image alt='' src={logos.bundesliga} width={30} height={20} className='w-auto h-auto'/>
          Bundesliga
        </Link>
        <Link href='/' className={linkLeagueStyle}>
          <Image alt='' src={logos.ligue1} width={30} height={20} className='w-auto h-auto'/>
          Ligue 1
        </Link>
        <Link href='/' className={linkLeagueStyle}>
          <Image alt='' src={logos.serieA} width={30} height={20} className='w-auto h-auto'/>
          Serie A
        </Link>
      </div>
    </span>
  )
}
