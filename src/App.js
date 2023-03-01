import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import AboutUs  from './components/pages/AboutUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Haircuts from './components/pages/Haircuts';
import Shaves from './components/pages/Shaves';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Gallery from './components/pages/Gallery';
import Prices from './components/pages/Prices';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/services' component={Services} />
        <Route path='/haircuts' component={Haircuts} />
        <Route path='/shaves' component={Shaves} />
        <Route path='/price' component={Prices} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/contactus' component={ContactUs} />
        <Route path='/signup' component={SignUp} />
      
      </Switch>
    </Router>
  );
}

export default App;