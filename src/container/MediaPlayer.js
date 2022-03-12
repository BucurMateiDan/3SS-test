import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";
import MoviesByCategory from '../pages/MoviesByCategory';

// export class MediaPlayer extends Component {

//   constructor() {
//     super()
//     this.state = {
//       isOpen: false
//     }
//     this.openModal = this.openModal.bind(this)
//   }

//   openModal() {
//     this.setState({ isOpen: true })
//   }

//   render() {
//     const movie = ({ movie }) => {
//       return (
//         <React.Fragment>
//           <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={movie.key}
//             onClose={() => this.setState({ isOpen: false })}
//           />
//           <button onClick={this.openModal}>Watch movie</button>
//         </React.Fragment>
//       )
//     }
//   }
// }

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
