import React, { useState } from 'react';
import './Cart.css';
import { useCart } from './CartContext/CartContext';

function Cart() {
    const [cartOpen, setCartOpen] = useState(false);
    const { cart, removeFromCart,totalAmount } = useCart();

    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };

    return (
        <div className="cart">
            <div className='openCart' onClick={toggleCart}>
                <div className="cart-icon" >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        {/* <img src="cart-icon.png" alt="" /> */}
                        <span>Cart</span></div>
                    <div className="cart-count">{cart.length}</div>
                </div>
            </div>

            {cartOpen && (
                <div className="cart-container">
                    {cart.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <img src={item.imageUrl} alt={item.title} />
                            <div className="item-details">
                                <div className="title">{item.title}</div>
                                <div className="price">${item.price}</div>
                                <div className="quantity">Quantity: {item.quantity}</div>
                            </div>
                            <button className="remove-button" onClick={() => removeFromCart(item)}>Remove</button>

                        </div>
                    ))}
                    <div className='totalAmount'>
                        <h4>Total Amount</h4>
                        <span>${totalAmount.toFixed(2)}</span>
                    </div>
                    <div className='checkOut'>
                        {/* <button type="submit"><Link to="/checkout">Checkout Now!</Link></button> */}
                        <button type="button" onClick={() => alert('Thank you For Shoping here!!')}>Checkout Now!</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
