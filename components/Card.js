import react, { useState, useEffect } from 'react';
import styles from '../styles/Marketplace.module.css'
import Image from 'next/image';
import { Router, useRouter } from 'next/router'

export default function Card(props) {
    const [selected,setSelected] = useState(null);
    const router = useRouter();
   
    useEffect(() => {
        console.log(selected);
      }, [selected])

    const gotoproductpage = () => {
        router.push('/product/[productname]',` /product/${props.title}`);
    }

    return (
    <div className={styles.card}>
        <h3>{props.title}</h3><br/>
        <Image width="100%" height="100%" src={props.img} alt=""/>
        <p>{props.desc}</p><br/>
        <h4>{props.price}</h4>
        <button onClick={
            () => {
            localStorage.setItem("selected_product", JSON.stringify(props))
            gotoproductpage(props.title);
        }
        }   className="btn btn-primary" type="submit">Buy</button>
    </div>
    );
}