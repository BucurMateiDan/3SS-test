import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Grid} from "@material-ui/core";
import CategoryDetails from '../components/ContentDetails/CategoryDetails';


const MoviesByCategory = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);

  //fetch categories
  const fetchCategory = async () => {
    try {
      const { data: results } = await axios.get(
        'https://video-proxy.3rdy.tv/api/vod/category/28/assets/?page=1&size=20'
      );
      setCategory(results.data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setIsErr(true);
    }
  };
  
  useEffect(() => {
      fetchCategory();
  }, []);
  
  return (
    <Grid container >
      
        {category?.map(category => (
          <Grid item md={4}>
          <CategoryDetails category={category}/>
       
      </Grid> 
      ))}
    </Grid>
  );
};

export default MoviesByCategory;