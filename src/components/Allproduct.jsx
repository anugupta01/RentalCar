import React from 'react';
import { Link } from 'react-router-dom';
import aveo from './images/aveo.jpg';
import ford from './images/ford_escape.jpg';
import hondaAccord from './images/honda_accord.jpg';
import hondaCivic from './images/honda_civic.jpg';
import landRover from './images/land_rover.jpg';
import toyotaCorolla from './images/toyota_corolla.jpg';
import styles from '../Css/Home.module.css';

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

const Allproduct = ({ data, match }) => {
  return (
    <div className={styles.zacs}>
      {data.map((item) => (
        <div key={item.carName} className={styles.dhg}>
          <div
            className="card mb-3 shadow-lg p-3 mb-5 bg-white rounded"
            style={{ maxWidth: '650px', height: '300px' }}
          >
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={getImage(item.carName)}
                  height="280px"
                  width="500px"
                  alt="car"
                  className="card-img"
                />
              </div>
              <div className="col-md-8">
                <div
                  className="card-body ml-2"
                  style={{ backgroundColor: 'rgb(252, 237, 31)' }}
                >
                  <h3 className="card-title">{item.carName}</h3>
                  <p>{item.description}</p>
                  <p>
                    <strong>Fuel : </strong> {item.fuel}
                  </p>
                  <strong>${item.price}</strong>
                  <p>
                    <Link
                      to={`${match.url}/${item.carName}`}
                      style={{ marginTop: '20px' }}
                      className="btn btn-dark"
                    >
                      Book Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Allproduct;