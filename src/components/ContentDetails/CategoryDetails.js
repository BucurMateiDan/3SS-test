import React from 'react'
import { NavLink } from 'react-router-dom';

const CategoryDetails = ({ category }) => {
    // console.log(category.poster_path);
    const img = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="category_card" id="bright">
        <div className="info_section">
            <div className="category_header">
                <NavLink to='/asset'>
                <img className="poster" style={{width:"200px"}}
                src={img + category.poster_path} />
                </NavLink>
                <h1>
                    {category.title}
                </h1>
                <h3>
                    Release date: {category.release_date}
                </h3>
                <h4 > Rating: {category.vote_average} </h4>
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
            </div>
        </div>
    </div>
  )
}

export default CategoryDetails
