import './App.css'
import {Route, Routes} from 'react-router-dom';
import LogIn from './components/Pages/Ragistration/login/login';
import Home from './components/Pages/home/home';
import Register from './components/Pages/Ragistration/register/register';
import NotFound from './components/Pages/notfound/notfound';
import Layout from './navigation/navbar/navbar';
import ContactUs from './components/Pages/contactus/contactus';

function App() {
  
 return (
    <>
    
   <Routes>
       <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<ContactUs />} />
        <Route path="login" element={<LogIn />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
