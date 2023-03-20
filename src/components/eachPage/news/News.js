import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function News({news}) {

  return (
    <div className='text-white w-screen flex flex-col gap-4 justify-center items-center px-4'>
        <div className='flex flex-col gap-4 border-b-2 border-secondary pb-4'>
            <Link href={news[0].NewsLink}>
                <Image alt='' src={news[0].Image} width={335} height={188} className='rounded-lg mx-auto'/>
            </Link>
            <h1 className='text-white'>{news[0].Title}</h1>
            <span className='flex flex-row justify-between'>
                <span className='flex flex-row items-center gap-2'>
                    <Image alt='' src={news[0].PublisherLogo} width={21} height={21} className='bg-white'/>
                    <p className='text-white text-xs'>{news[0].PublisherName}</p>
                    <p className='text-gray-400 text-xs'>{news[0].PublisherDate}</p>
                </span>
            </span>
        </div>
        {news.slice(1,10).map((newsItem) => (
                <div key={newsItem.Title} className='flex flex-col gap-4 border-b-2 border-secondary pb-4'>
                    <div className='flex flex-row gap-4 w-full h-full'>
                        <h1 className='text-white text-sm w-4/5'>{newsItem.Title}</h1>
                        <Link href={newsItem.NewsLink} className='w-[64px] h-[64px]'>
                            <Image alt='' src={newsItem.Image} width={64} height={64} className='rounded-lg'/>
                        </Link>
                    </div>
                    <span className='flex flex-row justify-between'>
                        <span className='flex flex-row items-center gap-2'>
                            <Image alt='' src={newsItem.PublisherLogo} width={21} height={21} className='bg-white'/>
                            <p className='text-white text-xs'>{newsItem.PublisherName}</p>
                            <p className='text-gray-400 text-xs'>{newsItem.PublisherDate}</p>
                        </span>
                    </span>
                </div>
            ))}
    </div>
  )
}
