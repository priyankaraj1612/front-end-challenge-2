import React, { Component } from 'react';
import PropTypes from 'prop-types';
import product from './product.json';
import './App.css';

const rootClass = 'product-list';

/* LIST ITEM */
const ProductListItem = ({ itemData }) => {
    const itemClass = `${rootClass}__item`;
    return (
        <div>
            <li className={itemClass}>
                {itemData.id}
            </li>
            <img src={itemData.image} alt="" />
        </div>
    );
};

ProductListItem.propTypes = {
    itemData: PropTypes.object.isRequired,
};

/* LIST */
const ProductList = ({ listData }) => {
    const listItems = listData.map((itemData, index) => (
        <ProductListItem key={index} itemData={itemData} />
    ));

    return (
        <ul className={rootClass}>
            {listItems}
        </ul>
    );
};

ProductList.propTypes = {
    listData: PropTypes.array.isRequired,
};

class ProductPage extends Component {

    render() {
        return (
            <ProductList listData={product} />
        );
    }
}

export default ProductPage;
