import React from 'react'
import { NavLink } from 'react-router-dom';

const CategoriesDetails = ({ categories }) => {
    // console.log(category.poster_path);
  return (
    <div className="category_card" id="bright">
        <div className="info_section">
            <div className="categories_header">
                <NavLink to='/movies' style={{ textDecoration: 'none' }}>
                    {categories.name}
                </NavLink>
        </div>
    </div>
    </div>
  )
}

export default CategoriesDetails
