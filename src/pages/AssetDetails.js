import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import MediaPlayer from '../container/MediaPlayer';
import AssetDetail from '../components/ContentDetails/AssetDetail';

const AssetDetails = () => {
  const [video, setVideo] = useState([]);
  const [asset, setAsset] = useState([]);

  const fetchVideo = async() => {
    try {
      const {data: results } = await axios.get(
        'https://video-proxy.3rdy.tv/api/vod/asset/516486/videos'
      );
      console.log(results.data.results);
      setVideo(results.data.results);
    } catch(error) {
      console.error(error);
    }
  };
  const fetchAsset = async() => {
    try {
      const {data: results } = await axios.get(
        'https://video-proxy.3rdy.tv/api/vod/asset/36647'
      );
      console.log(results.data);
      setAsset(results.data);
    } catch(error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideo();
    fetchAsset();
  }, []);
  console.log(video);
  return (  
    <div>
      <AssetDetail asset={asset}/>
      {video?.map(video => (
          <MediaPlayer video={video}/>
      ))}
    </div>
            
       
      
  );
};

export default AssetDetails;