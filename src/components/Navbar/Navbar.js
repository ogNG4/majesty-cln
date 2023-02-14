import { useRef } from "react";
import { FaTimes} from 'react-icons/fa'

import Buttons from "./Buttons";
import css from "./Navbar.module.css"
import logo from "../../assets/logo.png"


const Navbar = () => {
  const navRef = useRef(null);

  const showNavbar = () =>{
    navRef.current.classList.toggle(css.show);
  }



  return (
    <header className={css.header}>
      <div className={css.logo}>
        <img src={logo} alt="" />
      </div>
      <nav ref = {navRef} className={css.menu}>
        <button onClick={showNavbar} className={css.button}>
          <FaTimes />
        </button>
          <a href="/#" className={css['menu-item']}>Narty <span className={css.plus}>+</span></a>
          <a href="/#" className={css['menu-item']}>Wiązania <span className={css.plus}>+</span></a>
          <a href="/#" className={css['menu-item']}>Buty Narciarskie <span className={css.plus}>+</span></a>
          <a href="/#" className={css['menu-item']}>Kije <span className={css.plus}>+</span></a>
          <a href="/#" className={css['menu-item']}>Foki <span className={css.plus}>+</span></a>
          <a href="/#" className={css['menu-item']}>Odzież <span className={css.plus}>+</span></a>
          <a href="/#" className={css['menu-item']}>Gogle <span className={css.plus}>+</span></a>
          <a href="/#" className={css['menu-item']}>Akcesoria <span className={css.plus}>+</span></a>
          <a href="/#" className={css['menu-item']}>Damskie <span className={css.plus}>+</span></a>
          <a href="/#" className={css['menu-item']}>Lawinowe ABC <span className={css.plus}>+</span></a>
      </nav>
     <Buttons onShowNav = {showNavbar}/>
    </header>
  );
};

export default Navbar;
