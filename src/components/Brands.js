import React from 'react'
import Product from './Product'
import dwa from '../assets/dwa.jpg'
import cooker from '../assets/cooker.jpg'
import s7 from '../assets/s7.jpg'
import smart from '../assets/smart.jpg'

const Brands = () => {
    return (
        <div id="category-row">
            <div className="category-menu">
                <h4>BRANDS</h4>
                <ul>
                    <li>ACNE</li>
                    <li>GRUNE ERDE</li>
                    <li>ALBIRO</li>
                    <li>RONHILL</li>
                    <li>ODMOLLY</li>
                    <li>BOUDESTIJIN</li>
                    <li>GUCCI</li>
                    <li>SONY</li>
                    <li>NIKE</li>
                </ul>
            </div>
            <div id="category-catalog">
                <h4>OFFERS FOR YOU</h4>
                <div className="catalog-row">
                    <Product image={dwa} name={'Body lotion'} price={'100'}/>
                    <Product image={s7} name={'Samsung S7 edge'} price={'28,999'}/>
                    <Product image={smart} name={'Smart watch'} price={'999'}/>
                    <Product image={cooker} name={'Mika standing cooker'} price={'16,000'}/>
                </div>
            </div>
        </div>
    )
}

export default Brands
