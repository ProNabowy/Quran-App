import Header from "../Header/Header";
import "./App_controalr.css";
import ChapterDescrption from "../Descrption/ChapterDescprtion";
import Verses from "../Verses/Verses";

const AppControaler = _ =>
{
    return (
        <div className="app-controlar" style={{ "width": "calc(100% - 400px)"}}>
            <Header/>
            <ChapterDescrption />
            <Verses />
        </div>
    )
}

export default AppControaler;