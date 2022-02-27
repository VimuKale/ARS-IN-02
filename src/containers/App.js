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

// import { users } from './DemoArray';

import ShelterPage from '../components/ShelterPage/ShelterPage';
import AdoptionListingForm from '../components/AdoptionListingForm/AdoptionListingForm';
import SupplyListingForm from '../components/SupplyListingForm/SupplyListingForm';

import ShelterRegistration from '../components/ShelterRegister/ShelterRegister';
import AdminRegisterForm from '../components/AdminRegisterForm/AdminRegisterForm';
import UserRegister from '../components/UserRegister/UserRegister';
import Footer from '../components/FooterComp/FooterComp';
import { Redirect } from 'react-router-dom';

import AdminPage from '../components/AdminPage/AdminPage';
import RescueRequestCont from '../components/ViewRescueRequest/RescueRequestCont';

function App() {

  const [isUser, setIsUser] = useState(window.localStorage.getItem('user'));
  const [isShelter, setIsShelter] = useState(window.localStorage.getItem('shelter'))
  const [isAdmin, setIsAdmin] = useState(window.localStorage.getItem('admin'))


  const [things, setThings] = useState([]);
  const [thingssearchfield, setthingssearchfield] = useState('');

  const [pets, setPets] = useState([]);
  const [petssearchfield, setpetssearchfield] = useState('');


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


    fetch('http://localhost:3002/pets', {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    })
      .then(response => response.json())
      .then(pets => { setPets(pets) });

  }
    , [])








  const filteredThings = things.filter(thing => {
    return thing.s_name.toLowerCase().includes(thingssearchfield.toLowerCase());
  })

  const filteredPets = pets.filter(pet => {
    return pet.s_name.toLowerCase().includes(petssearchfield.toLowerCase());
  })


  return (
    <div className="App">
      <Router>
        <Navigation isUser={isUser} setIsUser={setIsUser} isShelter={isShelter} setIsShelter={setIsShelter} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        <Switch>



          <Route exact path="/" >
            <CoverPage />
          </Route>



          {/* LOGIN MODULE */}
          <Route path='/login'>
            {
              isUser ? (<Redirect to="/user" />)
                : (isShelter ? (<Redirect to="/shelter" />) :
                  (
                    isAdmin ? (<Redirect to="/admin" />)
                      : <Login setIsUser={setIsUser} setIsShelter={setIsShelter} setIsAdmin={setIsAdmin} />
                  )
                )
            }
          </Route>



          <Route exact path="/user">
            {isUser ? <UserPage /> : <Redirect to="/" />}
          </Route>

          <Route exact path="/shelter">
            {isShelter ? <ShelterPage /> : <Redirect to="/" />}
          </Route>

          <Route exact path="/admin">
            {isAdmin ? <AdminPage /> : <Redirect to="/" />}
          </Route>

          <Route path="/user/rescuerequest">
            {isUser ? <RescueRequestForm /> : <Redirect to="/" />}
          </Route>


          {/* PET LISTING MODULE */}
          <Route path="/listpet">
            {isShelter ? <AdoptionListingForm /> : <Redirect to="/" />}
          </Route>


          {/* SUPPLY LISTING MODULE */}
          <Route path="/listsupplies">
            {isShelter ? <SupplyListingForm /> : <Redirect to="/" />}



          </Route>
          <Route path="/admin/viewrescuerequest" >
            {isAdmin ? <RescueRequestCont /> : <Redirect to="/" />}

          </Route>

          <Route path="/shelter/viewrescuerequest" >
            {isShelter ? <RescueRequestCont /> : <Redirect to="/" />}

          </Route>


          {/* <Route path="/shelter/viewacceptedrequest" >
            {isShelter ? <AcceptedRequestCont /> : <Redirect to="/" />}

          </Route> */}




          {/* REGISTRATION MODULE */}

          <Route path="/userregistration">
            <UserRegister />
          </Route>

          <Route path="/shelterregistration">
            <ShelterRegistration />
          </Route>

          <Route path="/adminregistration">
            <AdminRegisterForm />
          </Route>




          {/* DONATION MODULE */}

          <Route path="/user/thingstable">
            {
              isUser
                ?
                <>
                  <SearchBarTT setthingssearchfield={setthingssearchfield} />
                  <ThingsTable things={filteredThings} />
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
                  <ThingsTable things={filteredThings} />
                </>
                :
                <Redirect to="/" />
            }
          </Route>

          <Route path="/admin/thingstable">
            {
              isAdmin
                ?
                <>
                  <SearchBarTT setthingssearchfield={setthingssearchfield} />
                  <ThingsTable things={filteredThings} />
                </>
                :
                <Redirect to="/" />
            }
          </Route>




          {/* ADOPTION LISTING MODULE */}

          <Route path="/user/adoptionlisting">

            {isUser ?
              <>
                <SearchBarAL setpetssearchfield={setpetssearchfield} />
                <Scroll>
                  <AdoptionListing pets={filteredPets} />
                </Scroll>
              </>
              :
              <Redirect to="/" />}

          </Route>

          <Route path="/shelter/adoptionlisting">
            {isShelter ?
              <>
                <SearchBarAL setpetssearchfield={setpetssearchfield} />
                <Scroll>
                  <AdoptionListing pets={filteredPets} />
                </Scroll>
              </>
              :
              <Redirect to="/" />}
          </Route>

          <Route path="/admin/adoptionlisting">
            {isAdmin ?
              <>
                <SearchBarAL setpetssearchfield={setpetssearchfield} />
                <Scroll>
                  <AdoptionListing pets={filteredPets} />
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
