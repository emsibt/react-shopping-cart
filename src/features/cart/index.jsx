import React from 'react';
import PropTypes from 'prop-types';
import "./style.css"
Cart.propTypes = {
    cartItems: PropTypes.array,
    onClickRemoveItems:PropTypes.func,
};
Cart.defaultProps ={
    cartItems:[]
}
function Cart(props) {
    const {cartItems, onClickRemoveToCart} = props;
    function handleRemoveToCart(item){
        if(!onClickRemoveToCart) return;
        onClickRemoveToCart(item)
    }
    return (
        <div className='cart'>
            {cartItems.length === 0? (<div className="cart-header">Cart is empty</div>)
            :(<div className="cart-header">You have {cartItems.length} items in cart</div>)
            }
            <ul className ='cart-items'>
            {cartItems.map(item => (
                <li key ={item._id}>
                    <img src={item.image} alt={item.title}></img>
                    <div className="cart-right">
                        <p>{item.price + ".000VND" + " X"+item.count}</p>
                        <button onClick= {() => handleRemoveToCart(item._id)}>Remove</button>
                    </div>
                </li>
                ))}
            </ul>
            {cartItems.length !== 0 && (
                <div className="cart-total">
                    Total:{" "}
                {cartItems.reduce((a,c) => a + c.price * c.count, 0 ) + ".000VND"}
                <div className="cart process-button">
                    <button>Process</button>
                </div>
                </div>
            )}
            
        </div>
    );
}

export default Cart;