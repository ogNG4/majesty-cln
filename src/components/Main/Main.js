import { Fragment } from "react";

import MainImg from "./MainImg";
import Delivery from "./Delivery";
import Newsletter from "./Newsletter";
import RecentlyProducts from "./RecentlyProducts";
const Main = () =>{
    return(
        <Fragment>
            <MainImg/>
            <Delivery/>
            <Newsletter/>
            <RecentlyProducts/>
        </Fragment>
    )
}

export default Main;