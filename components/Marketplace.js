import react, { useState, useEffect } from 'react';
import styles from '../styles/Marketplace.module.css'

export default function Marketplace() {
  const [user, setUser] = useState(null);
  return (
    <div className={styles.navcontainer}>
      <h3>Marketplace</h3>
    </div>
  );
}