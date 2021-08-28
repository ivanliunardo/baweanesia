import {axios} from "./axios";
import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import '../App.css';
import './BlogCards.css';
import {Button} from './Button';
import SearchBar from "./SearchBar";

function BlogCards(){
    const[blogCards, setBlogCards] = useState([]);

    useEffect(() =>{
        axios
        .get("/blog")
        .then(response => {
            console.log("Response:", response)
            setBlogCards(response.data)
        })
        .catch((err) => {
            console.log("Error:", err)
        })
    }, []);

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filterCards = (blogCards, query) => {
        if (!query) {
            return blogCards;
        }
    
        return blogCards.filter((post) => {
            const postName = post.title.toLowerCase();
            return postName.includes(query)
        });
    };

    const filteredCards = filterCards(blogCards, searchQuery.toLocaleLowerCase());

    return(
        <div className='blog-container'>
            <h1 data-aos='fade-up'>Tulisan Kami!</h1>
            <div className='blog-card-container' >
                <div className='blog-card-wrapper'>
                    <div className='searchbox' data-aos='fade-up'>
                        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeholder="Cari Blog..."/>
                    </div>
                    <ul data-aos='fade-up' className='blog-card'>
                        {filteredCards.map(post => (
                            <div key={post.id}>
                            <li data-aos='fade-up' className='blog-cards-item'>
                                <div className='blog-card-link'>
                                    <figure className='blog-card-pic-wrap' data-category={post.title}>
                                        <img
                                            className='blog-card-img'
                                            alt={post.title}
                                            src={post.img}
                                        />
                                    </figure>
                                    <div className='blog-card-info'>
                                        <h5 className='blog-card-title'>{post.title}</h5>
                                        <h6 className='blog-card-author'>{post.author}</h6>
                                        <h6 className='blog-card-published'>{post.published_at}</h6>
                                        <h6 className='blog-card-desc'>{post.desc.slice(0,300)}...</h6>
                                        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>
                                            <Link to={`/blog/${post.id}`}>Read more</Link>
                                        </Button>
                                    </div>
                                </div>
                            </li>
                            </div>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BlogCards
