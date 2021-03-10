import React from 'react'
import Product from './Product'
import Pc1 from '../../assets/pc1.jpg'
import shoe from '../../assets/shoe.jpg'
import watch from '../../assets/watch.jpg'
import molfix from '../../assets/molfix.jpg'

const Category = () => {
    return (
        <div id="category-row">
            <div className="category-menu">
                <h4>CATEGORIES</h4>
                <ul>
                    <li>SPORTWEAR</li>
                    <li>MENS</li>
                    <li>WOMENS</li>
                    <li>KIDS</li>
                    <li>FASHION</li>
                    <li>HOUSEHOLDS</li>
                    <li>INTERIORS</li>
                    <li>CLOTHING</li>
                    <li>BAGS</li>
                </ul>
            </div>
            <div id="category-catalog">
                <h4>FEATURED ITEMS</h4>
                <div className="catalog-row">
                    <Product image={Pc1} name={'Computer sales'} price={'70,000'}/>
                    <Product image={shoe} name={'Nike shoes'} price={'2,000'}/>
                    <Product image={watch} name={'Calvin clen'} price={'9,999'}/>
                    <Product image={molfix} name={'Molfix baby pants'} price={'600'}/>
                </div>
            </div>
        </div>
    )
}

export default Category
