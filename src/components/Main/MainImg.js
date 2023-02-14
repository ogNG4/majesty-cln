

import css from './MainImg.module.css'

import background from '../../assets/background.jpg';

const MainImg = () =>{
    return(
        <div className={css.background}>
            <img src={background} alt="" />
            <h1 className={css.header}>Freeride Touring Range</h1>
            <button className={css.button}>zobacz produkty</button>
        </div>

    );
}


export default MainImg;