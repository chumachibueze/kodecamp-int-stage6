import React from 'react';
import { Link } from 'react-router-dom';
import landingpageImg from '../images/landingpage-img.svg';

const LandingPage = () => {

  return (
    <div className=''>
        <div className=''>
            <nav className='navbar navbar-expand-lg navbar-light bg-blue sticky-top shadow'>
                <div className='container-fluid bg-blue'>
                    <Link className='navbar-brand ps-5 text-white' to="/" id='navbar-text'>Prime College</Link>
                    <button className='navbar-toggler ' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className='navbar-toggler-icon '></span>
                    </button>
                    <div className='collapse navbar-collapse ' id="navbarNavAltMarkup">
                    <div className='navbar-nav m-auto ' >
                        <Link className='nav-link active text-white' aria-current="page" to="/login">Login</Link>
                    </div>
                    </div>
                </div>
            </nav>
        </div>

        <div className="container-fluid bg-blue py-5">
            <div className="container ">
                <div className="row pb-5">
                    <div className="col-md-4 col-sm-12 m-auto">
                        <h1>Learn on your class schedule</h1>
                        <p className='pb-5'>
                            Education is the key to unlocking potential for a better future. Prime college 
                            is a citadel of learning that will give you the means to inspire the next generation.
                        </p>
                    </div>

                    <div className="col-md-6 col-sm-12 ps-lg-5 ps-md-5 ps-sm-0 mb-5 pb-5">
                        <div className=''>
                            <img src={landingpageImg} alt="landing-img" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage;