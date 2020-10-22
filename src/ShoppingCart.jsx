import React, { Component } from 'react';
import ProductsList from './ProductsList';

class ShoppingCart extends Component {
    
    state = {
        cartItems: [
            {
                id: '1',
                name: 'Банан',
                price: 10,
            },

            {
                id: '2',
                name: 'Яблоко',
                price: 8,
            },
        
            {
                id: '3',
                name: 'Папайя',
                price: 10,
            },
        
        ],
    };
    
    render() {
       
        return (
            <div className="column">
             <ProductsList cartItems={this.state.cartItems} />
            </div>
        );
    }
}

export default ShoppingCart;