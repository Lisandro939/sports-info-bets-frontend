import React from 'react'
import ContractRenewal from './ContractRenewal'
import DoneDeal from './DoneDeal'

export default function Transfers({transfers}) {
  return (
    <div className='text-white px-4 flex flex-col gap-4'>
        <h1 className='text-sm'>Últimas transferencias</h1>
        {
          transfers.map((transfer, index) => (
            <div key={transfer.transferType}>
              {
                transfer.transferType === 'DONE DEAL'
                ? <DoneDeal transfer={transfer}/>
                : <ContractRenewal transfer={transfer}/>
              }
            </div>
          ))
        }
    </div>
  )
}
