import React, { useContext, useState } from 'react'

import { Scrollbars } from 'react-custom-scrollbars-2'
import Items from './Items'
import './Cart.css';
import { cartItem } from './Cart';
import arrow from "./Images/arrow.png"
import cart1 from "./Images/cart.png" 

const Cartdetail = () => {
    const {totalAmount, totalItem, item, clearCart } = useContext(cartItem);

    if (item.length === 0) {
        return <>
            <header>

                <div className="continue-shopping">


                    <img src={arrow} alt="arrow" srcset="" className="arrow-icon" />
                    <h3>Continue shopping</h3>



                </div>
                <div className="cart-icon">
                    <img src={cart1} alt="cart" />
                    <p>{totalItem}</p>


                </div>




            </header>
            <section className="main-cart-section">

                <h1>Shopping Cart</h1>
                <p className="total-items">you have <span className="total-items-count">{totalItem}</span> item in shopping cart</p>
            </section>
        </>
    }

    return (
        <>
            <header>

                <div className="continue-shopping">


                    <img src={arrow} alt="arrow" srcset="" className="arrow-icon" />
                    <h3>Continue shopping</h3>



                </div>
                <div className="cart-icon">
                    <img src={cart1} alt="cart" />
                    <p>{totalItem}</p>


                </div>




            </header>
            <section className="main-cart-section">

                <h1>Shopping Cart</h1>
                <p className="total-items">you have <span className="total-items-count">{totalItem}</span> item in shopping cart</p>

                <div className="cart-items">


                    <div className="cart-items-container">
                        <Scrollbars>
                            {item.map((ele, i) => {
                                return (
                                    <>
                                        <Items index={i}{...ele} />
                                    </>)
                            })}
                        </Scrollbars>

                    </div>

                </div>

                <div className="card-total">
                    <h3>Cart Total : <span>{`₹ ${totalAmount} `} </span></h3>
                    <button>Checkout</button>
                    <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                </div>

            </section>
        </>
    )
}

export default Cartdetail;
