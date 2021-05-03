import { Component } from "react";
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');


class Modal extends Component {

    handleKeyDown = event => {

        if(event.code === 'Escape') {
            this.props.onClose();
        }
    }
    handleOverlay = event => {

        if(event.target ===event.currentTarget) {
            this.props.onClose()
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }


    render () {
        return createPortal(
        <div
        onClick={this.handleOverlay} 
        className={styles.overlay}>
          <div className={styles.modal}>
            <img src={this.props.src} alt={this.props.alt} />
          </div>
        </div>, modalRoot) 
    }
}

export default Modal;