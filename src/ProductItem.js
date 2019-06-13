import React from 'react';
import { Product, Title, Image, ButtonViewMore, ButtonAdd } from './style/Layout';
import Modal from './modal/Modal';
import useModal from './modal/modal.state';

const ProductItem = ({product}) => {
    const {isShowing, toggle} = useModal();
    return (
        <>
        <Product>
            <Title>{product.general.name}</Title>
            <Image src={product.images.primary.large} alt={product.general.name} />
            <ButtonViewMore onClick={toggle}>View more</ButtonViewMore>
            <ButtonAdd>Add To The Cart </ButtonAdd>
        </Product>

        {isShowing ? <Modal product={product} toggle={toggle} /> : ''}
        </>
    );
}
export default ProductItem;