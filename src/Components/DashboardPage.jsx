import React, { useState } from 'react';
import {auth} from './Firebase-config';
import { onAuthStateChanged, signOut, updateCurrentUser} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import dashboardImg from '../images/dashboardpage-img.svg';

const DashboardPage = () => {

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  onAuthStateChanged(auth, (updateCurrentUser) => {
    setUser(updateCurrentUser);
  });

  const logout = async() =>{
    await signOut(auth);
    navigate('/');
  }
  
  return (
    <div className='container-fluid'>
      <div className="container">
          <div className="row">
            <div className="col-md-1 col-sm-12">
              <div className='pt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="bi bi-list" viewBox="0 0 16 16" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>

              <div className="offcanvas offcanvas-start rounded-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title navbar-text" id="offcanvasExampleLabel">Prime College</h5>
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <div className='py-3 ps-3 bg-light rounded-3 mb-3'>
                    <Link to='/dashboard' className='text-decoration-none text-dark'>Dashboard</Link>
                  </div>
                  <div className='py-3 ps-3 bg-light rounded-3 mb-3'>
                    <Link to='/courses' className='text-decoration-none text-dark'>Courses</Link>
                  </div>
                  <div className='py-3 ps-3 bg-light rounded-3 mb-3'>
                    <Link to='/profile' className='text-decoration-none text-dark'>Profile Page</Link>
                  </div>
                  <div className='py-3 ps-3 bg-light rounded-3 mb-3'>
                    <button onClick={logout} className='border-0'>Logout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-10 col-sm-12 my-5 shadow rounded-3 px-3 py-5 container">
            <div className="row">
              <div className="col-md-4 col-sm-12 mb-5">
                <h3 className='text-green text-center'>Welcome {user?.displayName } {user?.email }</h3>
              </div>

              <div className="col-md-8 col-sm-12 mb-5">
                <div>
                  <img src={dashboardImg} alt="dashboard-img" className='img-fluid' />
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DashboardPage;