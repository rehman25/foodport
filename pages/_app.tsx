/* eslint-disable react-hooks/exhaustive-deps */
import '../styles/globals.css'
import '../styles/basket.css'
import '../styles/Footer.css'
import '../styles/check_out.css'
import 'antd/dist/antd.css';
import '../styles/ressearch.css'
import '../styles/about.css'
import '../styles/faqs.css'
import '../styles/user_dash.css'
import '../styles/Add_Resturent.css'
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/UserSlice';

function MyApp({ Component, pageProps }) {
//   useEffect(()=>{async()=>{
 
//     let USER = await localStorage.getItem('USER');
//     let EMAIL = await localStorage.getItem('EMAIL');
//     let NAME = await localStorage.getItem('NAME');
    
//     console.log('data user ka data', USER, EMAIL, NAME)
//     if (USER && USER?.length) {
//         dispatch(login({ uid: USER, email: EMAIL, displayName: NAME }));
//     }

//     else {
//         dispatch(logout);
//     }
//   }
// }, [])

  return (
  <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
