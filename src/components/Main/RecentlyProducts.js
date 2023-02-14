
import RecentlyProductItem from "./RecentlyProductItem";
import css from "./RecentlyProducts.module.css";

import product1 from "../../assets/product1.jpg"
import product2 from "../../assets/product2.jpg"

const RecentlyProducts = () => {
    return(
        <div className={css.card}>
            <h3 className={css.header}>Ostatnio oglądane produkty</h3>
            <div className={css.items}>
                <RecentlyProductItem src={product1} title="Narty freestyle Majesty Comic"/>
                <RecentlyProductItem src={product2} title="Narty freestyle Majesty Vestal"/>
            </div>

        </div>
    );
}

export default RecentlyProducts;