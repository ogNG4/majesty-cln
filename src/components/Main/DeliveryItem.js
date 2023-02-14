

import css from "./DeliveryItem.module.css";


const DeliveryItem = (props) => {
    return(
        <div className={css.item}>
            <p className={css.name}>{props.name}</p>
            <span className={css.desc}>{props.desc}</span>
        </div>
    );

};

export default DeliveryItem;