import {ImFacebook, ImYoutube, ImInstagram} from "react-icons/im";
import { Fragment, useState } from "react";

import css from "./Footer.module.css";
import Sticker from "./Sticker";

import sticker from "../../assets/sticker.png";

const Footer = () => {

    const[stickerIsShown, setStickerIsShown] = useState(false);

    const showStickerHandler = () =>{
        setStickerIsShown(true);
    }

    const hideStickerHandler = () =>{
        setStickerIsShown(false);
    }

    return (
        <Fragment>
        <div className={css.footer}>
            <div className={css.info}>
                <h4 className={css.header}>Informacje</h4>
                <ul className={css['info-list']}>
                    <li className={css['info-list-item']}>Blog</li>
                    <li className={css['info-list-item']}>O Nas</li>
                    <li className={css['info-list-item']}>Regulamin</li>
                    <li className={css['info-list-item']}>Polityka prywatności</li>
                    <li className={css['info-list-item']}>Reklamacje</li>
                    <li className={css['info-list-item']}>Zwrot towaru</li>
                </ul>
            </div>
            <div className={css.adres}>
            <h4 className={css.header} >Adres</h4>
                <p className={css['company-name']}>MJST Sp. z.o.o.</p> 
                <div className={css['adres-items']}>
                <p>ul. Tadeusza Wendy 15</p>
                <p>81-341 Gdynia</p>
                <p className={css.email}>sklep@majestyskis.pl</p>
                <p>tel +48 58 620 00 66</p>
                </div>
            </div>
            <div className={css.media}>
            <h4 className={css.header} >Social Media</h4>
            <div className={css.buttons}>
                <button>
                    <ImFacebook />
                </button>
                <button>
                    <ImYoutube />
                </button>
                <button>
                    <ImInstagram />
                </button>
            </div>
            </div>
            <div className={css.sticker} onClick={showStickerHandler}>
                <img src={sticker} alt="" />
            </div>
        </div>
        {stickerIsShown&&<Sticker onClose={hideStickerHandler}/>}
        </Fragment>
    );
}

export default Footer;