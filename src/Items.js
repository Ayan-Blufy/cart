import React,{ useContext, useState } from 'react';
import { cartItem } from './Cart';


const Items = (props) => {
    const {removeItem,inc,dec}=useContext(cartItem);
    
    return (
        <>
            <div className="items-info" key={props.id} >


                <div className="product-img ">
                    <img src={props.img} alt="item" />

                </div>
                <div className="title">

                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="add-minus-quantity">
                    <i className="fas fa-minus minus" onClick={()=>dec(props.index)}/>
                    <input type="text" placeholder={props.quantity} />
                    <i className="fas fa-plus add" onClick={()=>inc(props.index)}/>
                </div>
                <div className="price">
                    <h2>{props.price}</h2>
                </div>
                <div className="remove-item">
                    <i className="fas fa-trash-alt remove" onClick={()=>removeItem(props.index)}/>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Items
