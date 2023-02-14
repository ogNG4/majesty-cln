
import DeliveryItem from "./DeliveryItem";
import css from "./Delivery.module.css";
const Delivery = () => {
  return (
    
      <div className={css.items}>
        <DeliveryItem name="Darmowa dostawa" desc="od 200zł" />
        <DeliveryItem name="Szybkie zakupy" desc="bez rejestracji" />
        <DeliveryItem
          name="+58 620 00 66"
          desc="Poniedziałek – piątek (8:00 – 16:00)"
        />
        <DeliveryItem
          name="Szybka wysyłka"
          desc="Zamówienia złożone do 12:00 w dni robocze realizujemy tego samego dnia."
        />
      </div>
    
  );
};

export default Delivery;
