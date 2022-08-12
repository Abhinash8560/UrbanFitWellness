import React from "react";
import "./App.css";
import './scss/mixins/styles.scss';
import Navbar from './components/Navbar'
import Header from "./components/Header";
import About from "./components/About";
import Location from "./components/Location";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Financials from "./components/Financials";
import Footer  from "./components/Footer";
import Layout from "./Pages/Card/Layout/Layout";

import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <>

    {/* <BrowserRouter >
    <Layout >


<Navbar />
        <Routes>
          
          <Route path='/' element={<Header />} />
          <Route path='/About' element={<About />} />
          <Route path='/Location' element={<Location />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Clients' element={<Clients />} />
          <Route path='/Financials' element={<Financials />} />
          <Route path='/Footer' element={<Footer />} />
        </Routes>
        </Layout >


    </BrowserRouter> */}




<Router>
      <Header />
      <About />
      <Location />
      <Menu />
      <Clients />
      <Financials />
      <Footer />
      </Router>
    </>
  );
}

export default App;
