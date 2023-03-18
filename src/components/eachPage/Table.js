import React from 'react'
import Image from 'next/image'

export default function Table({table}) {

    const classTH = 'px-2 text-xs'
    const classTD = 'px-2 py-4 text-center'

  return (
    <div className='text-white text-xs overflow-x-auto'>
      <table className='max-w-full'>
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
            <tr key={team.name} className='border-b border-terciary'>
              <td className={classTD}>{index + 1}</td>
              <td className='flex flex-row items-center justify-start gap-2 py-4'>
                <Image alt='' src={team.logo} width={31} height={31} className='border border-secondary rounded-full p-1'/>
                {team.name}
              </td>
              <td className={classTD}>{team.gamesPlayed}</td>
              <td className={classTD}>{team.gamesWon}</td>
              <td className={classTD}>{team.gamesTied}</td>
              <td className={classTD}>{team.gamesLost}</td>
              <td className={classTD}>{team.goalsInFavor}</td>
              <td className={classTD}>{team.goalsAgainst}</td>
              <td className={classTD}>{team.goalsDifference}</td>
              <td className={classTD}>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
