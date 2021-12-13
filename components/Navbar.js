import react, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navcontainer}>
      <p>elmt 1</p>
      <p>elmt 2</p>
      <p>elmt 3</p>
    </div>
  );
}