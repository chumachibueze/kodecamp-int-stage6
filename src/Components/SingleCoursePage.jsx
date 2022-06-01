import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { DataContext } from './Database';
import { Link } from 'react-router-dom';

const SingleCoursePage = () => {

  const {id} = useParams();
  const {courses} = useContext(DataContext);


  return (
    <div className="container-fluid">
        <div className='mt-2 '>
          <Link to={'/courses'} className='text-decoration-none text-green shadow p-1 rounded-3 '>Back</Link>
        </div>
      <div className=' container my-5 shadow p-4 rounded-3 bg-green text-white'>
        {
          courses.filter((course) => course.id == id).map((course) => (
            <div className='m-auto' key={course.id}>
            <div className='mb-5 '>
              <h3 className='text-center mb-5'> {course.name}</h3>
              <div className='mb-5'>
                <h4>0{course.id}. {course.name} Introduction</h4>
                <p>{course.details.intro}</p>
              </div>
              <h5>Branches of {course.name} :</h5>
              {
                course.details.branches.map((e, index) => (
                  <div key={index}>
                    <p >{e}</p>
                  </div>
                ))
              }
            </div>
          </div >
          ))
        }
      </div>
    </div>
  )
}

export default SingleCoursePage;