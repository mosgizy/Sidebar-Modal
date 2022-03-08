import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faUserGroup, faFolderOpen, faCalendarDays, faFileContract } from '@fortawesome/free-solid-svg-icons'

const items = [
    { icon: faHouseChimney, text: "home" },
    { icon: faUserGroup, text: "team" },
    { icon: faFolderOpen, text: "projects" },
    { icon: faCalendarDays, text: "calendar" },
    { icon: faFileContract, text: "documents" }
]

const NavItems = () => {
    return (
        <div className="flex flex-col gap-8">
            {
                items.map((item,index) => {
                    return <div key={index} className="flex items-center gap-5 text-xl">
                        <FontAwesomeIcon className='text-slate-600' icon={item.icon} />
                        <p className='capitalize text-2xl'>{ item.text}</p>
                    </div>
                })
            }
        </div>
    )
}

export default NavItems
