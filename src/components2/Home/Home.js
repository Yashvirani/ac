import React from 'react'
import './Home.css';
import Product from '../Product/Product';

function Home() {
    
    return (
        <div className="home"> 
            <img 
            src="https://i.computer-bild.de/imgs/6/3/7/5/8/7/7/f19043122733add5.jpg"
            alt=""
            className="home__image">
            </img>
            <div className="home__row__2">
                <Product 
                id="1"
                title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
                price={11.11}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"/>
                <Product 
                id="1"
                title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
                price={11.11}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"/>
            </div>
            <div className="home__row__3">
                <Product 
                id="1"
                title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
                price={11.11}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"/>
                <Product 
                id="1"
                title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
                price={11.11}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"/>
                <Product 
                id="1"
                title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
                price={11.11}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"/>
            </div>
            <div className="home__row__1">
                <Product 
                id="1"
                title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
                price={11.11}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"/>
                
            </div>
            
            
        </div>
    )
}

export default Home;
