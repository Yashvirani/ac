import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    const RemoveFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""></img>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map( x => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button onClick={RemoveFromBasket}>Remove From Cart</button>
            </div>
        </div>
        
    )
}

export default CheckoutProduct;
