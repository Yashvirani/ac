import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import './Checkout.css';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../SubTotal/SubTotal';


function Checkout() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt="">
                </img>

                {basket?.length === 0 ?  (
                    <div>
                        <h2>Your Shopping Cart is Empty.</h2>
                        <p>You have no items in your cart. Add some items to your cart.</p>
                    </div>
                ):(
                    <div>
                        <h2 className="checkout__title">Your Shopping Cart</h2>
                        {basket.map( item => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}/>
                        ))}
                    </div>
                )}
            

            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
            
        </div>
    );
}

export default Checkout
