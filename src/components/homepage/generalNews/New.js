import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BookMark from './BookMark'

export default function New({news}) {

    return (
        <div className='flex flex-col gap-4 w-[335px]'>
            {news.map((newsItem) => (
                <div key={newsItem.Title} className='flex flex-col gap-4 border-b-2 border-secondary pb-4'>
                    <Link href={newsItem.NewsLink}>
                        <Image alt='' src={newsItem.Image} width={335} height={188} className='rounded-lg'/>
                    </Link>
                    <h1 className='text-white'>{newsItem.Title}</h1>
                    <span className='flex flex-row justify-between'>
                        <span className='flex flex-row items-center gap-2'>
                            <Image alt='' src={newsItem.PublisherLogo} width={21} height={21} className='bg-white'/>
                            <p className='text-white text-xs'>{newsItem.PublisherName}</p>
                            <p className='text-gray-400 text-xs'>{newsItem.PublisherDate}</p>
                        </span>
                        <BookMark />
                    </span>
                </div>
            ))}
        </div>
    )
      
}
