

import css from "./RecentlyProductItem.module.css";


const RecentlyProductItem = (props) => {
  return (
    <div className={css["product-item"]}>
      <div className={css["product-img"]}>
        <img src={props.src} alt="product" />
      </div>
      <p className={css["product-info"]}>{props.title}</p>
    </div>
  );
};

export default RecentlyProductItem;
