import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { data } from './data/data';
import Home from './Home';
import AllProduct from './Allproduct';
import Product from './Product';
import Booked from './Booked';
import About from './About';
import Contact from './Contact';
import styles from '../Css/Home.module.css';
import log from './images/log.jpg';

const Main = () => {
  return (
    <>
      <div className={styles.Navbar}>
        <img src={log} height="30px" width="30px" className={styles.Nav} alt="" />
        <h2 className={styles.Nav}>RentalCar.com</h2>
        <div className={styles.nav1}>
          <Link to="/">
            <button type="button" className="btn btn-dark">Home</button>
          </Link>
        </div>
        <div className={styles.Nav}>
          <Link to="/aboutus">
            <button type="button" className="btn btn-dark">About us</button>
          </Link>
        </div>
        <div className={styles.Nav}>
          <Link to="/allproduct">
            <button type="button" className="btn btn-dark">cars on rent</button>
          </Link>
        </div>
        <div className={styles.Nav}>
          <Link to="/contactus">
            <button type="button" className="btn btn-dark">Contact</button>
          </Link>
        </div>
        <div className={styles.Nav}>
          <Link to="/booked"></Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproduct" element={<AllProduct data={data} />} />
        <Route
          path="/allproduct/:carName"
          element={<Product data={data} />}
        />
        <Route path="/booked" element={<Booked />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Main;