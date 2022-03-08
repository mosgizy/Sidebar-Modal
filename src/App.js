import './App.css';
import Modal from './Modal';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useReducer } from 'react'

const reducer = (state, action) => {
  if (action.type === 'SHOW_NAV') {
    return {
      ...state,
      showNav: true,
      closeNav:false
    }
  }

  if (action.type === 'CLOSE_NAV') {
    return {
      ...state,
      showNav: false,
      closeNav:true,
    }
  }

  if (action.type === 'SHOW_MODAL') {
    return {
      ...state,
      showModal: true,
      closeModal:false,
    }
  }

  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      showModal: false,
      closeModal:true,
    }
  }

  throw new Error("action is not provided")
}

const defaultState = {
  showNav: false,
  closeNav:true,
  showModal: false,
  closeModal:true,
}

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState
  )

  const showNav = () => {
    dispatch({type:"SHOW_NAV"})
  }

  const closeNav = () => {
    dispatch({type:'CLOSE_NAV'})
  }

  const showModal = () => {
    dispatch({type:'SHOW_MODAL'})
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <div className="flex justify-center items-center min-h-screen relative">
      <div className="fixed top-8 animate-bounce left-12 text-3xl text-green-500">
        <FontAwesomeIcon onClick={showNav} icon={faBars} />
      </div>
      <button type='button' onClick={showModal} className='bg-black text-white text-sm px-3.5 py-2 tracking-widest uppercase rounded-md transition-all hover:bg-white hover:border-solid hover:border-2 hover:border-black hover:text-black'>show modal</button>
      <Modal showModalBox = {state.showModal} closeModal={closeModal} closeModalBox = {state.closeModal} />
      <Nav showNavBar = {state.showNav} closeNavBar={closeNav} closeNav ={state.closeNav} />
    </div>
  );
}

export default App;
