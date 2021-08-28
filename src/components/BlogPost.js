import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { axios } from './axios';
import '../App.css'
import './BlogPost.css'

function BlogPost({match}){
    const[blogPost, setBlogPost] = useState([]);

    useEffect(() =>{
        axios
        .get(`/blog/?id=${match.params.id}`)
        .then(response => {
            console.log('Response:', response)
            setBlogPost(response.data)
        })
        .catch((err) =>{
            console.log('Error:', err)
        })
    }, []);

    return(
        <div>
            <div className='back'>
                <Link to='/blog'>Lihat Tulisan Lainnya</Link>
            </div>
            {blogPost.map((post) =>(
                <div className='blog-post-container' key={post.id}>
                    <h1 className='blog-post-title' data-aos='fade-up'>{post.title}</h1>
                    <div className='blog-post-author-container' data-aos='fade-up'>
                    <i class="fas fa-user fa-sm"></i>
                    <h5 className='blog-post-author'>{post.author}</h5>
                    </div>
                    <div className='blog-post-published-container' data-aos='fade-up'>
                    <i class="far fa-clock fa-sm"></i>
                    <h5 className='blog-post-published'>{post.published_at}</h5>
                    </div>
                    <div className='blog-post-image-container' data-aos='fade-up'>
                        <img className='blog-post-image' src={post.img}/>
                    </div>
                    <p className='blog-post-paragraph' data-aos='fade-up'>{post.desc}</p>
                </div>
            ))}
        </div>
    )

}

export default BlogPost