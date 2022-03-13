import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Grid} from "@material-ui/core";
import PopularDetails from '../components/ContentDetails/PopularDetails';

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from 'redux';
// import { fetchPopular } from '../actions';

// const Popular = () => {
//   const [popular, setPopular] = useState([]);
//   useEffect(() => {
//     fetchPopular(popular);
//     setPopular({ popular: popular})
// }, []);
// console.log(popular);


// return (
//   <Grid container >
//       <Grid item md={4} key={popular.id}>
//           <PopularDetails popular={popular}/> 
//       </Grid> 
//   </Grid>
// );
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPopular }, dispatch);
// }

// export default connect(null, mapDispatchToProps)(Popular);

const Popular = () => {
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
    <Grid container >
        {popular?.map(popular => (
          <Grid item md={4} key={popular.id}>
              <PopularDetails popular={popular}/>
      </Grid> 
      ))}
    </Grid>
  );
};

export default Popular;