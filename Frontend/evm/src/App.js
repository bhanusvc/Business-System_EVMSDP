import './App.css'
import Home from './components/Home';
import Login from './components/Login';
import {BrowserRouter, Route ,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import MHome from './components/MHome';
import SignUp from './components/Signup';
import Events from './pages/Events';
import Parties from './pages/Parties';
import Celebrations from './pages/Celebrations';
import Ceremonies from './pages/Ceremonies'
import BusinessEvents from './pages/BusinessEvents';
import Contact from './pages/Contact';
import About from './pages/About';
import Info from './pages/Info';
import Forgot from './pages/Forgot';
import AdminLog from './Admin/AdminLog'
import EMSignup from './EP/EMSignup'
import EMLogin from './EP/EMLogin'
import Selection1 from './components/Selection1';
import AdDashboard from './Admin/AdDashboard';
import EPDashboard from './EP/EPDashboard';
function App() {
  return (
    <>
      <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Signup" element={<SignUp/>}></Route>
            <Route path="/Navbar" element={<Navbar/>}></Route>
            <Route path="/mhome" element={<MHome/>}></Route>
            <Route path="/Forgotpassword" element={<Forgot/>}></Route>
            <Route path="/Events" element={<Events/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/AboutUs" element={<About/>}></Route>
            <Route path="/Parties" element={<Parties/>}></Route>
            <Route path="/Celebrations" element={<Celebrations/>}></Route>
            <Route path="/Ceremonies" element={<Ceremonies/>}></Route>
            <Route path="/BusinessEvents" element={<BusinessEvents/>}></Route>
            <Route path="/info" element={<Info/>}></Route>
            <Route path="/Selection1" element={<Selection1/>}></Route>
            <Route path="/AdminLogin" element={<AdminLog/>}></Route>
            <Route path="/EMLogin" element={<EMLogin/>}></Route>
            <Route path="/EMSignup" element={<EMSignup/>}></Route>
            <Route path="/AdDashboard" element={<AdDashboard/>}></Route>
            <Route path="/EPDashboard" element={<EPDashboard/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      
    </>
    
  );
}

export default App;
