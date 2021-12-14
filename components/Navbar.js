import react, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Image from 'next/image';
import loupe from '../public/loupe.png';

export default function Navbar() {
  const [user, setUser] = useState(null);

  const  [colormode, setColormode] = useState("navbar navbar-light");
  const  [changemode, setChangemode] = useState(false);
  useEffect( () => {
    console.log(colormode)
    changemode ? (setColormode("navbar navbar-dark bg-dark")) : (setColormode("navbar navbar-light"))
  }, [changemode,colormode]) 
  return (
    <div className={styles.navcontainer}>
      <nav className={colormode}>
        <div className="container-fluid">
         <h3> <a className="navbar-brand"><b>NFT Marketplace</b></a></h3>
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
            <div className="form-check">
                <button className="form-check-label" htmlFor="flexCheckDefault" onClick={() => setChangemode(!changemode)} >Night mode </button>
                
      
            </div>
        </div>
        </div>
        
      </nav>
    </div>
  );
}