import Image from 'next/image';
import React from 'react'

export default function Results({results}) {

  console.log(results[0])

  return (
    <div className='text-white px-4 flex flex-col gap-4'>
        <h1 className='text-white'>Resultados</h1>
        <div>
        {results.map((item, index) => {
          const matchdayNumbers = Object.keys(item);
          const games = [];
          Object.keys(item).forEach(key => {
            const matchday = item[key];
            games.push(...matchday);
          });

          const gameGroups = games.reduce((acc, game, i) => {
            const groupIndex = Math.floor(i / 10);
            if (!acc[groupIndex]) {
              const matchdayNumber = matchdayNumbers[groupIndex];
              acc[groupIndex] = { matchdayNumber, games: [] };
            }
            acc[groupIndex].games.push(game);
            return acc;
          }, []);

          return (
            <>
              {gameGroups.map(({ matchdayNumber, games }, groupIndex) => (
                <div key={groupIndex} className='flex flex-col gap-4'>
                  <h1 className='mt-4'>{matchdayNumber}</h1>
                  {games.map(game => (
                    <div key={game.homeTeam + game.awayTeam} className='bg-secondary rounded-sm flex flex-row gap-2 items-center justify-center py-4 px-2'>
                      <div className='flex flex-row w-[45%] items-center justify-between gap-2'>
                        <Image alt='' src={game.homeLogo} width={22} height={22} />
                        <span className='flex flex-row gap-2'>
                          <span className='text-xs'>{game.homeTeam}</span>
                          <span className='text-xs'>{game.homeTeamScore}</span>
                        </span>
                      </div>
                      <span>-</span>
                      <div className='flex flex-row w-[45%] items-center justify-between gap-2'>
                        <span className='flex flex-row gap-2'>
                          <span className='text-xs'>{game.awayTeamScore}</span>
                          <span className='text-xs'>{game.awayTeam}</span>
                        </span>
                        <Image alt='' src={game.awayLogo} width={22} height={22} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </>
          );
        })}

        </div>
    </div>
  )
}
