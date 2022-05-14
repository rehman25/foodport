/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addToBasket } from './features/BasketSlice';
import resstyle from '../styles/resbox.module.css';
import Image from 'next/image';


function ResFood({obj}) {
  const dispatch = useDispatch();
  const addItemsToBasket = () => {
    const product = obj.data()   
    dispatch(addToBasket(product))

}
  return (
        <div className={resstyle.inner_item_div}>
                   <img src={obj?.data().image}/>   
                  <h5>{obj?.data().title}</h5>
                  <p> ${obj?.data().price}</p>
                  <p onClick={addItemsToBasket}>Add to Cart</p>
        </div>
  )
}

export default ResFood