import React from "react";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import NotesIcon from "@material-ui/icons/Notes";
import "banner.css";
import PictureInPictureIcon from "@material-ui/icons/PictureInPicture";

export default function Banner() {
    return (
        <div className="banner-div">
            <div className="banner-style">
                <div>
                    <PictureInPictureIcon />
                    <span className="aligner">Overview</span>
                </div>
                <div>
                    <QuestionAnswerIcon />
                    <span className="aligner">QnA</span>
                </div>
                <div>
                    <MenuBookIcon />
                    <span className="aligner">Notebook</span>
                </div>
                <div>
                    <NotesIcon />
                    <span className="aligner">Transcript</span>
                </div>
            </div>
        </div>
    );
}
