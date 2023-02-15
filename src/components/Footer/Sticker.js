import { FaTimes} from 'react-icons/fa'

import css from "./Sticker.module.css";
import StickerModal from "../UI/StickerModal";
const Sticker = (props) => {
  return (
    <StickerModal onClose={props.onClose}>
      <div className={css.over} onClick={props.onClose}>
        <button className={css.close} onClose={props.onClose}>
          <FaTimes/>
        </button>
        <h3>DOSTANIESZ JEŚLI CHCESZ!</h3>
        <p>
          Podeślij zaadresowaną do siebie kopertę zwrotną wraz ze znaczkiem
          pocztowym, tak abyśmy mogli ją do ciebie odesłać. Listy wraz z kopertą
          i znaczkiem prosimy przesłać na adres:
        </p>
        <p className={css.adres}>Majesty Skis <br></br>ul. T. Wendy 15<br></br> 81-341 Gdynia</p>
        <p>Poczekaj kilka dni i sprawdź w swojej skrzynce pocztowej. Naklejki powinny już być!</p>
      </div>
    </StickerModal>
  );
};

export default Sticker;
