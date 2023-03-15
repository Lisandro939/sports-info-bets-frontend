import { getGeneralNews } from '@/app/api/getGeneralNewsLisandro'
import React from 'react'
import New from './generalNews/New'

export default async function GeneralNews() {

    const news = await getGeneralNews()

  return (
    <div className='w-screen h-full bg-primary py-6 px-4 flex flex-col gap-6'>
        <h1 className='text-white'>Top News</h1>
        <New news={news}/>
    </div>
  )
}
