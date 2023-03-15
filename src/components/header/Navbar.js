'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import WebLogo from '../../../public/LogoWeb.png'
import { BsJustify, BsFillPersonFill, BsXLg } from 'react-icons/bs'
import LeagueLink from './LeagueLink'

export default function Navbar({logos}) {

  const [sideBar, setSideBar] = useState('hidden')
  const [iconHamburguer, setIconHamburguer] = useState('')
  const [iconX, setIconX] = useState('hidden')

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
  
  const { ligaProfesionalArgentina, premierLeague, laLiga, brasileiraoSerieA, bundesliga, ligue1, serieA } = logos;
  
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
      <div className={'absolute sm:hidden top-14 left-0 w-screen h-fit flex flex-col gap-4 bg-primary border-t-2 border-secondary px-4 py-6 ' + sideBar}>
        <p className='text-white mb-4'>Competiciones populares</p>
        <LeagueLink logo={ligaProfesionalArgentina} leagueName='Liga Profesional Argentina'/>
        <LeagueLink logo={premierLeague} leagueName='Premier League'/>
        <LeagueLink logo={laLiga} leagueName='La Liga'/>
        <LeagueLink logo={brasileiraoSerieA} leagueName='Brasileirao Serie A'/>
        <LeagueLink logo={bundesliga} leagueName='Bundesliga'/>
        <LeagueLink logo={ligue1} leagueName='Ligue 1'/>
        <LeagueLink logo={serieA} leagueName='Serie A'/>
      </div>
    </span>
  )
}
