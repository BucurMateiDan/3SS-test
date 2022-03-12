import React, {Component} from 'react';
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";

export class MediaPlayer extends Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <React.Fragment>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='5Byeq_hyh2U' 
        onClose={() => this.setState({isOpen: false})}
         />
        <button onClick={this.openModal}>Watch movie</button>
      </React.Fragment>
    )
  }
}
