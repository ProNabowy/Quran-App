import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import Controalr from "../ChapterControalr/Controalr";
import LastListeningUi from "./Last_listening_Ui/Last_Listening_Ui";


const LastListening = () =>
{
    return (
        <Fragment>
            <Container>
                <Header />
                <LastListeningUi />
            </Container>
            <Controalr showSinger={true} />
        </Fragment>
    );
};

export default LastListening;