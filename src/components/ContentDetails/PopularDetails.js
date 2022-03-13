import React from 'react'
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
                <h3>
                    Release date: {popular.release_date}
                </h3>
                <h4> Rating: {popular.vote_average} </h4>
            </div>
        </div>
    </div>
  )
}

export default PopularDetails