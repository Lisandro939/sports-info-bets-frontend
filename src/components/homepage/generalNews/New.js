import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BookMark from './BookMark'

export default function New({news}) {

    return (
        <div className='flex flex-col gap-4 w-[335px] sm:w-screen sm:px-8 sm:py-6'>
            {news.map((newsItem) => (
                <div key={newsItem.Title} className='flex flex-col gap-4 border-b-2 border-secondary pb-4 sm:flex-row sm:border sm:border-secondary sm:rounded-md sm:pb-0'>
                    <Link href={newsItem.NewsLink} className='sm:hidden'>
                        <Image alt='' src={newsItem.Image} width={335} height={188} className='rounded-lg'/>
                    </Link>
                    <Link href={newsItem.NewsLink} className='hidden sm:flex sm:w-1/2'>
                        <Image alt='' src={newsItem.Image} width={670} height={376} className='rounded-lg sm:rounded-sm'/>
                    </Link>
                    <div className='flex flex-col gap-4 sm:justify-between sm:py-6 sm:w-1/2'>
                        <h1 className='text-white'>{newsItem.Title}</h1>
                        <span className='flex flex-row justify-between sm:w-screen sm:max-w-2xl sm:pr-8'>
                            <span className='flex flex-row items-center gap-2'>
                                <Image alt='' src={newsItem.PublisherLogo} width={21} height={21} className='bg-white'/>
                                <p className='text-white text-xs'>{newsItem.PublisherName}</p>
                                <p className='text-gray-400 text-xs'>{newsItem.PublisherDate}</p>
                            </span>
                            <BookMark />
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
      
}
