/* eslint-disable react/jsx-no-undef */
import React,{ useState } from 'react';
import {useDispatch} from 'react-redux';




function CheckoutPro({img,title,description,price,_id,remail}){
    const dispatch=useDispatch()
    const removeItemFromBasket=()=>{
    dispatch(removeFromBasket({_id}))
    }
    const [style, setStyle] = useState("fg");
    const changeStyle = () => {
        console.log("you just clicked");
      
        setStyle("fgt");
      };
    return (
         <div className="col-lg-4 col-md-6 mt-3">
            <div className="foodport_items">
               <span className="decrement"><i className="far fa-times-circle"></i></span>
               <img src={img} alt="" className  ="img-fluid" />
               <div className="foodMain">
                  <h4 className="food_title">{title}</h4>
                  <p className="food_descriptionsss">{description}</p>
                  <h5 className="pricetags">${price}</h5>
               </div>
            </div>
         </div> 
    )
}

export default CheckoutPro
