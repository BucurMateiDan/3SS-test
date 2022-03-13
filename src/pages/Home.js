import React, { useState, useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [error, setError] = useState([]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  const img = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    let isMounted = true;
    fetch('https://video-proxy.3rdy.tv/api/vod/popular')  
          .then((response) => response.json())
          .then((response) => {
              if(isMounted) {
                setPopular(response.data);
              }     
          })
          .catch((err) => {
            setError(err);    
          });
      return () => isMounted = false;
  }, []);
  
  return (
    <div className="parent">
    <Slider {...settings}>
     {popular?.map(popular => {
      return (
       <div key={popular.id} className="child">
        <NavLink to='/asset'>
            <img className="poster"  
            style={{width:"200px", marginTop:"80px", marginLeft: "80px", marginBottom: "20px"}}
                src={img + popular.poster_path} />
        </NavLink>
       </div>
      );
     })}
    </Slider>
   </div>
  );
};

export default Home;