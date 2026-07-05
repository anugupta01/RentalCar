import React from 'react';
import styles from '../Css/Home.module.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.jpeg';
import icon3 from './images/icon3.png';

const Footer = () => {
  return (
    <div className={styles.foot}>
      <div className={styles.hea}>
        <h2>
          <u>Contact us</u>
        </h2>
      </div>
      <div className={styles.contact}>
        <strong>Email : </strong> anugupta02@gmail.com
        <br />
        <strong>Phone no : </strong>9968282854
        <br />
        <div>
          <img src={icon1} style={{ margin: '10px' }} height="30px" width="30px" alt="icon" />
          <img src={icon2} style={{ margin: '10px' }} height="30px" width="30px" alt="icon" />
          <img src={icon3} style={{ margin: '10px' }} height="30px" width="30px" alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;