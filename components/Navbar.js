import react, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Image from 'next/image';
import loupe from '../public/loupe.png';

export default function Navbar() {
  const [user, setUser] = useState(null);
  return (
    <div className={styles.navcontainer}>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand"><h3><b>NFT Marketplace</b></h3></a>
          <form className="d-flex">
              <Image src={loupe} width="100%" height="100%" alt=''/><input className="form-control me-2" type="search" placeholder="Search items and collections" aria-label="Search"/>
              <button className="btn btn-outline-info" type="submit">Search</button>
          </form>
          <div>
          {user ? (
            <button className="btn btn-primary" type="submit">Logout</button>
          ) : (
            <button className="btn btn-primary" type="submit">Login</button>
          )}
        </div>
        </div>
        
      </nav>
    </div>
  );
}