import { useSelector } from "react-redux";
import styles from "./verses.module.css";
const Verses = () =>
{
    const currentChapter = useSelector(store => store.currentChapter);
    return (
        <div className="w-100 p-5 text-white mt-5">
            <div className={`mt-5 p-2 ${styles.verses} d-flex justify-content-center`} style={{ "border": "", "maxHeight": "350px", "lineHeight": "3", "overflow": "auto" }}>
                {currentChapter.words}
            </div>
        </div>
    )
}

export default Verses