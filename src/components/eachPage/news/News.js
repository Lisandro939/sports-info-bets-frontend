import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function News({news}) {

  return (
    <div className='text-white w-screen flex flex-col gap-4 justify-center items-start px-4 sm:px-8 sm:py-4'>
        <div className='flex flex-col sm:flex-row gap-4 border-b-2 sm:border-2 border-secondary pb-4 sm:w-full sm:rounded-md sm:pb-0'>
            <Link href={news[0].NewsLink}>
                <Image alt='' src={news[0].Image} width={335} height={188} className='rounded-lg mx-auto sm:hidden'/>
                <Image alt='' src={news[0].Image} width={670} height={376} className='rounded-sm mx-auto hidden sm:inline-block'/>
            </Link>
            <div className='flex flex-col gap-4 sm:justify-between sm:py-6 sm:w-1/2'>
                <h1 className='text-white'>{news[0].Title}</h1>
                <span className='flex flex-row justify-between'>
                    <span className='flex flex-row items-center gap-2'>
                        <Image alt='' src={news[0].PublisherLogo} width={21} height={21} className='bg-white'/>
                        <p className='text-white text-xs'>{news[0].PublisherName}</p>
                        <p className='text-gray-400 text-xs'>{news[0].PublisherDate}</p>
                    </span>
                </span>
            </div>
            
        </div>
        {news.slice(1,10).map((newsItem) => (
                <div key={newsItem.Title} className='flex flex-col gap-4 border-b-2 border-secondary pb-4 sm:max-w-full sm:w-screen'>
                    <div className='flex flex-row gap-4 w-full h-full'>
                        <Link href={newsItem.NewsLink} className='w-[64px] h-[64px] hidden sm:inline-block'>
                            <Image alt='' src={newsItem.Image} width={64} height={64} className='rounded-lg'/>
                        </Link>
                        <h1 className='text-white text-sm w-4/5 sm:text-lg sm:whitespace-nowrap'>{newsItem.Title}</h1>
                        <Link href={newsItem.NewsLink} className='w-[64px] h-[64px] sm:hidden'>
                            <Image alt='' src={newsItem.Image} width={64} height={64} className='rounded-lg'/>
                        </Link>
                    </div>
                    <span className='flex flex-row justify-between items-center'>
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
