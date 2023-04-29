'use client'

import React, {useState} from 'react'
import News from './news/News'
import Positions from './positions/Positions'
import Results from './results/Results'
import Transfers from './transfers/Transfers'

export default function Content({table, news, results, transfers, league}) {

    const classButton = 'text-white text-xs py-2 sm:text-lg'

    const [positionsButton, setPositionsButton] = useState(' border-b-2 border-secondaryOrange')
    const [newsButton, setNewsButton] = useState('')
    const [resultsButton, setResultsButton] = useState('')
    const [transfersButton, setTransfersButton] = useState('')

    const [positionsDiv, setPositionsDiv] = useState('')
    const [newsDiv, setNewsDiv] = useState('hidden')
    const [resultsDiv, setResultsDiv] = useState('hidden')
    const [transfersDiv, setTransfersDiv] = useState('hidden')

  return (
    <div className='flex flex-col gap-4'>
        <div className='flex flex-row justify-start w-full border-b border-secondary gap-4 px-4'>
          <button 
          className={classButton + positionsButton}
          onClick={() => {
            setPositionsDiv('')
            setNewsDiv('hidden')
            setResultsDiv('hidden')
            setTransfersDiv('hidden')

            setPositionsButton(' border-b-2 border-secondaryOrange')
            setNewsButton('')
            setResultsButton('')
            setTransfersButton('')
          }}
          >
            Posiciones
          </button>
          <button 
          className={classButton + newsButton}
          onClick={() => {
            setPositionsDiv('hidden')
            setNewsDiv('')
            setResultsDiv('hidden')
            setTransfersDiv('hidden')

            setPositionsButton('')
            setNewsButton(' border-b-2 border-secondaryOrange')
            setResultsButton('')
            setTransfersButton('')
          }}
          >
            Noticias
          </button>
          <button 
          className={classButton + resultsButton}
          onClick={() => {
            setPositionsDiv('hidden')
            setNewsDiv('hidden')
            setResultsDiv('')
            setTransfersDiv('hidden')

            setPositionsButton('')
            setNewsButton('')
            setResultsButton(' border-b-2 border-secondaryOrange')
            setTransfersButton('')
          }}
          >
            Resultados
          </button>
          <button 
          className={classButton + transfersButton}
          onClick={() => {
            setPositionsDiv('hidden')
            setNewsDiv('hidden')
            setResultsDiv('hidden')
            setTransfersDiv('')

            setPositionsButton('')
            setNewsButton('')
            setResultsButton('')
            setTransfersButton(' border-b-2 border-secondaryOrange')
          }}
          >
            Transferencias
          </button>
        </div>
        <div className={positionsDiv}>
          <Positions table={table} league={league}/>
        </div>
        <div className={newsDiv}>
          <News news={news} />
        </div>
        <div className={resultsDiv}>
          <Results results={results} />
        </div>
        <div className={transfersDiv}>
          <Transfers transfers={transfers} />
        </div>
    </div>
  )
}
