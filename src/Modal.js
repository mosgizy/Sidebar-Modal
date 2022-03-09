import React,{useRef,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {useGlobalContext} from './App'

const Modal = () => {
  const { showModalBox, closeModal, closeModalBox } = useGlobalContext()
  const showModal = useRef(null)
  
  useEffect(() => {
    closeModalBox && showModal.current.classList.add("hidden")
    showModalBox && showModal.current.classList.remove("hidden")
  })

  return (
    <div className='bg-white w-90 max-w-2xl absolute h-200 flex justify-center items-center text-4xl capitalize hidden z-50 overlay' ref={showModal}>
      <p>modal content</p>
      <FontAwesomeIcon onClick={closeModal} className='text-3xl text-red-600 font-bold absolute right-6 top-4' icon={faXmark} />
    </div>
  )
}

export default Modal
