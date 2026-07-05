import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../Css/Home.module.css';
import aveo from './images/aveo.jpg';
import ford from './images/ford_escape.jpg';
import hondaAccord from './images/honda_accord.jpg';
import hondaCivic from './images/honda_civic.jpg';
import landRover from './images/land_rover.jpg';
import toyotaCorolla from './images/toyota_corolla.jpg';

const getImage = (carName) => {
  switch (carName) {
    case 'Aveo':
      return aveo;
    case 'Ford Escape':
      return ford;
    case 'Honda Accord':
      return hondaAccord;
    case 'Honda Civic':
      return hondaCivic;
    case 'Land Rover':
      return landRover;
    case 'Toyota Corolla':
      return toyotaCorolla;
    default:
      return undefined;
  }
};

const Product = ({ data }) => {
  const { carName } = useParams();
  const item = data.find((i) => i.carName === carName);

  if (!item) {
    return <div style={{ margin: '70px' }}>Car not found.</div>;
  }

  return (
    <div className="row" style={{ height: '750px', marginLeft: '70px' }}>
      <div className="col">
        <div className="card" style={{ width: '25rem', marginTop: '50px' }}>
          <img
            className="card-img-top"
            src={getImage(item.carName)}
            alt="Car"
          />
          <div className="card-body">
            <h2 className="card-title">{item.carName}</h2>
            <div className="card-text">
              <p>
                <strong>Description : </strong>
                {item.description}
              </p>
              <div>
                <strong>Location : </strong>
                {item.location[0]}
              </div>
              <div>
                <strong>Fuel : </strong> {item.fuel}
              </div>
              <div>
                <strong>Price : </strong> {item.price}
              </div>
              <div>
                <strong>Transmission : </strong> {item.transmission}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <div className={styles.mand}>
          <h4>Booking Details</h4>
          <div style={{ marginTop: '40px' }}>Name</div>
          <div>
            <input placeholder="Enter Name" />
          </div>
          <div style={{ marginTop: '10px' }}>Email</div>
          <div>
            <input placeholder="Enter Email" />
          </div>
          <div style={{ marginTop: '10px' }}>Address</div>
          <div>
            <input placeholder="Enter Address" />
          </div>
          <div style={{ marginTop: '10px' }}>Pin Code</div>
          <div>
            <input placeholder="Enter Pincode" />
          </div>
          <div style={{ marginTop: '20px' }}>
            <Link to="/booked">
              <button className="btn btn-dark">Proceed</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;