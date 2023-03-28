import styles from './layout.module.scss'
import {Outlet} from "react-router-dom";
import {SearchSection} from "../../modules/search-section";

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <SearchSection/>
            <Outlet/>
        </div>
    );
};
