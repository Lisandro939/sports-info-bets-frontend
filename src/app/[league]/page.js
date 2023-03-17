import Image from 'next/image';
import React from 'react'
import { getLeagueTable } from '../api/getLeagueTable';
import { getOnlyLeagueLogo } from '../api/getOnlyLeagueLogo';

export default async function page({params}) {

    const {league} = params

    let leagueName = league

    leagueName = leagueName.replace(/[A-Z]/g, (letra) => letra.toLowerCase());

    const table = await getLeagueTable(leagueName)

    const logo = await getOnlyLeagueLogo(leagueName)

  return (
    <div className='w-screen h-full bg-primary flex flex-col py-6 px-4'>
      <span className='flex flex-row gap-4 items-center'>
        <Image alt='' src={logo} width={50} height={50}/>
        <h1 className='text-white text-sm'>{league}</h1>
      </span>
    </div>
  )
}
