import Table from '@/components/eachPage/TableLisandro';
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

    const leagueNameMod = league.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase();

  return (
    <div className='w-screen h-full bg-primary flex flex-col py-6 px-2'>
      <span className='flex flex-col gap-4 items-'>
        <div className='flex flex-row items-center gap-2'>
          <Image alt='' src={logo} width={50} height={50} className='border border-secondary rounded-full p-1'/>
          <div className='flex flex-col items-start justifu-around'>
            <h2 className='text-xs text-white'>COMPETICION</h2>
            <h1 className='text-white text-sm font-bold'>{leagueNameMod}</h1>
          </div>
        </div>
        <h1 className='px-2 text-white text-sm'>Posiciones</h1>
        <Table table={table}/>
      </span>
    </div>
  )
}
