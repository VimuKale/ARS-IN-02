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

function App() {
  return (
    <div className="App">
      <Router>
          <Navigation/>  
            <Routes>
              <Route path="/" element={<CoverPage />}/>
              <Route path='/login' element={<Login />}/>
              <Route path="/user" element={<UserPage />}/>
              <Route path="/user/rescuerequest" element={<RescueRequestForm />}/>
              <Route path="/user/thingstable" element={  
                  <>
                    <SearchBarTT />
                    <ThingsTable things={users} />
                  </>
              }/>
              <Route path="/user/adoptionlisting" element={  
                  <>
                    <SearchBarAL />
                    <Scroll>
                      <AdoptionListing robots={users} />
                    </Scroll>
                  </>
              }/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
