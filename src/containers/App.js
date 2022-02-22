import { useState, useEffect } from 'react';
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
  Switch,
  Route,
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
import { Redirect } from 'react-router-dom';



function App() {

  const [isUser, setIsUser] = useState(false);
  const [isShelter, setIsShelter] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const [Utype, setUtype] = useState("");

  const [things, setThings] = useState([]);
  const [thingssearchfield, setthingssearchfield] = useState('');


  useEffect(() => {
    fetch('http://localhost:3002/items', {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    })
      .then(response => response.json())
      .then(things => { setThings(things) });
  }, [])

  const filteredThings = things.filter(thing => {
    return thing.s_name.toLowerCase().includes(thingssearchfield.toLowerCase());
  })
  return (
    <div className="App">
      <Router>
        <Navigation isUser={isUser} setIsUser={setIsUser} isShelter={isShelter} setIsShelter={setIsShelter} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        <Switch>

          <Route exact path="/" >
            <CoverPage />
          </Route>

          <Route path='/login'>
            {

              isUser ? (<Redirect to="/user" />)
                : (isShelter ? (<Redirect to="/shelter" />) :
                  (
                    isAdmin ? (<Redirect to="/admin" />)
                      : <Login setIsUser={setIsUser} setIsShelter={setIsShelter} setUtype={setUtype} />
                  )
                )
            }
            {/* if(isUser){
              <Redirect to="/user" />
            }
            else if(isShelter){
              <Redirect to="/shelter" />
            }
            else if(isAdmin){
              <Redirect to="/shelter" />
            }
            else{
              <Login setIsUser={setIsUser} setShelter={setIsShelter} setIsAdmin={setIsAdmin} />
            } */}

          </Route>

          <Route exact path="/user">
            {isUser ? <UserPage /> : <Redirect to="/" />}
          </Route>

          <Route path="/shelter">
            {isShelter ? <ShelterPage /> : <Redirect to="/" />}

          </Route>


          <Route path="/user/rescuerequest">
            {isUser ? <RescueRequestForm /> : <Redirect to="/" />}
          </Route>


          <Route path="/listpet">
            {isShelter ? <AdoptionListingForm /> : <Redirect to="/" />}
          </Route>


          <Route path="/listsupplies"><SupplyListingForm /></Route>
          <Route path="/viewrescuerequest" ><ViewRescueRequest /></Route>


          <Route path="/userregistration">
            <UserRegister />
          </Route>
          <Route path="/shelterregistration">
            <ShelterRegistration />
          </Route>
          <Route path="/adminregistration">
            <AdminRegisterForm />
          </Route>

          <Route path="/user/thingstable">
            {
              isUser
                ?
                <>
                  <SearchBarTT setthingssearchfield={setthingssearchfield} />
                  <ThingsTable things={filteredThings} Utype={Utype} />
                </>
                :
                <Redirect to="/" />
            }
          </Route>

          <Route path="/shelter/thingstable">
            {
              isShelter
                ?
                <>
                  <SearchBarTT setthingssearchfield={setthingssearchfield} />
                  <ThingsTable things={filteredThings} Utype={Utype} />
                </>
                :
                <Redirect to="/" />
            }
          </Route>

          <Route path="/user/adoptionlisting">

            {isUser ?
              <>
                <SearchBarAL />
                <Scroll>
                  <AdoptionListing robots={users} />
                </Scroll>
              </>
              :
              <Redirect to="/" />}

          </Route>

        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
