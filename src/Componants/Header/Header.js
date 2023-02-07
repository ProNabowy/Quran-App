import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { audio, chooseReader } from "../HelperFunctions/helperFunctions";
import { getCurrentChapter } from "../Slices/active-chapter";
import { getCurrentReader } from "../Slices/currentReader";
import "./header.css";
const Header = () =>
{
    const currentChapter = useSelector(store => store.currentChapter);
    const chapters = useSelector(store => store.chapters);
    const [input_value, set_input_value] = useState("");
    const index = useSelector(store => store.currentReader);
    const dispatch = useDispatch();
    const [currentReader, setcurrentReader] = useState(0);


    // active search input 
    const search = (e) =>
    {
        e.preventDefault();

        let getSong = chapters.filter(chapter => chapter.name_arabic.includes(input_value))[0];
        audio.currentTime = 0;
        audio.pause();
        return dispatch(getCurrentChapter(getSong));
    };
    useEffect(() =>
    {
        dispatch(getCurrentReader(currentReader));
    }, [currentReader]);

    return (
        <header className="p-3 d-flex justify-content-between align-items-center">
            <ul className="list d-flex justify-content-between align-items-center">
                <li><Link to={"/"} className={`text-white`}  >Discover</Link></li>
            </ul>
            <select className="p-1 pe-3 ps-3 text-white" onChange={(e) =>
            {

                return setcurrentReader(chooseReader(currentChapter["audio_files"], e.target.value));
            }} style={{ "cursor": "pointer" }}>
                <option value="mishari_al_afasy">Mishari Al Afasy</option>
                <option value="Abu Bakr al-Shatri">Abu Bakr Al-Shatri</option>
                <option value="Sa`ud ash-Shuraym">Sa`ud ash-Shuraym</option>
                <option value="Khalifah Taniji">Khalifah Taniji</option>
                <option value="Hani ar-Rifai">Hani ar-Rifai</option>
                <option value="Mahmoud Khaleel Al-Husary">Mahmoud Khaleel Al-Husary</option>
                <option value="Muhammad Siddiq al-Minshawi">Muhammad Siddiq al-Minshawi</option>
                <option value="Abdul Basit Abdul Samad">Abdul Basit Abdul Samad</option>
                <option value="Abdur-Rahman as-Sudais">Abdur-Rahman as-Sudais</option>
            </select>
            <div className="search position-relative">
                <form onSubmit={(e) => { search(e) }}>
                    <input type="search" onChange={(e) => set_input_value(e.target.value)} id="search_input" placeholder="Search Music" />
                </form>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div>
                <img src={`${currentChapter["audio_files"][index]["bg-sm"]}`} alt={currentChapter.words} className={"d-lg-block d-none"} />
            </div>
        </header>
    )
}


export default Header;