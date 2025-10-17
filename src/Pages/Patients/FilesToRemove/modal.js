import React from 'react'

export default function Modal({open, onClose,children}){


    if  (!open) return null
    return (
        <div
            className='OVERLAY_STYLES'>
            <div
                className='MODAL_STYLE'
            >
                <button onClick={onClose}>Close Modal</button>
                {children}
            </div>
        </div>
    )
}