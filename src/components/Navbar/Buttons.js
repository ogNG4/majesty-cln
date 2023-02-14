import { BsSearch, BsCart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

import css from './Buttons.module.css'
import poland from "../../assets/poland.jpg";
import france from "../../assets/france.jpg";
import uk from "../../assets/uk.jpg";

const Buttons = (props) =>{
    return(
        <div className={css["nav-buttons"]}>
        <button className={css["nav-button"]}>
          <BsSearch />
        </button>
        <button className={css["nav-button"]}>
          <AiOutlineUser />
        </button>
        <button className={css["nav-button"]}>
          <BsCart />
        </button>
        <button className={css["nav-country-button"]}>
          <img className={css['country-img']} src={poland} alt="" />
        </button>
        <button className={css["nav-country-button"]}>
          <img className={css['country-img']} src={uk} alt="" />
        </button>
        <button className={css["nav-country-button"]}>
          <img className={css['country-img']} src={france} alt="" />
        </button>
        <button onClick={props.onShowNav} className={css["burger-btn"]}>
          <BiMenu />
        </button>
      </div>
    );
};

export default Buttons;