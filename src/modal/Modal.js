import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import ReactDOM from 'react-dom';
import { Overview, Description } from '../style/layoutModal';
import {PopUp, TitleModal, TitleModalBrand, ImageModal, ButtonTabModal, ButtonClose} from '../style/layoutModal';


const Modal = ({product, toggle}) => {
    return (
        ReactDOM.createPortal(
            <React.Fragment>
                <Overview>
                    <PopUp>
                        <ButtonClose onClick={toggle}>X</ButtonClose>
                        <TitleModal>{product.general.name}</TitleModal>
                        <TitleModalBrand>{product.brand.name}</TitleModalBrand>
                        <ImageModal src={product.images.primary.large} alt={product.general.name} />
                        <Description>{ReactHtmlParser(product.general.description)} </Description>
                        <ButtonTabModal>Add To The Cart </ButtonTabModal>
                    </PopUp>
                </Overview>
            </React.Fragment>, document.body
        )
    )     
}   
export default Modal;