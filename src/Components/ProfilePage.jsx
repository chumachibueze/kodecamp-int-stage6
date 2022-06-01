import React, { useState } from 'react';
import {auth} from './Firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom';


const ProfilePage = () => {

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (updateCurrentUser) => {
    setUser(updateCurrentUser);
  });



  return (
    <>
    <div className='container-fluid'>
      <div className='mt-2 '>
        <Link to={'/dashboardpage'} className='text-decoration-none text-green shadow p-1 rounded-3'>Back</Link>
      </div>
      <div className="container">
        <div className='shadow rounded-3 p-5 my-5'>
          <div className='text-green my-5'>
            <h3 >Profile Setting</h3>
            <p>Personal Details</p>
          </div>

          <div className='text-center'>
            <img src={user?.photoURL} alt="profile_photo" className='img-fluid' />
          </div>

          <div className='my-5 text-green'>
            {user?.displayName}
            <p>Email: {user.email}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfilePage;