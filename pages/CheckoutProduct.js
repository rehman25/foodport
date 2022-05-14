import React from 'react'

function CheckoutProduct({img,title,description,price,_id,remail,price_total,quantity}) {
 
    return (
        <div className='mt-3 mb-3'>
            <div className="foodport_items_checkout">
                <img src={img} className="img-fluid" alt="" />
                <div className="foodMain_checkout">
                    <h4 className="food_checkout_title">{title}</h4>
                    <p className="food_checkout_descriptionsss">{description}</p>
                    <h5 className="pricetags_checkout">${price}</h5>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
