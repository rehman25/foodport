
import React from 'react'
import styles from '../styles/success.module.css'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";

function Order({obj}) {

   
    const router = useRouter();
    const  dispatch = useDispatch();
   const data= ()=> {

       router.push('/foodItem', obj);
   }
    const openResturant=()=>{
        let data = obj
         dispatch(selectResturant(payload));
        router.push('/resbox', obj)
      }
      function handleClickedd() {
        router.push({ pathname: "/addFood", state: obj });

      }
   



return (
<>
    <p>orders</p>
    <div className={styles.order_box}>
        <div className={styles.order_head}>
            <div className={styles.header_txt}>
                <h6>Order Placed by {obj?.data().email}</h6>
              
            </div>&nbsp;&nbsp;
            <div className={styles.header_txt}>
                <h6>Total ${obj?.data().amount}</h6>
                <p> - Next Day delivery $0.00</p>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.header_txt2}>
             
            </div>

        </div>
         <div className={styles.order_content}>
        {obj.data().images?.map(image => (
                <img  className={styles.order_img} src={image} loading="lazy" alt="" />
                ))}
        </div> 
        </div>
        </>
    )
    }
    
    export default Order;