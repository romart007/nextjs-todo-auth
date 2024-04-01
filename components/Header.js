import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import { useAuth } from '../context/AuthContext'

export default function Header() {
    const { currentUser } = useAuth()

    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            {openModal && <Modal setOpenModal={setOpenModal} />}
            <div className='sticky top-0 w-full left-0 flex items-center justify-between p-4 border-b border-solid border-white'>
                <h1 className='text-3xl select-none sm:text-6xl'>TODO LIST</h1>
            {currentUser && <i onClick={() => setOpenModal(true)} className="fa-solid fa-user text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-3xl"></i>}
            </div>
        </>
    )
}
