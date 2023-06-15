import React from 'react';
import ReactDOM from "react-dom";
import "./Modal.css"
import { GlobalContext } from '../../../context/GlobalContext';

const Modal = ({children})=>{

    const {openModal} = React.useContext(GlobalContext)

    return ReactDOM.createPortal(

        <div className="modal">
            {children}

            <div className='close-modal' onClick={openModal}>x</div>
        </div>,

        document.getElementById('modal')        
    )
}

export {Modal}