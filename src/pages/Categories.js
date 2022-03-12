import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Grid} from "@material-ui/core";
import CategoriesDetails from '../components/ContentDetails/CategoriesDetails';


const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);

  //fetch categories
  const fetchCategories = async () => {
    try {
      const { data: results } = await axios.get(
        'https://video-proxy.3rdy.tv/api/vod/category'
      );
      console.log(results);
      setCategories(results.data.genres);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setIsErr(true);
    }
  };
  
  useEffect(() => {
      fetchCategories();
  }, []);
  
  return (
    <Grid container >
      
        {categories?.map(categories => (
          <Grid item md={4}>
          <CategoriesDetails categories={categories}/>
       
      </Grid> 
      ))}
    </Grid>
  );
};

export default Categories;