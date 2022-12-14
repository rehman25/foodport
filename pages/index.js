/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tab_style from '../styles/tabs.module.css'
import Footer from './Footer'
import Header from './Header'
import Link from 'next/link'
import TabsCard from './tabs'
import data from './data.json'
import { useDispatch } from 'react-redux';
import { login, logout } from '.././components/features/UserSlice';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import PlacesAutocomplete from 'react-places-autocomplete';


export default function Home() {
  const dispatch = useDispatch();
  useEffect(()=>{async()=>{
  
    let USER = await localStorage.getItem('USER');
    let EMAIL = await localStorage.getItem('EMAIL');
    let NAME = await localStorage.getItem('NAME');
    
  
        dispatch(login({ email: EMAIL }));
   
        console.log('data user ka data', USER, EMAIL, NAME)
  }
}, [])
  const handleSelect = async value => {
    const results = await geocodeByAddress(value)
    const ll = await getLatLng(results[0])
    console.log(ll);
    setAddress(value)
    setCoordinates(ll)
  }
  const godown = () => {
    window.scrollTo(0, 600);
  }
  const onError = (status, clearSuggestions) => {
    console.log('Google Maps API returned error with status: ', status)
    clearSuggestions()
  }
  const [locations, setLocations] = useState('')
  const [details, setDetails] = useState(null);
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  return (
    <>
      <Head>
        <title>FoodPort</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAauJJEyM4gX9qRpGEx6ZyNXhK8SEA4NP8&libraries=places"></script>
      </Head>

      <main>
        <Header />

        <div className={styles.homepage_banner}>
          <div className='container' id={styles.own_container}>
            <div className='row'>
              <div className='col-12'>
                <div className={styles.search_box}>
                  <div className={styles.text_box_home}>
                    <span className={styles.text_span}>Locate Food Trucks & Restaurants Anywhere!</span>
                  </div>
                  <div className={styles.search_input}>
                    <PlacesAutocomplete
                      value={address}
                      onChange={(value)=>setAddress(value)}
                      onSelect={handleSelect}
                      onError={(status, clearSuggestions)=>onError}
                    >
                      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
                        return (
                          <div className={styles.back_black_box}>
                            <div className={styles.input_parent}>
                              <input
                                {...getInputProps({
                                  placeholder: 'Search Places ...',
                                  className: 'location-search-input',
                                })}
                              />
                              <div onClick={godown} className={styles.searches}>
                                <i className="fas fa-search-location fa-1x"></i>
                                <button className={styles.search}>Search</button>
                              </div>
                            </div>
                            <div className={styles.seacrh_parenthome}>
                                {loading && <h3>Loading Search..</h3>}
                                {
                                suggestions.map(suggestion => {
                                  const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                  const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer', }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                  return (
                                    <div {...getSuggestionItemProps(suggestion, { className, style,})}>
                                        <div className={styles.search_descriptionhome}>
                                          <li>{suggestion.description}</li>
                                        </div>
                                    </div>
                                  );
                                })}
                              </div>
                          </div>
                        )
                      }}
                    </PlacesAutocomplete>

                    {console.log(address)}
                    {console.log("CPP", coordinates)}
                  </div>
                </div>
                <ul>
                  <Link href="/ressearch"><li><a><i className='fas fa-utensils'></i>Restaurants</a></li></Link>
                  <Link href="/ressearch"><li><a><i className='fab fa-magento'></i>Home Services</a></li></Link>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* TAB HEADING SETION */}
        <div className={styles.tabs_section}>
          <div className={styles.tabs_head_box}>
            <span className={styles.tabs_head}>Discover The <span className={styles.red_color}>Best Food In Town</span></span>
           
          </div>
        </div>

        <div className={tab_style.tab_main}>
          <TabsCard address={address} />
          
        </div>
        <div className="container" id={styles.Showmorebtn}>
        <a href="/ressearch"><button>Show more</button></a>
        </div>
        {/* TESTIMONIALS SECTION */}
        <div className={styles.testimonilas_section}>
          <span className={styles.testi_head}>Customer's Reviews</span>

          <div className='container-fluid'>
            <div className='row justify-content-center mt-5'>
              {data.Tesimonial.map((post, key) => {
                return (
                  <div key={key} className='col-lg-3 col-md-5 mt-5'>
                    <div className={styles.testi_box}>
                      <img src={post.imgtest} alt="" />
                      <span className={styles.customer_name}>{post.Name}</span>
                      <span className={styles.cus_descrip}>{post.Heading}
                        <span className={styles.color_red}>{post.ResName}</span>
                      </span>
                      <p className={styles.testi_text}>{post.Test}</p>
                      <span className={styles.testi_info}>{post.added}</span>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>

        {/* MOBILE APP SECTION */}
        <div className={styles.app_section}>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-6 col-md-12' id={styles.flex}>
                {data.DowoalodApp.map((post, key) => {
                  return (
                    <div key={key} className={styles.app_btn_groups}>
                      <span className={styles.app_head}>
                        <span className={styles.color_black}>{post.HeadOne} </span>{post.HeadTwo}
                      </span>
                      <p className={styles.app_para}>
                        {post.Para}
                      </p>
                      <img src={post.ImgOne} alt="" />
                      <img src={post.ImgTwo} alt="" />
                    </div>
                    )
                })}
              </div>

              <div className='col-lg-6 col-md-12'>
                <div className={styles.mobile_app}>
                  <img src="img/mockup2.c2bbca54.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
