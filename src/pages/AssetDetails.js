import { Grid } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import MediaPlayer from '../container/MediaPlayer';

const AssetDetails = () => {
  const [video, setVideo] = useState([]);

  const fetchAsset = async() => {
    try {
      const {data: results } = await axios.get(
        'https://video-proxy.3rdy.tv/api/vod/asset/516486/videos'
      );
      setVideo(results.data.results);
    } catch(error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAsset();
  }, []);

  return (
    <Grid container >
      
        {video?.map(video => (
          <Grid item md={4}>
          <MediaPlayer video={video}/>
       
      </Grid> 
      ))}
    </Grid>
  );
};

export default AssetDetails;