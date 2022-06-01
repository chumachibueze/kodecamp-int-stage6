import React, { useState } from 'react';
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from './Firebase-config';
import loginpageImg from '../images/loginpage-img.svg';
import logo from '../images/kodecamp-logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [error, setError] = useState('');

    // to navigate betwwen pages:
    const navigate = useNavigate();

    // authentication using google account:
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = async() => {
      try{
        const user = await signInWithPopup(auth, provider);
        console.log(user);
        navigate('/dashboardpage');
      }catch(error){
        setError(error.message);
      }
    };


    // authentication for Email and password:
    const registeruser = async () =>{
       try{
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword );
        console.log(user);
        navigate('/dashboardpage');
       }catch(error){
           setError(error.message);
       }
    };


  return (
    <div className='container-fluid mt-3 mb-5'>
      <div className="container shadow rounded-3">
        <div className="row">
            <div className="text-danger mt-3">
                <p>{error}</p>
            </div>
          <div className="col-md-5 col-sm-12 m-auto">
            <div className='m-auto'>
              <h2 className='text-center text-green pt-5'>Student Registeration Page</h2>
              <p className='text-center text-green pb-4'>make sure your account is secure</p>
              <div className='m-auto'>
                <img src={loginpageImg} alt="login-img"  className='img-fluid mb-5' />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 pe-lg-5 pe-md-5 pe-sm-0 m-auto">
            <div className='text-center  mb-5'>
              <Link to={'/'}>
                <img src={logo} alt="" className='img-fluid logo' />
              </Link>
            </div>
            <div className=''>
              <form >
                <div className='form-floating mb-3 text-green'>
                  <input type="email" className="form-control border-0 border-bottom " id="floatingInput" placeholder="name@example.com"  onChange={(e) =>{
                     setRegisterEmail(e.target.value);
                  }
                  }/>
                  <label htmlFor='floatingInput'>Email address</label>
                </div>
                <div className='form-floating text-green'>
                  <input type="password" className="form-control border-0 border-bottom" id="floatingPassword" placeholder="Password"
                  onChange={(e) =>{
                    setRegisterPassword(e.target.value);
                 }
                 }
                   />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="d-flex justify-content-between pt-3 ">
                  <Link to={'#'} className='text-decoration-none text-green'>Already Registered?</Link>
                  <Link to={'/login'} className='text-decoration-none text-green'>Login</Link>
                </div>

                <div className='d-grid gap-2 mt-5 mb-5'>
                  <button className='btn btn-primary rounded-pill' type="button" onClick={registeruser} >Register with Email</button>
                  <button className='btn btn-primary rounded-pill mt-3' type="button" onClick={signInWithGoogle} >Register with Google</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;