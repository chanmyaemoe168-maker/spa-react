import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import PostList from './components/PostList/index';
import Modal from './components/Modal';

export default function App() {
  let[showModal , setShowModal] = useState(false);

 
  let [posts , setPosts] = useState([
    {id: 1, title: "First Post"},
    {id: 2, title: "Second Post"},
    {id: 3, title: "Third Post"}
  ]);


  return (

    <>
    <Navbar setShowModal={setShowModal}/>

    <PostList post={posts}/>
    {showModal && <Modal>
    <h1>Terms and Conditions</h1>
    <button onClick={() => setShowModal(false)}>close</button>
    </Modal>}
    </>
  
  );

}


