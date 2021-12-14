import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import styles from '../../styles/Marketplace.module.css'
import Image from 'next/image';
import react, { useState, useEffect} from "react";

export default function Home() {
  const [maCard, setCard] = useState(null);

  useEffect(() => {
    setCard(JSON.parse(localStorage.getItem('selected_product')))
  }, []);

  return (
    <div>
     
        <Navbar />
        <div className={styles.container}>
        { maCard && (
        <Card title={maCard.title} img={maCard.img} desc={maCard.desc} price={maCard.price} />
        ) 
        }
        </div>
    </div>
  )
}