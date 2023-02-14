import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import css from './StickerModal.module.css'

const Backdrop = (props) =>{
    return <div className={css.backdrop} onClick = {props.onClose}></div>
};

const ModalOverlay = (props) =>{
    return <div className={css.modal} >
        <div className={css.content}>{props.children}</div>
    </div>
};

const StickerModal = (props) =>{
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick = {props.onClose}/>, document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </Fragment>
    );
}

export default StickerModal;