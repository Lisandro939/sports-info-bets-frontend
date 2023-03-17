import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function LeagueLink({logo, leagueName}) {

    const linkLeagueStyle = 'text-white text-xl flex flex-row gap-2 items-center'

    let leagueNameLink = leagueName;
    leagueNameLink = leagueNameLink.replace(/\s+/g, ''); //Elimina todos los espacios en blanco

  return (
    <Link onClick={() => changeVisibility()} href={'/' + leagueNameLink} className={linkLeagueStyle}>
        <div className='w-[30px] h-[30px]'>
          <Image alt={leagueName} src={logo} width={30} height={20} className='w-auto h-auto lazy' />
        </div>
        {leagueName}
    </Link>
  )
}
