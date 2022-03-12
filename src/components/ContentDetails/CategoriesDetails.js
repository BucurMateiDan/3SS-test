import React from 'react'
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const CategoriesDetails = ({ categories }) => {
    // console.log(category.poster_path);
  return (
    <div className="category_card" id="bright">
        <div className="info_section">
            <div className="category_header">
                <NavLink to='/movies'>
                    {categories.name}
                </NavLink>
                
            {/* <div class="blur_back bright_back">
                {<img src="/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" />}
            </div> */}
        </div>
    </div>
    </div>
  )
}

export default CategoriesDetails
