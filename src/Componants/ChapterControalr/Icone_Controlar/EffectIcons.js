import { Fragment, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlePrevNextControls, hunadler_current_chapter } from "../../HelperFunctions/helperFunctions";
import { getCurrentChapter } from "../../Slices/active-chapter";


const EffectIcons = ({ ...props }) =>
{
    const currentChapter = props.currentChapter;
    const chapters = props.chapters;
    const dispatch = useDispatch();
    const index = useSelector(store => store.currentReader);
    return (
        <Fragment>
            <div className="item-controlar">
                <i className="fa-solid fa-backward-step perv-icone" onClick={() =>
                {
                    // push new song to default song store
                    dispatch(getCurrentChapter(...chapters.filter(chapter => +chapter.id === Number(currentChapter.id) - 1)));
                    return handlePrevNextControls(chapters, currentChapter, index);
                }}></i>

                <i className="fa-solid fa-play thumb-icone" onClick={(e) => hunadler_current_chapter(e, currentChapter, index)}></i>
                <i className="fa-solid fa-forward-step next-icone" onClick={() =>
                {
                    // push new song to default song store
                    dispatch(getCurrentChapter(...chapters.filter(chapter => +chapter.id === Number(currentChapter.id) + 1)));
                    return handlePrevNextControls(chapters, currentChapter, index);
                }}></i>
            </div>
        </Fragment>
    );
}

export default EffectIcons;