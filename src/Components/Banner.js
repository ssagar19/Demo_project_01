import React from "react";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import NotesIcon from "@material-ui/icons/Notes";
import PictureInPictureIcon from "@material-ui/icons/PictureInPicture";

export default function Banner() {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "blanchedalmond",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
      <div
        style={{
          width: "70%",
          height: "100%",
          padding: "10px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          color: "grey",
        }}
      >
        <div>
          <PictureInPictureIcon />
          Overview
        </div>
        <div>
          <QuestionAnswerIcon />
          QnA
        </div>
        <div>
          <MenuBookIcon />
          Notebook
        </div>
        <div>
          <NotesIcon />
          Transcript
        </div>
      </div>
    </div>
  );
}
