import css from "./Sticker.module.css";
import StickerModal from "../UI/StickerModal";
const Sticker = (props) => {
  return (
    <StickerModal onClose={props.onClose}>
      <div className={css.over} onClick={props.onClose}>
        
        <h3>DOSTANIESZ JEŚLI CHCESZ!</h3>
        <p>
          Podeślij zaadresowaną do siebie kopertę zwrotną wraz ze znaczkiem
          pocztowym, tak abyśmy mogli ją do ciebie odesłać. Listy wraz z kopertą
          i znaczkiem prosimy przesłać na adres:
        </p>
        <p>Majesty Skis ul. T. Wendy 15 81-341 Gdynia</p>
        <p>Poczekaj kilka dni i sprawdź w swojej skrzynce pocztowej. Naklejki powinny już być!</p>
      </div>
    </StickerModal>
  );
};

export default Sticker;
