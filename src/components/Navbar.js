import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styles from '../components/Navbar.module.css'
import { FavContext } from './../store/favoriteContext';
import { LoginContext } from './../store/loginContext';
import { FaHome, FaPlus, FaList , FaStar , FaSignOutAlt, FaSignInAlt } from "react-icons/fa";

export default function Navbar() {
 const favC= useContext(FavContext)
 const logC= useContext(LoginContext)
 const navigate = useNavigate()
 function logoutHandler(){
  logC.seDeconnecter()
  navigate('/login')
 }
 if(logC.isLogged)
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>Tunisian Series</h1>
      <nav>
        <ul className={styles.listLink}>
            <Link className={styles.link} to="/"><FaHome></FaHome> Home</Link>
            <Link className={styles.link} to="/all-series"> <FaList></FaList> All Series</Link>
            <Link className={styles.link} to="/add-new-serie"><FaPlus></FaPlus> Add New Serie</Link>
            <Link className={styles.link} to="/favorites"><FaStar></FaStar> Favorites <span className={styles.badge}>{favC.nbFavorites} </span> </Link>
            <button className={styles.logout} onClick={logoutHandler} > <FaSignOutAlt></FaSignOutAlt> Logout </button>
        </ul>
        </nav>
    </div>
  )
  else {
    return (
      <div className={styles.navbar}>
      <h1 className={styles.logo}>Tunisian Series</h1>
            <nav>
                <ul>
                <Link className={styles.link} to="/login"><FaSignInAlt></FaSignInAlt> Login</Link>

                </ul>
            </nav>
        </div>
    );
}
}

