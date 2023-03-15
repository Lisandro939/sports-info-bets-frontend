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
        <BsBookmark className={'text-white ' + bookmarkUnchecked}/>
        <BsFillBookmarkStarFill className={'text-primaryOrange ' + bookmarkChecked}/>
    </button>
  )
}
