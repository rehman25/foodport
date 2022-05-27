/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { login } from '.././components/features/UserSlice'
import regis_style from '../styles/register.module.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
function register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [bname, setBName] = useState("");
    const [address, setAddress] = useState("")
    const [hasError, Error] = useState("");
    const [select,setSelect]= React.useState();
    const dispatch = useDispatch();
    const router = useRouter()
    const handleCapacity=(e)=>{
        setSelect(e.target.value);
       
      }
    
      const registers = () => {
          createUserWithEmailAndPassword(auth,email,password).then((userAuth) => {
              console.log(userAuth)
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                usrtype:select
            }))
          }).catch(function(error) {
            var errorMessage = error.message;
            alert("errorMessage: "+ errorMessage)
          });
          
        router.push(select==='user' ? '/' : '/ResturentOwner')
      }
  return(
      <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
        </Head>


        <main>
        {/* style="background-image: url(./img/Banner-7.jpg);" */}
        <div className={regis_style.form_img}>

            <div className={`${regis_style.main_from} ${regis_style.form}`}>
            <div className={regis_style.upper_div}></div>    
            </div>

            
            
                <span className={regis_style.center_img}> <img src="/img/logologo.f87723ea.png" alt="" /></span>
                {/* className="row justify-content-center" */}
                <div  className={`${regis_style.form_row} ${regis_style.form_secd}`}>
    
                <div className="col-lg-10">
                    <h3 className="text-center">Registration</h3>
                    <div className={`${regis_style.icons_group} ${regis_style.icons_groups}`}>
                        <img src="/img/signin.png" alt="" />
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
                    </div>
                    <div className={`${regis_style.icons_group} ${regis_style.icons_groups}`}>
                        <img src="/img/phone.png" alt="" />
                        <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Your Phone" />
                    </div>
                    <div className={`${regis_style.icons_group} ${regis_style.icons_groups}`}>
                        <img src="/img/email.png" alt="" />
                        <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
                    </div>
                    <div className={`${regis_style.icons_group} ${regis_style.icons_groups}`}>
                        <img src="/img/password.png" alt="" />
                        <input type="text" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" />
                    </div>
                    <select name="UserType" id={regis_style.usertype} onChange={handleCapacity}>
                        <option>User Type</option>
                        <option value="user"> User</option>
                        <option value="business"> Business</option>
                    </select>
                    {select==="business"&& 
                       
                       <input type="text" value={bname} className="form-control" placeholder="BName" onChange={(e) => setBName(e.target.value)}/>
                       }
                        {select==="user"&& 
                       <input type="text" value={address} className="form-control" placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>}
                    <br />
                    <br />
                    
                    <button className={regis_style.form_btns} onClick={registers}>REGISTER</button> 
                </div>

                </div>
            
        </div>
        </main>

      </>
  );
}

export default register;
