/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hunadler_current_chapter } from "../HelperFunctions/helperFunctions";
import { getCurrentChapter } from "../Slices/active-chapter";
import { getDataFromAPI } from "../Slices/chapterSlice";
import styles from "./chapters.module.css";

const NavChapter = () =>
{
    const chapters = useSelector((state) => state.chapters);
    const dispatch = useDispatch();
    const index = useSelector(store => store.currentReader);
    useEffect(() =>
    {
        dispatch(getDataFromAPI());
    }, [dispatch]);


    // darw song ui
    const songNavUi = chapters.map(chapter =>
    {
        return (
            <div key={chapter.id} className={`d-flex align-items-center chapter ${styles.navSong}`} style={{ "padding": "10px 15px", "width": "400px" }}>
                <p style={{ color: "var(--text-color)" }} className={"me-2"} >{chapter.id < 10 ? `0${chapter.id}` : chapter.id}</p>
                <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="d-flex ms-3">
                        <img src={chapter["audio_files"][index]["bg-sm"]} alt={chapter.words} style={{ "width": "40px", "height": "40px", }} />
                        <div style={{ "fontSize": "13px" }} className={"ms-3 text-white"} >
                            <p className={`${styles.fsn}`}>{chapter.name_arabic}</p>
                            <p className="text-white-50">{Object.keys(chapter["audio_files"][index])[0]}</p>
                        </div>
                    </div>
                    <i className={`fa-solid fa-play ${styles.icone}`} onClick={(e) =>
                    {
                        hunadler_current_chapter(e, chapter, index);
                        dispatch(getCurrentChapter(chapter));
                    }}></i>
                </div>
            </div>
        )
    });

    return (
        <div>
            {songNavUi}
        </div>
    );
}

export default NavChapter;