import React, { useState } from 'react'
import './index.css'

export default function Index({addPost}) {
  let [title , setTitle] = useState("")
  let [status , setStatus] = useState("upcoming")
  let resetForm = () => {
    setTitle("")
  }

  let upload_post = (e) => {
    e.preventDefault();
    let post = {
      id:Math.floor(Math.random() * 1000),
      title:title,
      status:status
    }
    resetForm()
    addPost(post)  
  }

  return (
    <form className = "post-form" onSubmit = {upload_post}>
        <h1>Create Post</h1>
        <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type = "text" onChange={(e) => setTitle(e.target.value)} value={title}/>     
        </div>
        <div className="form-control" >
            <label htmlFor="title">Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option vaule="dropped">Dropped</option>
              <option value="ongoing">Ongoing</option>
              <option value="upcoming">Upcoming</option>           
            </select>   
        </div>
        <div className="form-control">
            <button type='submit'>Post Now</button>
        </div>
   </form>
  )
}
