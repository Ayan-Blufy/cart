import React, { createContext, useEffect, useReducer } from 'react'
import Cartdetail from './Cartdetail';
import Productdata from './Productdata';
import reducer from './reducer';



const initialState = {
    item: Productdata,
    totalAmount: 0,
    totalItem: Productdata.length
};
const cartItem = createContext();
const Cart = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const removeItem = (id) => {
        return dispatch({
            type: 'REMOVE',
            payload: id,
        });
    }

    const inc = (id) => {
        return dispatch({
            type: 'inc',
            payload: id,
        })


    }
    const dec = (id) => {
        return dispatch({
            type: 'dec',
            payload: id,
        });


    }
    const clearCart = () => {
        return dispatch({
            type: 'CLEAR'
        });
    }

    useEffect(() => {
        dispatch({
            type: 'TOTAL'
        })
    }, [state.item]);
    return (
        <>



            <cartItem.Provider value={{ ...state, removeItem, clearCart, inc, dec }}>
                <Cartdetail />
            </cartItem.Provider>





        </>


    )
}

export default Cart
export { cartItem };