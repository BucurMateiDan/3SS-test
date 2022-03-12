import React from 'react'
import { Button } from '@material-ui/core';
import { MediaPlayer } from '../../container/MediaPlayer';

const CategoryDetails = ({ category }) => {
    // console.log(category.poster_path);
  return (
    <div className="category_card" id="bright">
        <div className="info_section">
            <div className="category_header">
                <h1>
                    {category.title}
                </h1>
                <h4>
                    Release date: {category.release_date}
                </h4>
                <span className="minutes"> Rating: {category.vote_average} </span>
            </div>
            <div className="movie_desc">
                <p className="test">Description: {category.overview}</p>
            </div>
            <div 
                style={{
                    display: "flex",
                    margin: "5px",
                    justifyContent: "flex-start",
                }}
            >
                <div style={{ margin: "5px" }}>
                    <li>
                        <MediaPlayer/> 
                    </li>    
                </div>    
            </div>
            {/* <div class="blur_back bright_back">
                {<img src="/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" />}
            </div> */}
        </div>
    </div>
  )
}

export default CategoryDetails
