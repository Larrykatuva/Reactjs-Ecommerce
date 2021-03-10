import React from 'react'
import Pc1 from '../../assets/pc1.jpg'
import Profile from '../../assets/p5.jpg'
import {AiFillStar, AiOutlineMessage} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
import {GoVerified, GoLocation} from 'react-icons/go'
import {CgDanger} from 'react-icons/cg'
import {RiAlarmWarningLine} from 'react-icons/ri'
import Product from '../Home/Product'
import shoe from '../../assets/shoe.jpg'
import watch from '../../assets/watch.jpg'
import molfix from '../../assets/molfix.jpg'

const Index = () => {
    return (
        <div>
            <div id='p-row'>
                <div className="p-left">
                    <div>
                        <img src={Pc1} alt=""/>
                        <div className="p-images">
                            <img src={Pc1} alt=""/>
                            <img src={Pc1} alt=""/>
                            <img src={Pc1} alt=""/>
                            <img src={Pc1} alt=""/>
                        </div>
                    </div>
                    <div className="p-info">
                        <h3><span>HP 200 G3 All-in-one computer</span><span>love</span></h3>
                        <p>Brand <span><a href="">Similar products</a></span></p>
                        <p>Condition <span><a href="">Refurbished product</a></span> </p>
                        <p className="p-rating"><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <span>(rating)</span></p>
                        <hr/>
                        <h4 className="p-price">Ksh 63,999</h4>
                        <h4 id='offer'><span id='p-o-price'>75,000</span><span id='p-offer'>13%</span></h4>
                        <a href="" className="btn-block">Add To Cart</a>
                    </div>
                </div>
                <div className="p-right">
                    <div className="p-right-top">
                        <img src={Profile} alt=""/>
                        <div>
                            <p className="p-seller"><a href="">Gobinda Poddar</a></p>
                            <p className="p-seller-rating">
                                <span className="last-seen">Last seen 9hrs ago</span>
                                <span className="seller-trust"><GoVerified id='verified'/>On App from: 1 Jul 2018</span>
                            </p>
                            <a href="" className="seller-contact"><FiPhoneCall id='icon'/>Contact Seller</a>
                            <a href="" className="seller-chat"><AiOutlineMessage id='icon'/>Chat Seller</a>
                            <hr/>
                            <p className="p-location"><GoLocation id='icon'/>Uasin Gishu, Eldoret CBD</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="p-row">
                <div className="description">
                    <h4 className="p-description">Description</h4>
                    <hr/>
                    <div className="description-row">
                        <div className="key-features">
                            <h4 className="title">Key Features</h4>
                            <p>8th Generation Intel® Core™ i3- Processor (3MB Cache, up to 3.0 GHz)]</p>
                            <p>1000gb/1 TB 5400 rpm Hard Drive </p>
                            <p>4GB, DDR4,(4GBx1)</p>
                            <p>22-inch FHD (1920 x 1080) IPS Anti-Glare LED-Backlit Narrow Border Display</p>
                            <p>HP All-In-One Desktop  - Keyboard and Mouse  - Power Cable</p>
                        </div>
                        <div className="specifications">
                            <h4>Specifications</h4>
                            <p><span>SKU</span>: HP246EL0DSZ6ANAFAMZ</p>
                            <p><span>Processor</span>: Intel Core i3</p>
                            <p><span>Display Size (in)</span>: 21.5</p>
                            <p><span>Operating System</span>: Free DOS </p>
                            <p><span>Memory Size (GB)</span>: 1000</p>
                            <p><span>RAM</span>: 4</p>
                        </div>
                    </div>
                </div>
                <div className="p-right p">
                    <h4 className="precautions">Precautions <span><CgDanger/></span></h4>
                    <hr/>
                    <p className="precaution">Check the items description before buying it.</p>
                    <p className="precaution">Meet in a safe place.</p>
                    <p className="precaution">Dont pay inadvance.</p>
                    <a href="" className="abuse"><span><RiAlarmWarningLine/></span> Report Abuse</a>
                </div>
            </div>
                <div id="category-catalog">
                    <h3>FEATURED ITEMS <span>SEE MORE</span></h3>
                    <div className="catalog-row product">
                        <Product image={Pc1} name={'Computer sales'} price={'70,000'}/>
                        <Product image={shoe} name={'Nike shoes'} price={'2,000'}/>
                        <Product image={watch} name={'Calvin clen'} price={'9,999'}/>
                        <Product image={molfix} name={'Molfix baby pants'} price={'600'}/>
                        <Product image={molfix} name={'Molfix baby pants'} price={'600'}/>
                    </div>
                </div>
        </div>
    )
}

export default Index
