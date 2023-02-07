import { useEffect } from "react";
import { volumeHandler } from "../../HelperFunctions/helperFunctions";
import "../chapterControalr.css";
const Volume = () =>
{
    // calling functions when page loaded
    useEffect(() =>
    {
        volumeHandler();
    }, []);


    return (
        <div className="d-flex volume-controlar justify-content-between align-items-center">
            <i className="fa-solid me-3 volume-icone text-white fa-volume-high"></i>
            <div className="thumb-controal w-100 position-relative">
                <input type="range" id="thumb-volume" name="volume" defaultValue={0} steps={0} min={0} />
                <span className="thumb-ui-full-width"></span>
                <span className="thumb-ui volume-thumb"></span>
                <span className="thumb-cricle volume-cricle"></span>
            </div>
        </div>
    );
}

export default Volume;