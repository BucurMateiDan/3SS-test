import React from 'react';
import { useEffect } from 'react';
import { MediaPlayer } from '../container/MediaPlayer';



const AssetDetails = () => {
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://video-proxy.3rdy.tv/api/vod/asset/36647')
      .then((response) => {
        // console.log(response);
        response.json().then((data) => {
          // console.log(data);
        });
      });
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  return (
    <div>
      <MediaPlayer />
    </div>
  );
};

export default AssetDetails;