import React from 'react'
import logo from './logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = ({closeNavBar}) => {
  return (
      <header className='flex items-center justify-between mb-14'>
          <img src={logo} className="h-10" alt="logo" />
          <FontAwesomeIcon onClick={closeNavBar} className='text-3xl text-red-600 font-bold' icon={faXmark} />
      </header>
  )
}

export default Header
