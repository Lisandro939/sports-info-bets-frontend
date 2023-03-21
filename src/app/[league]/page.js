import Content from '@/components/eachPage/ContentLisandro';
import Image from 'next/image';
import React from 'react'
import { getLeagueNews } from '../api/getLeagueNews';
import { getLeagueResults } from '../api/getLeagueResults';
import { getLeagueTable } from '../api/getLeagueTable';
import { getLeagueTransfers } from '../api/getLeagueTransfers';
import { getOnlyLeagueLogo } from '../api/getOnlyLeagueLogo';

export default async function page({params}) {

    const {league} = params

    let leagueName = league

    leagueName = leagueName.replace(/[A-Z]/g, (letra) => letra.toLowerCase());

    const table = await getLeagueTable(leagueName)
    const news = await getLeagueNews(leagueName)
    const results = await getLeagueResults(leagueName)
    const transfers = await getLeagueTransfers(leagueName)

    const logo = await getOnlyLeagueLogo(leagueName)

    const leagueNameMod = league.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase();

  return (
    <div className='w-screen h-full bg-primary flex flex-col py-6'>
      <span className='flex flex-col gap-4'>
        <div className='flex flex-row items-center gap-2 ml-4'>
          <Image alt='' src={logo} width={50} height={50} className='border border-secondary rounded-full p-1 sm:hidden'/>
          <Image alt='' src={logo} width={100} height={100} className='border border-secondary rounded-full p-2 hidden sm:inline-block'/>
          <div className='flex flex-col items-start justifu-around'>
            <h2 className='text-[10px] text-white sm:text-lg'>COMPETICIÓN</h2>
            <h1 className='text-white text-sm font-bold sm:text-2xl'>{leagueNameMod}</h1>
          </div>
        </div>
        <Content table={table} news={news} results={results} transfers={transfers}/>
      </span>
    </div>
  )
}
