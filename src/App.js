import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import CoursesPage from './Components/CoursesPage';
import Dashboard from './Components/Dashboard';
import DashboardPage from './Components/DashboardPage';
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/LoginPage';
import ProfilePage from './Components/ProfilePage';
import Register from './Components/Register';
import SingleCoursePage from './Components/SingleCoursePage';

function App() {
  return (
    <div className=''>
        <BrowserRouter basename={window.location.pathname || ''}>
          <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/dashboardpage' element={<DashboardPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/courses' element={<CoursesPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route  path='/singlepage/:id' element={<SingleCoursePage />} />
            <Route path='/register' element={<Register />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
