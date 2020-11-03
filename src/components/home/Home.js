import React from 'react';
import './Home.css';
import spices from '../../images/spices.jpg';
import cinamon from '../../images/cinamon.jpg'
import Product from '../product/Product.js';

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img src={spices} alt="" className="home-image"/>
                
            <div className="home-row">
                <Product title="Cinamon"
                         price={9.99}
                         image={cinamon}
                         rating={4} />
                <Product />
            </div>

            <div className="home-row">
                <Product />
                <Product />
                <Product />
            </div>

            <div className="home-row">
                <Product />
            </div>
            </div>
        </div>
    )
}

export default Home
