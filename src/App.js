import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route  path='/' element={<Home />}/>
          <Route  path='/profile' element={<PrivateRoute />}>
            <Route  path='/profile' element={<Profile />}/>
          </Route>
          <Route  path='/sign-in' element={<Signin />}/>
          <Route  path='/sign-up' element={<Signup />}/>
          <Route  path='/forgot-password' element={<ForgotPassword />}/>
          <Route  path='/offers' element={<Offers />}/>
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
 