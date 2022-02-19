import { useState } from 'react';
import './App.css';
import Login from '../components/Login/Login';
import CoverPage from '../components/CoverPage/CoverPage';
import Navigation from '../components/Navigation/Navigation';
import RescueRequestForm from '../components/RescueRequestForm/RescueRequestForm';
import ThingsTable from '../components/ThingsTable/ThingsTable';
import UserPage from '../components/UserPage/UserPage';
import SearchBarTT from '../components/ThingsTable/SearchBarTT/SearchBarTT';
import SearchBarAL from '../components/AdoptionListing/SearchBarAL/SearchBarAL';
import Scroll from '../components/Scroll/Scroll';
import AdoptionListing from '../components/AdoptionListing/AdoptionListing';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { users } from './DemoArray';

import ShelterPage from '../components/ShelterPage/ShelterPage';
import AdoptionListingForm from '../components/AdoptionListingForm/AdoptionListingForm';
import SupplyListingForm from '../components/SupplyListingForm/SupplyListingForm';
import ViewRescueRequest from '../components/ViewRescueRequest/ViewRescueRequest';
import ShelterRegistration from '../components/ShelterRegister/ShelterRegister';
import AdminRegisterForm from '../components/AdminRegisterForm/AdminRegisterForm';
import UserRegister from '../components/UserRegister/UserRegister';
import Footer from '../components/FooterComp/FooterComp';



function App() {

  const [isUser, setIsUser] = useState(false);
  const [isShelter, setShelter] = useState(false);
  // const [isAdmin, setAdmin] = useState(false);

  return (


    <div className="App">
      <Router>
        <Navigation isUser={isUser} isShelter={isShelter} />
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path='/login' element={<Login setIsUser={setIsUser} setShelter={setShelter} />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/user/rescuerequest" element={<RescueRequestForm />} />
          <Route path="/shelterregistration" element={<ShelterRegistration />} />
          <Route path="/shelter" element={<ShelterPage />} />
          <Route path="/listpet" element={<AdoptionListingForm />} />
          <Route path="/listsupplies" element={<SupplyListingForm />} />
          <Route path="/viewrescuerequest" element={<ViewRescueRequest />} />
          <Route path="/adminregistration" element={<AdminRegisterForm />} />
          <Route path="/userregistration" element={<UserRegister />} />



          <Route path="/user/thingstable" element={
            <>
              <SearchBarTT />
              <ThingsTable things={users} />
            </>
          } />
          <Route path="/user/adoptionlisting" element={
            <>
              <SearchBarAL />
              <Scroll>
                <AdoptionListing robots={users} />
              </Scroll>
            </>
          } />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
