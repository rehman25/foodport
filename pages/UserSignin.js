/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import { Layout } from 'antd';

import Image from 'next/image'
import Link from 'next/link'
import { Form, Input, Button, Row, Col, Typography, Spin } from 'antd';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { login, logout, } from '.././components/features/UserSlice';
import { onAuthStateChanged, signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { route } from 'next/dist/server/router';
import { app,db } from '../firebase';
import { updateDoc, collection, onSnapshot, orderBy, query, doc, getDocs, where, getDoc, addDoc, deleteDoc } from 'firebase/firestore'



const { Text } = Typography;
const { Title } = Typography;
const { Content } = Layout;

function UserSignin({loading,layout,form,tailLayout})
 {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const router = useRouter();

  var data = [];
  // const auth = getAuth(app);
  // useEffect(async () => {
  //   auth.onAuthStateChanged(async (userAuth) => {
  //     if (userAuth) {
  //       dispatch(login({
  //         email: userAuth.email,  
  //       }))
  //       console.log(userAuth)
  //       try {

  //         await localStorage.setItem('EMAIL', userAuth.email)
  //         await localStorage.setItem('accessToken', userAuth.accessToken)

  //       } catch (e) {
  //         console.log('é', e)
  //       }
  //     } else {
  //       dispatch(logout)
  //     }
  //   })
  // }, [])
  // const user = auth.currentUser;
  // const logintoApp = (e) => {
  //   e.preventDefault()
  //   let EMAIL = localStorage.getItem('EMAIL');
  //   signInWithEmailAndPassword(auth,email, password).then((userAuth) => {
  //     dispatch(login({
  //       email: userAuth.user.email,
  //       // uid: userAuth.user.uid,
  //       // displayName: userAuth.user.displayName,  
  //     }))
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;

  //     if(errorCode === 'auth/wrong-password'){
  //       setError('Wrong Email or Password')
  //     }else{
  //       setError(errorMessage)
  //     }
  //   });
  //     if (auth.currentUser !== null) {
  //         router.push('./')

  //     }

  // }
// const fetchingData = async () => {
 
// }
// fetchingData();

  const logintoApp =  async  (e) => {
    e.preventDefault()
    const querySnapshot = await getDocs(collection(db, "userid"), where("select", "==", "admin"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      data.push({ id: doc.id, ...doc.data() })
      // setUserData(userData=>[...userData,doc.data()])
    })
    try{
    const filterData =  data.filter((item) => item.select === "user" && item.email === email && item.password === password)
    if (filterData) {
      if((filterData.length>0) && (filterData[0].select === "user")&&(filterData[0].email === email)&&(filterData[0].password === password) )
      {
         localStorage.setItem('email', filterData[0].email);
        localStorage.setItem('accid', filterData[0].accId);
         localStorage.setItem('displayName', filterData[0].name);
       router.push('/')
  
        }
        else{
          setError('Wrong Email or Password') // if email or password is wrong
        }

    }

  }
 catch(e){
   console.log(e)
 }
  }
  return (
    <>
      <Head>
        <title>Food Port</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
      </Head>

      <div className='user-account'>
   
         <div className="container h-100">
         <Row className='h-100' align='middle'>
         <Col xs={24} md={12} className='pr-md-5'>
           <a href='#'>
             <h2 className="mb-4"><strong>Food</strong>Port</h2>
           </a>

           <Title className='text-center mb-md-4 pb-3' level={2}>
             Login
           </Title>
             <Form
               {...layout}
               form={form}
               initialValues={{ remember: true }}>
               <Form.Item
                 name='email'
                 rules={[
                   { required: true, message: 'Please enter Email!' },
                 ]}>
                 <Input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
               </Form.Item>

               <Form.Item
                 name='password'
                 rules={[
                   { required: true, message: 'Plese enter Password!' },
                 ]}>
                 <Input.Password placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
               </Form.Item>
               <p>
                 <a className='forgot-pass text-left' href='#/auth/forget-password'>
                   Forgot Password
                 </a>
               </p>

               <Form.Item {...tailLayout}>
                 <Button
                 onClick={logintoApp}
                   type='primary'>
                   Login
               </Button>
               </Form.Item>
             </Form>
           <p className='line'>
             <span>Or login using</span>
           </p>
           <ul className='social-form-icon'>
             <li>
               <a href='#'>
                 <i className='fa fa-facebook'></i>
               </a>
             </li>
             <li>
               <a href='#'>
                 <i className='fa fa-twitter'></i>
               </a>
             </li>
           </ul>

           <p className='dont-account text-center'>
             Don't have an account? <a href='/register'>Signup</a>
           </p>
         </Col>
         <Col xs={24} md={12} className='text-center text-md-right'>
           <img
             className='img-fluid'
             src='https://i.ibb.co/WVwpP9R/login.png'
             alt='logo'
           />
         </Col>
       </Row>
         </div>

      </div>
      <div className='container-fluid footer'>
      <Row>
      <Col xs={24} sm={16} md={12} className='text-center text-md-left'>
              <Text>Copyright 2020.All rights reserved.</Text>
            </Col>
            <Col xs={24} sm={8} md={12}>
              <ul className='social-icon'>
                <li>
                  <a href='#'>
                    <i className='fa fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-youtube'></i>
                  </a>
                </li>
              </ul>
            </Col>

      </Row>
      </div>
    </>
  );
}

export default UserSignin;
