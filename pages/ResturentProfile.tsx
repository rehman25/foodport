import React from 'react'
import Head from 'next/head'
import ResturentSidebar from './ResturentSidebar'
// import DCss from '../styles/dashboard.module.css'
function ResturentProfile() {
  return (
    <>
               <Head>
                <title>Food Port</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
               
           </Head>

           <main>
            <ResturentSidebar/>
            <div className="container">
                <div className="row mt-5 mb-5 justify-content-center">
                    <div className="col-lg-offset-4 col-lg-6 col-sm-offset-3 col-sm-6">
                        <div className="user_profile">
                            <div className="user_details">
                                <div className="proflie-icon">
                                    <i className="fas fa-user-tie"></i>
                                </div>
                                <h3 className="title">Alex Roy</h3>
                            </div>
                            <ul className="profile-content">
                                <li><span><i className="fas fa-envelope-open-text"></i></span>alexroy@example.com</li>
                                <li><span><i className="fas fa-map-marked-alt"></i></span>House No ###</li>
                                <li><span><i className="fas fa-mobile"></i></span>+0987654321</li>
                                <li><span><i className="fas fa-building"></i></span>New York</li>
                                <li><span><i className="fas fa-globe-africa"></i></span>USA</li>
                            </ul>
                            <div className="wrapper">
                                <input type="radio" name="select" id="option-1" checked />
                                <input type="radio" name="select" id="option-2" />
                                <label htmlFor="option-1" className="option option-1">
                                    <div className="dot"></div>
                                    <span>Male</span>
                                </label>
                                <label htmlFor="option-2" className="option option-2">
                                    <div className="dot"></div>
                                    <span>Female</span>
                                </label>
                            </div>
                            <button className='edit_btn mt-2'>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
           </main>
    </>
  )
}

export default ResturentProfile