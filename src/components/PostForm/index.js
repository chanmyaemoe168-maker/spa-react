import React, { useState } from 'react'
import './index.css'

export default function Index() {
  let [title , setTitle] = useState("")
  return (
    <form className = "post-form">
        <h1>Create Post</h1>
        <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type = "text" onChange={(e) => setTitle(e.target.value)}/>     
        </div>
        <p>{title}</p>
        <div className="form-control">
            <button>Post</button>
        </div>
            


    </form>
  )
}
