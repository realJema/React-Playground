import React from 'react';
import { Route, Switch, useRouteMatch} from 'react-router-dom';
import Slider from './components/layout/slider/slider';
import Navbar from './components/layout/navbar/navbar';
import Products from './components/layout/products/products';
import Filters from './components/layout/filters/filters';
import Footer from './components/layout/footer/footer';


// importing bootstrap and css
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function Obili() {
  // this is necessary for adding nested routes 
  let { path,  } = useRouteMatch();
  return (
      <div>
          <Navbar />
          <Slider/>
          <Switch>
              <Route path={`${path}/`}>
                  <Products />
              </Route>
              <Route path={`${path}/filtered`}>
                  <Filters />
              </Route>
          </Switch>
           <Footer/>
      </div>
  );
}

export default Obili;
