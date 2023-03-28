import {Route, Routes} from "react-router-dom";
import {Layout} from "../../../../components/layout/layout";
import {MainPage} from "../../../../pages/main-page/main-page";
import {BookPage} from "../../../../pages/book-page/book-page";


export const App = () => {

    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path={"/book/:id"} element={<BookPage/>}/>
            </Route>
        </Routes>
    );
};

