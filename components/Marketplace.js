import react, { useState, useEffect } from 'react';
import styles from '../styles/Marketplace.module.css'
import Card from './Card';

export default function Marketplace() {
  const [user, setUser] = useState(null);
  return (
    <div className={styles.navcontainer}>
      <h3>Marketplace</h3><br/>
      <Card title="Piano King king" img="https://storage.opensea.io/static/promocards/rhymeslikedimez-promo.jpeg"desc="THE REALM OF THE PIANO KING HAS NO BORDERS, BECAUSE THE PIANO SPEAKS TO ALL, ACROSS ALL OF TIME." price="4000$"/>
    </div>
  );
}