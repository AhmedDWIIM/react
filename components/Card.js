import react, { useState, useEffect } from 'react';
import styles from '../styles/Marketplace.module.css'
import Image from 'next/image';

export default function Card(props) {
    return (
    <div className={styles.card}>
        <h3>{props.title}</h3><br/>
        <Image width="100%" height="100%" src={props.img} alt=""/>
        <p>{props.desc}</p><br/>
        <h4>{props.price}</h4>
        <button className="btn btn-primary" type="submit">Login</button>
    </div>
    );
}