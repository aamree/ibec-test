import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import TopHeader from "components/TopHeader";
import Header from "components/Header";
import Body from 'components/Body';
import Footer from 'components/Footer';

function App() {
  return (
    <Router>
      <TopHeader />
      <Header />
      <Body/>
      <Footer />
    </Router>
  );
}

export default App;
