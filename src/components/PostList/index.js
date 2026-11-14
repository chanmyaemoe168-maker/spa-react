import React from 'react'
import './index.css'

export default function PostList({ post }) {
    return(
        <div className='postlist' container>
            {post.map((post) => (
                <div className='single-post' key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.status}</p>
                </div>
            ))}
        </div>
    )
}
