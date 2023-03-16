'use client'

import React, { useState } from 'react'
import { BsBookmark, BsFillBookmarkStarFill } from 'react-icons/bs'

export default function BookMark() {

    const [bookmarkUnchecked, setBookmarkUnchecked] = useState('')
    const [bookmarkChecked, setBookmarkChecked] = useState('hidden')

    function uncheckedOrCheked () {
        if (bookmarkUnchecked === '') {
            setBookmarkUnchecked('hidden')
            setBookmarkChecked('')
        } else {
            setBookmarkUnchecked('')
            setBookmarkChecked('hidden')
        }
    }

  return (
    <button onClick={() => uncheckedOrCheked()}>
        <BsBookmark className={'text-white w-6 h-6 ' + bookmarkUnchecked}/>
        <BsFillBookmarkStarFill className={'text-primaryOrange w-6 h-6 ' + bookmarkChecked}/>
    </button>
  )
}
