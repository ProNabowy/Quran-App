import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hunadler_current_chapter } from "../../HelperFunctions/helperFunctions";
import { getCurrentChapter } from "../../Slices/active-chapter";

const Last_Listening_Ui = () =>
{
    const dispatch = useDispatch();
    const chapter = useSelector(store => store.currentChapter);
    const index = useSelector(store => store.currentReader);
    return (
        <Container className="mt-5 last-listening">
            <div key={Math.random() * chapter.id} className="p-1 mb-5 position-relative text-white " style={{ "borderRadius": "10px", "border": "1px solid var(--second-color)" }} >
                <div className="listening-cover" style={{ "backgroundImage": `url(${chapter["audio_files"][index]["poster"]})`, "backgroundSize": "cover", "backgroundPosition": "30% 0", "borderRadius": "10px", "width": "100%", "height": "1200px" }}></div>
                <article className="text-center mb-3 ">
                    <h4>{chapter.name_arabic}</h4>
                    <p className="mb-2 text-white-50">{Object.keys(chapter["audio_files"][index])[0]}</p>
                    <p style={{ "lineHeight": "2" }} className="p-2">{chapter.words}</p>
                </article>
                <div className="p-2 d-flex justify-content-center align-items-center" style={{ "backgroundColor": "var(--main-color)", "borderRadius": "10px" }}>
                    <i className={`fa-solid fa-play text-white fs-3`} style={{ "cursor": "pointer" }} onClick={(e) =>
                    {
                        hunadler_current_chapter(e, chapter, index);
                        dispatch(getCurrentChapter(chapter));
                    }}></i>
                </div>
            </div>
        </Container>
    );
};

export default Last_Listening_Ui;