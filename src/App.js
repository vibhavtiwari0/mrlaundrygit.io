import logo from './logo.svg';
import '../src/main';
import './App.css';
import './style.css';
import './Components/Products/ProDetails.css';
import './Components/FontAwesomeIcons';

import { Home } from './Components/Home';

import {Login} from './Components/Login';
import {Register} from './Components/Register';

//import './Components/Products/ProDetails';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PricingListt } from './Components/PricingListt';
import { AddLaundry } from './Components/AddLaundry';
import { Navbar } from './Components/Navbar';

import { Loginn } from './Components/Loginn';
import { Registerr } from './Components/Registerr';
import { Footer } from './Components/Footer';
import { AdminLoginn } from './Components/AdminLoginn';
import { AdminList } from './Components/AdminList';
import { Aboutus } from './Components/Aboutus';








function App() {
  return (
    <div>

    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home></Home>} > </Route>
        {/* <Route path="#" element={<Product></Product>} > </Route> */}
        <Route path='/PricingListt' element={<PricingListt></PricingListt>} ></Route>
        <Route path='/AddLaundry' element={<AddLaundry></AddLaundry>}></Route>
        
        <Route path='/Aboutus' element={<Aboutus></Aboutus>}> </Route>
       
        <Route path='/Loginn' element={<Loginn></Loginn>} ></Route>
        <Route path='/Registerr' element={<Registerr></Registerr>} ></Route>
        


    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  
   
    
    </div>
   
  );
}

export default App;
