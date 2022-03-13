import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import PopularDetails from '../components/ContentDetails/PopularDetails';

const NotFound = () => {
  
  const [popular, setPopular] = useState([]);
  const fetchCategories = async () => {
    try {
      const { data: results } = await axios.get(
        'https://video-proxy.3rdy.tv/api/vod/popular'
      );
      setPopular(results.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
      fetchCategories();
  }, []);

  return (
    

    <div>
      <Grid container >
        {popular?.map(popular => (
          <Grid item md={4} key={popular.id}>
            <PopularDetails popular={popular}/>
          </Grid> 
        ))}
      </Grid>
    </div>
    
  )
}

export default NotFound
