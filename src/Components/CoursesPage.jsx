import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './Database';


const CoursesPage = () => {

  const {courses} = useContext(DataContext);


  return (
    <div className='container-fluid'>
        <div className='mt-2'>
          <Link to={'/dashboardpage'} className='text-decoration-none text-green shadow p-1 rounded-3'>Back</Link>
        </div>
      <div className='container my-5'>
        <div className='text-center mb-5'>
          <h3 className='text-green'>Courses being offered</h3>
        </div>
        <div className='row'>
          {courses.map((course) => (
          <div className='col-md-4 col-sm-12' key={course.id}>
            <div className=' text-center mb-5'>
              <Link to={`/singlepage/${course.id}`} className='text-decoration-none'>
                <h5 className='py-5 bg-primary text-white rounded-3'>{course.name}</h5>
              </Link>
            </div>
        </div >
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoursesPage;