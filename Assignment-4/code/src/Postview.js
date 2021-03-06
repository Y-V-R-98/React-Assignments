import React from 'react';

import InstaLogo from "./images/logo.png";
import Camera from "./images/camera.png";
import Image from "./images/pic.jpg";
import './Postview.css';

import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Postview.css';
import HeartIcon from "./images/heart.png";
import OptionsIcon from "./images/more.png";s
import TagIcon from "./images/tag.png"

const Postview = () => {
  const [posts, setPost] = useState([])

    useEffect(() => {
      axios.get('http://localhost:3004/user')
        .then(res => {
            setPost(res.data)
        })
    }, [])
  const date=new Date().toDateString();
  return (
    <div className='site-container'>
      <div className='header-block'>
    <header>
      <img className='insta-logo' src={InstaLogo} alt="insta-logo"></img>
      <h1 className=''>Instaclone</h1>
      <img  className='camera-logo'src={Camera} alt='camera-logo'></img>
    </header>
    </div>
    <div className='post-container'>
      {posts.map(post=>{
        return (
          <div className="card">
            <div className='card-container'>
                <div className='user-datails'>
                    <div className="name-location"><h3 className="person-name">{post.name}</h3>
                    <p className="person-location">{post.location}</p></div>
                    <div className="more-icon"><img className="moreIcon" src={OptionsIcon} alt='options-icon'></img></div>
                </div>
                <div className='post-img'>
                    <img src={Image} width='500' height='400'alt='user posted img'></img>
                </div>
                <div className='post-info'>
                    <div className="icons"><img className='heart-icon'src={HeartIcon} alt='heartIcon'></img>
                    <img className='tag-icon'src={TagIcon} alt='tag-icon'></img>
                    <p className='likes'>{post.likes}</p></div>
                    <div ><p className="date">{date}</p></div>
                </div>
                <div >
                    <b><p className='post-discription'>{post.description}</p></b>
                </div>
            </div>
          </div>
        )
    })}
    </div>
    </div>

  );
}
export default Postview;