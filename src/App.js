import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import PostList from './components/PostList/index';
import PostForm from './components/PostForm/index';
import Modal from './components/Modal';

export default function App() {
  let[showModal , setShowModal] = useState(false);

 
  let [posts , setPosts] = useState([
    {id: 1, title: "First Post", status: "ongoing"},
    {id: 2, title: "Second Post", status: "upcoming"}
  ]);


  let addPost = (post) => {
    setPosts([...posts, post])
    setShowModal(false)
  }


  return (

    <>
    <Navbar setShowModal={setShowModal}/>

    <PostList post={posts}/>
    {showModal && <Modal setShowModal={setShowModal}>
    <PostForm addPost={addPost}/> 
   
    </Modal>}
    </>
  
  );

}


