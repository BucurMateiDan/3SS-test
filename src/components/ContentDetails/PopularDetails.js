import React from 'react'
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const PopularDetails = ({ popular }) => {
const img = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="category_card" id="bright">
        <div className="info_section">
            <div className="category_header">
            <NavLink to='/asset'>
            <img className="poster" style={{width:"200px"}}
                src={img + popular.poster_path} />
            </NavLink>
                <h1>
                    {popular.title}
                </h1>
                <h4>
                    Release date: {popular.release_date}
                </h4>
                <span className="minutes"> Rating: {popular.vote_average} </span>
            </div>
            <div className="movie_desc">
                <p className="test">Description: {popular.overview}</p>
            </div>
            <div 
                style={{
                    display: "flex",
                    margin: "5px",
                    justifyContent: "flex-start",
                }}
            >
            </div>
        </div>
    </div>
  )
}

export default PopularDetails