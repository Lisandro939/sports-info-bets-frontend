import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'

export default function ContractRenewal({transfer}) {
  return (
    <div className='w-full bg-primary border border-secondary rounded-sm flex flex-col'>
        <div className='flex flex-row items-center justify-between px-4 py-2 border-b border-secondary'>
            <p className='text-xs'>{transfer.transferType}</p>
            <p className='text-xs'>{transfer.transferDate}</p>
        </div>
        <div className='flex flex-row justify-between items-center px-4 py-2 border-b border-secondary'>
            <div className='border border-secondary rounded-full p-2'>
                <BsFillPersonFill/>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-sm'>{transfer.playerName}</p>
                <p className='text-xs'>{transfer.playerRole}</p>
            </div>
            <div className='border border-secondary rounded-full p-2'>
                <BsFillPersonFill/>
            </div>
        </div>
        <div className='flex flex-row px-4 py-2 items-center justify-center'>
            <p className='text-sm'>{transfer.renewal}</p>
        </div>
        <div className='bg-secondary px-4 py-2 flex justify-center'>
            <h1 className='text-sm'>RENEWAL</h1>
        </div>
    </div>
  )
}
