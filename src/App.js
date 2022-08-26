import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Menu from "./Menu";
import Contact from "./Contact";
import About from "./About";
import Deliver from "./Deliver";
import Adresses from "./Adresses";
import Nav from "./Nav";
import Footer from "./Footer";
import Cards from "./Cards";


const App = () => {
  return (
      <div>
        <Router>
          <Nav/>
          <Switch>
            <Route exact path ='/' component={() => <Menu/>}/>
            <Route path ='/contact' component={() => <Contact/>}/>
            <Route path ='/about' component={() => <About/>}/>
            <Route path ='/deliver' component={() => <Deliver/>}/>
            <Route path='/adresses' component={() => <Adresses/>}/>
          </Switch>
          <Cards/>
          <Footer/>
        </Router>
      </div>
  );
};

export default App;