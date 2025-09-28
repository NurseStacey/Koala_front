import React from 'react'

export default function Modal({open, onClose,children}){

    const MODAL_STYLE ={
        position: 'fixed',
        top:'50%',
        left: '50%',
        trnasform: 'translate(-50%,-50%)',
        backgroundColor:'#FFF',
        zIndex:1000
    }

    const OVERLAY_STYLES = {
        position:'fixed',
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'rgba(0,0,0,.7)',
        zIndex:1000
    }

    if  (!open) return null
    return (
        <div
            style={OVERLAY_STYLES}>
            <div
                style={MODAL_STYLE}
            >
                <button onClick={onClose}>Close Modal</button>
                {children}
            </div>
        </div>
    )
}