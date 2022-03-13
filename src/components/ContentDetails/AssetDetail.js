import React from 'react'
import MediaPlayer from '../../container/MediaPlayer'

const AssetDetail = ({ asset }) => {
const img = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="category_card" id="bright">
        <div className="info_section">
            <div className="category_header">
            <img className="poster" style={{width:"200px"}}
                src={img + asset.poster_path} />
                <h2>
                    {asset.title}
                </h2>
        </div>
    </div>
    </div>
  )
}

export default AssetDetail