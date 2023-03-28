import {Outlet} from "react-router-dom";
import {SearchSection} from "../../modules/search-section";

export const Layout = () => {
    return (
        <div>
            <SearchSection/>
            <Outlet/>
        </div>
    );
};
