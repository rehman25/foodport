import React from 'react'
// import Link from 'next/link'
import Head from 'next/head'
import Admin_sidebar from './Admin_sidebar'

function Super_admin() {
  return (
      <>
           <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
           </Head>

           <Admin_sidebar />
      </>
  )
}

export default Super_admin