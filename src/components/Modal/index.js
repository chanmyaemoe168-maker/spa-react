import React from 'react'
import './index.css'

export default function Modal({children,danger,setShowModal}) {
  return (
    <div className="modal-container">
    <div className= "modal-backdrop">
        <div className = "modal" style = {
          {
            border: "1px solid black",
            borderColor : danger ? "red" : "black",
          }
        }>
         {children}
          <button onClick={() => setShowModal(false)}>close</button>
        </div>

    </div>
    </div>
  )
}
