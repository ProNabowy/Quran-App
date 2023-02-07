import { Fragment } from "react";
import AppControaler from "../App_Controaler/App_controaler";
import ChapterControalr from "../ChapterControalr/Controalr";
import NavBar from "../NavBar/NavBar";
const HomePage = () =>
{
    return (
        <Fragment>
            <div className="d-flex align-items-start flex-wrap">
                <NavBar />
                <AppControaler />
            </div>
            <ChapterControalr showSinger={true} />
        </Fragment>
    );
};


export default HomePage;