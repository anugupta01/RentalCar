import React, { useSyncExternalStore } from 'react';
import styles from '../Css/Home.module.css';
import { store } from '../redux/store';
import { Order } from '../redux/Action';

const Booked = () => {
  // Subscribe to the plain Redux store without react-redux.
  // useSyncExternalStore re-renders whenever store state changes.
  const id = useSyncExternalStore(store.subscribe, () => store.getState().id);

  return (
    <div>
      <h2 className={styles.pad} style={{ padding: '20%', marginLeft: '250px' }}>
        Thanks for your Booking
        <div>
          <button onClick={() => store.dispatch(Order())}>Order id</button>
        </div>
        {id}
      </h2>
    </div>
  );
};

export default Booked;