
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addToBasket } from '.././components/features/BasketSlice';
import resstyle from '../styles/resbox.module.css';
import Image from 'next/image';
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from '.././components/features/BasketSlice';
function ResFood({obj}) {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const addItemsToBasket = async () => {

    const product = obj.data()   
   
    const remail=  await items.map(item=>item.remail)
     console.log("Items",remail[0]);


  if(remail[0] && (localStorage.getItem('remail',undefined)) ) {
      console.log("first remail",remail[0]);
      
      localStorage.setItem("remail",remail[0])
      //add item to basket
      dispatch(addToBasket(product));
    }
    else if(remail[0] && (localStorage.getItem('remail',remail[0]))) {
      console.log("already remail",remail[0]);
      //add items to basket
      dispatch(addToBasket(product));
    }
  //  else if((localStorage.getItem('remail',remail[0])) && !(localStorage.getItem('remail',undefined))) {
    //     console.log("invalid remail",remail[0]);
    //     confirm("This item is from another restaurant if you agree your cart will be cleared")
    //     // localStorage.clear("remail")
    
    //   }
    else {
      console.log("No items" ,remail[0]);
    await localStorage.setItem("remail",remail[0]) &&
      dispatch(addToBasket(product));
    }
  }
    

  return (
        <div className={resstyle.inner_item_div}>
                   <img src={obj?.data().image}/>   
                  <h5>{obj?.data().title}</h5>
                  <p> ${obj?.data().price}</p>
                  <button onClick={addItemsToBasket}>Add to Cart</button>
        </div>
  )
}

export default ResFood