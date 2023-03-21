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
  const [menuStyle, setMenuStyle] = useState('hidden')
  const [buttonStyle, setButtonStyle] = useState('border-6 border-white')

  const LinkStyle = 'block px-4 py-2 text-sm text-white hover:bg-lightOrange hover:text-black'

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
    <span className='w-screen h-14 flex flex-row justify-between items-center bg-primary px-6'>
      <button 
      onClick={() => changeVisibility()}
      className='sm:hidden'>
        <BsJustify className={'h-8 w-8 text-white ' + iconHamburguer} />
        <BsXLg className={'h-8 w-8 text-white ' + iconX} />
      </button>
      <Link href='/'>
        <Image alt='' src={WebLogo} width={200} height={200}/>
      </Link>
      <div className='hidden sm:flex flex-col w-full pl-4'>
        <button
          className={"inline-flex justify-center items-center h-14 w-min bg-primary shadow-sm py-2 text-sm font-medium text-white " + buttonStyle}
          onMouseEnter={() => {
             setMenuStyle('')
             setButtonStyle('border-b-2 border-secondary')
          }}
          onMouseLeave={() => { 
            setMenuStyle('hidden') 
            setButtonStyle('')
          }}
        >
          Competiciones
        </button>
        <div
          id="submenu"
          className={"origin-top-left absolute left-0 mt-14 w-screen shadow-lg bg-primary ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 " + menuStyle}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
          onMouseEnter={() => { 
            setMenuStyle('') 
            setButtonStyle('border-b-2 border-secondary')
          }}
          onMouseLeave={() => { 
            setMenuStyle('hidden') 
            setButtonStyle('')
          }}
        >
          <div className="py-1" role="none">
            <Link
              href="/LigaProfesionalArgentina"
              className={LinkStyle}
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Liga Profesional Argentina
            </Link>
            <Link
              href="/PremierLeague"
              className={LinkStyle}
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Premier League
            </Link>
            <Link
              href="/LaLiga"
              className={LinkStyle}
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
            >
              La Liga
            </Link>
            <Link
              href="/BrasileiraoSerieA"
              className={LinkStyle}
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
            >
              Brasileirao Serie A
            </Link>
            <Link
              href="/Bundesliga"
              className={LinkStyle}
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
            >
              Bundesliga
            </Link>
            <Link
              href="/Ligue1"
              className={LinkStyle}
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
            >
              Ligue 1
            </Link>
            <Link
              href="/SerieA"
              className={LinkStyle}
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
            >
              Serie A
            </Link>
          </div>
        </div>
      </div>
      <button className='bg-secondary rounded-full p-2'>
        <BsFillPersonFill className='h-6 w-6 text-white'/>
      </button>
      <div className={'absolute sm:hidden top-14 left-0 w-screen h-fit flex flex-col gap-4 bg-primary border-t-2 border-secondary px-4 py-6 ' + sideBar}>
        <p className='text-white mb-4'>Competiciones populares</p>
        <button onClick={() => changeVisibility()}>
          <LeagueLink logo={ligaProfesionalArgentina} leagueName='Liga Profesional Argentina'/>
        </button>
        <button onClick={() => changeVisibility()}>
          <LeagueLink logo={premierLeague} leagueName='Premier League'/>
        </button>
        <button onClick={() => changeVisibility()}>
          <LeagueLink logo={laLiga} leagueName='La Liga'/>
        </button>
        <button onClick={() => changeVisibility()}>
          <LeagueLink logo={brasileiraoSerieA} leagueName='Brasileirao Serie A'/>
        </button>
        <button onClick={() => changeVisibility()}>
          <LeagueLink logo={bundesliga} leagueName='Bundesliga'/>
        </button>
        <button onClick={() => changeVisibility()}>
          <LeagueLink logo={ligue1} leagueName='Ligue 1'/>
        </button>
        <button onClick={() => changeVisibility()}>
          <LeagueLink logo={serieA} leagueName='Serie A'/>
        </button>
      </div>
    </span>
  )
}
