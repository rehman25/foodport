/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect} from 'react'
import Router from 'next/router';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { selectResturant } from '.././components/features/ResSlice';
// import Item from 'antd/lib/list/Item';
import server from '../config';
const YelpTabs = (props) => {
    console.log();
    const router = useRouter();
    const dispatch = useDispatch();
    const { address} = props
    const YELP_API_KEY ="Aapdi_gIFzHZhFPlM2FNzdSXXyA5RNko6A6z8zrz62UzHcWlgf_DQ3C_w0TSqsDEst4fLd8Y5rcYpP8WMgXnDAjA4jxHxJ4zs8NUmBMkRTFYeQwbPz4Yro40Qcl-YnYx";

    const [restaurantsFromYelp, setRestaurantsFromYelp ] = useState([])

  

    const getRestaurantsFromYelp = async() => {
        const data = await axios.get(
          `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?term=restaurants&location=${address}&limit=10&client_id=${YELP_API_KEY}&client_secret=${YELP_API_KEY}` ,
          {
            headers: {
              Authorization: `Bearer ${YELP_API_KEY}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Access-Control-Allow-Origin' : '*'

             
    
            },
            
          },
        )
      
        .then((json) => {
             setRestaurantsFromYelp(
                json.data.businesses
               )
          
            console.log({ items: json.data.businesses  });
        })
        .catch(err => {
          console.log(err);
        });
      };

      useEffect(() => {
        getRestaurantsFromYelp()
    },[address])
    const openResturant = () => {
        let payload = restaurantsFromYelp[0]
        dispatch(selectResturant(payload));
        router.push('/resboxs', restaurantsFromYelp[0])
    }
    // function handleClickedd() {
    //     router.push({ pathname: "/addFood", state: obj });

    // }
    console.log('rehman', )

    return (
    
                <>
                <div className='col-lg-12 mt-5 res_item_shadow'>
                    {console.log("Res",restaurantsFromYelp)}
                    {restaurantsFromYelp.map((items,index) => {
                        return(

                   
            <div className='res_box_item' >
                <img src={items.image_url} alt="" onClick={openResturant} />
                <div className='rating_box'>
                    <h6 className='box_item_head_one'>{items.name}</h6>
                    {/* <i className="fas fa-star">{items.rating}</i>
                    <i className="fas fa-star">{items.rating}</i>
                    <i className="fas fa-star">{items.rating}</i>
                    <i className="fas fa-star">{items.rating}</i> */}
                    <i className="fas fa-star-half-alt"></i>
                    <br />
                    <span className='box_text mt-1'>
                        <i className="fas fa-exclamation-circle item_icon"></i>
                        <p>{items.location.address1}</p>
                    </span>
                    <span className='box_text mt-1'>
                        <i className="fas fa-fire-alt"></i>
                        <p className='overFlow_pra'>{items.display_phone}</p>
                    </span>
                    <span className='box_text mt-2 pb-3'>
                        <i className="far fa-comment-alt"></i>
                        <p className='overFlow_pra'>{items.name}</p>
                    </span>
                    <span className='box_text mt-4'>
                        <i className="fas fa-check"></i>
                        <p>Deliver</p>

                        <i className="fas fa-check ml-5"></i>
                        <p>Takeout</p>
                    </span>
                </div>
            </div>
             )})}
        </div>
        </>
          
        
    )
}
export default YelpTabs;