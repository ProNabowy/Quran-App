import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromAPI } from "../Slices/chapterSlice";
import EffectIcons from "./Icone_Controlar/EffectIcons";
import "./chapterControalr.css";
import Thumb from "./Thumb/Thumb";
import Volume from "./Volume/Volume";
const ChapterControalr = (props) =>
{
    const showSinger = props.showSinger;
    const currentChapter = useSelector(store => store.currentChapter);
    const chapters = useSelector(store => store.chapters);
    const index = useSelector(store => store.currentReader);
    const dispatch = useDispatch();

    useEffect(() =>
    {
        dispatch(getDataFromAPI());
    }, [dispatch]);
    return (
        <div className="m_controaler ps-4 d-flex flex-wrap justify-content-center align-items-center">
            {
                showSinger &&
                <div className="song-details d-lg-flex d-none">
                    <div className="loader">
                        <div className="line line1"></div>
                        <div className="line line2"></div>
                        <div className="line line3"></div>
                    </div>
                    <div className="song-details me-4 ms-3 d-flex align-items-center ">
                        <div>
                            <img src={`${currentChapter["audio_files"][index]["bg-sm"]}`} alt={`${currentChapter.words.slice(0, 20)}...`} />
                        </div>
                        <div>
                            <h6 className="mb-1 text-white fw-bold" style={{ "fontSize": "13px" }}>{currentChapter.name_arabic}</h6>
                            <p className="text-white-50 fw-bold" style={{ "fontSize": "10px" }}>{Object.keys(currentChapter["audio_files"][index])[0]}</p>
                        </div>
                    </div>
                </div>
            }
            <EffectIcons currentChapter={currentChapter} chapters={chapters} />
            <Thumb />
            <Volume />
        </div>
    );
}


export default ChapterControalr;