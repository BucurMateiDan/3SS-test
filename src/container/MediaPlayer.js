import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";

const MediaPlayer = ({ video }) => {

	const [isOpen, setOpen] = useState(false)
	return (
		<React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={video.key} onClose={() => setOpen(false)} />

			<button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
		</React.Fragment>
	)
}

export default MediaPlayer
