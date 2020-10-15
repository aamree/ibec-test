import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Home from 'pages/Home';
import About from 'pages/About';
import Contacts from 'pages/Contacts';

export interface IBodyProps {
}

export default function Body (props: IBodyProps) {
  return (
    <div className="container">
      <div className="row">
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
        <Sidebar/>
      </div>
    </div>
  );
}
