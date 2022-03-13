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
      setAsset(results.data);
    } catch(error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideo();
    fetchAsset();
  }, []);

  return (  
    <div>
      <AssetDetail asset={asset}/>
      {video?.map(video => (
        <li key={video.id}>
          <MediaPlayer key={video.key} video={video}/>
        </li>  
      ))}
    </div>
  );
};

export default AssetDetails;