import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import m_style from '../styles/main_login.module.css'
import Link from 'next/link'
function Main_login() {
  return(
    <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
        </Head>

        <main id={m_style.main_bg_color}>
        {/* d-flex justify-content-center */}
          <div className="container-fluid">
            <div className="row justify-content-center">

              <div className="col-lg-3 m-auto">

                <div className={m_style.main_login_box}>

                  <div className={m_style.inner_login_box}>
                    <div className={m_style.box_logo}>
                  <Link href="/"><img src="/img/logologo.f87723ea.png" alt="" /></Link>
                    </div>
                  </div>

                  <div className={m_style.main_btn_box}>
                    <Link href="/UserSignin"><button className={m_style.user_login}>Login As User</button></Link>
                   <Link href="/ResownerSignin"><button className={m_style.owner_login}>Login As Resturent Owner</button></Link>
                  </div>

                </div>

              </div>

              <div className="co-lg-3"></div>

              <div className='col-lg-3 m-auto'>
                <div className={m_style.left_img_box}>
                  <img src="/img/main_login_img.jpg" alt="" />
                </div>
              </div>
              <div className="co-lg-3"></div>
            </div>
          </div>
        </main>
    
    </>
  );
}

export default Main_login;
