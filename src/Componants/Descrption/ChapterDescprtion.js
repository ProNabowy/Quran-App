import { useSelector } from "react-redux";
import { audio } from "../HelperFunctions/helperFunctions";
import "./chapterDescrption.css";
const ChapterDescrption = () =>
{
    const currentChapter = useSelector(store => store.currentChapter);
    return (
        <article className="p-5 pb-3 ">
            <h1 className="mb-3 song-name text-white">{currentChapter && currentChapter.name_arabic}</h1>
            <p style={{ "maxWidth": "65%", "fontSize": "13px" }} className={"mb-5 descrption text-white-50"} >{currentChapter && currentChapter.words.slice(0, 300)}...</p>
            <div className="btns-group text-center">
                <button className="pe-lg-5 ps-lg-5 me-lg-3 me-2 pe-3 ps-3 btn btn-primary play-btn" style={{ "background": "#4dcee4" }} onClick={(e) => audio.play()} >PLAY</button>
                <button className="pe-lg-5 ps-lg-5 me-lg-3 me-2 pe-3 ps-3  btn btn-outline-primary">FOLLOW</button>
            </div>
        </article>
    );
}


export default ChapterDescrption;