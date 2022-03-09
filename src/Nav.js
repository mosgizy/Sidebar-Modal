import React,{useRef,useEffect} from 'react'
import Header from './Header'
import NavItems from './NavItems'
import SocialIcons from './SocialIcons'
import { useGlobalContext } from './App'

const Nav = () => {
    const { showNavBar, closeNav, closeNavBar } = useGlobalContext()
    const showNav = useRef(null)

    useEffect(() => {
        showNavBar && showNav.current.classList.remove("translate-x-minus")
        closeNav && showNav.current.classList.add("translate-x-minus")
    })

    return (
        <div className='absolute top-0 left-0 min-h-screen w-screen py-5 px-7 bg-white transition-all duration-300 translate-x-minus md:w-128' ref={showNav}>
            <Header closeNavBar={closeNavBar} />
            <NavItems />
            <SocialIcons />
        </div>
    )
}

export default Nav
