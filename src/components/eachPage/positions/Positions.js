'use client'

import React from 'react'
import Image from 'next/image'
import { clasificationPerPosition } from '@/app/api/getClasificationPerPositionLisandro'

export default function Positions({table, league}) {

    const classTH = 'px-2 text-xs sm:text-lg'
    const classTD = 'px-2 py-4 text-center sm:text-lg '

    console.log(league)

    const clasification = clasificationPerPosition(league);

  return (
    <div className='text-white text-xs overflow-x-auto sm:pr-4'>
      <table className='max-w-full sm:w-screen'>
        <thead>
          <tr>
            <th className={classTH}></th>
            <th className='w-fit-content whitespace-nowrap px-24'></th>
            <th className={classTH}>PJ</th>
            <th className={classTH}>PG</th>
            <th className={classTH}>PE</th>
            <th className={classTH}>PP</th>
            <th className={classTH}>GF</th>
            <th className={classTH}>GC</th>
            <th className={classTH}>DG</th>
            <th className={classTH}>PTS</th>
          </tr>
        </thead>
        <tbody>
          {table.map((team, index) => (
            <tr key={team.name} className='border-b border-secondary'>
              {
                clasification.champions_league.includes(index + 1) 
                ? <td className={classTD + 'text-blue-500'}>{index + 1}</td>
                : clasification.europe_league.includes(index + 1) 
                ? <td className={classTD + 'text-orange-500'}>{index + 1}</td>
                : clasification.europe_conference_league.includes(index + 1) 
                ? <td className={classTD + 'text-green-500'}>{index + 1}</td>
                : clasification.relegation_elimination.includes(index + 1) 
                ? <td className={classTD + 'text-red-500'}>{index + 1}</td>
                : clasification.relegation.includes(index + 1)
                ? <td className={classTD + 'text-red-700'}>{index + 1}</td>
                : <td className={classTD}>{index + 1}</td>
              }
              <td className='flex flex-row items-center justify-start gap-2 py-4 sm:text-lg'>
                <Image alt='' src={team.logo} width={31} height={31} className='border border-secondary rounded-full p-1 sm:hidden'/>
                <Image alt='' src={team.logo} width={45} height={45} className='border border-secondary rounded-full p-1 hidden sm:inline-block'/>
                {team.name}
              </td>
              <td className={classTD}>{team.gamesPlayed}</td>
              <td className={classTD}>{team.gamesWon}</td>
              <td className={classTD}>{team.gamesTied}</td>
              <td className={classTD}>{team.gamesLost}</td>
              <td className={classTD}>{team.goalsInFavor}</td>
              <td className={classTD}>{team.goalsAgainst}</td>
              {
                team.goalsDifference > 0 
                ? <td className={classTD + 'text-green-500'}>{team.goalsDifference}</td> 
                : team.goalsDifference < 0 ? <td className={classTD + 'text-red-500'}>{team.goalsDifference}</td> 
                : <td className={classTD}>{team.goalsDifference}</td>
              }
              <td className={classTD}>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        league === 'laliga' || league === 'premierleague' || league === 'seriea' || league === 'bundesliga' || league === 'ligue1' 
        ? <div className='h-full w-full flex flex-col gap-2 px-4 py-8 text-lg text-terciary'>
        <h1 className='flex flex-row gap-1'>Posiciones {clasification.champions_league.map(
          (number) => (
            <p key={number}>- {number}</p>
          )
        )}: Champions League</h1>
        <h1 className='flex flex-row gap-1'>Posiciones {clasification.europe_league.map(
          (number) => (
            <p key={number}>- {number}</p>
          )
        )}: Europa League</h1>
        {
          clasification.europe_conference_league.length !== 0 ?
          <h1 className='flex flex-row gap-1'>Posiciones {clasification.europe_conference_league.map(
          (number) => (
            <p key={number}>- {number}</p>
          )
          )}: Europa Conference League</h1>
          : <h1 className='hidden'></h1>
        }
        {
          clasification.relegation_elimination.length !== 0 ?
          <h1 className='flex flex-row gap-1'>Posiciones {clasification.relegation_elimination.map(
          (number) => (
            <p key={number}>- {number}</p>
          )
          )}: Eliminatoria para el descenso</h1>
          : <h1 className='hidden'></h1>
        }
        <h1 className='flex flex-row gap-1'>Posiciones {clasification.relegation.map(
          (number) => (
            <p key={number}>- {number}</p>
          )
        )}: Descenso</h1>
      </div>
      : <div className='hidden'></div>
      }
      
    </div>
  )
}
