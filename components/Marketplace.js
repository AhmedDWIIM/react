import react, { useState, useEffect } from 'react';
import styles from '../styles/Marketplace.module.css'
import Card from './Card';
import 'bootstrap-css-only/css/bootstrap.min.css'
import { Rerousel } from 'rerousel';


export default function Marketplace() {
  const [user, setUser] = useState(null);
  return (
    <div className={styles.navcontainer}>
      <h3>Trending in <span>all categories</span></h3><br/>
      <div className={styles.mycard}>
          <div className={styles.card}>
          <Card title="Piano King king" img="https://storage.opensea.io/static/promocards/rhymeslikedimez-promo.jpeg"desc="Lorem ipsum dolor sit amet. Ut enim ad minim veniam" price="4000$"/>
          </div>
          <div className={styles.card}>
          <Card title="Mariscal" img="https://storage.opensea.io/static/promocards/mariscal-promocard.jpeg"desc="Lorem ipsum dolor sit amet. Ut enim ad minim veniam" price="4000$"/>
          </div>
          <div className={styles.card}>
          <Card title="Memory" img="https://storage.opensea.io/static/promocards/memory-promocard.jpeg"desc="Lorem ipsum dolor sit amet. Ut enim ad minim veniam" price="4000$"/>
          </div>
      </div>
    </div>
    
   
  );
}