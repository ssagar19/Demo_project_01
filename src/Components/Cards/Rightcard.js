import React from "react";
import "rightcard.css";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PeopleIcon from "@material-ui/icons/People";
import InsertDriveFileSharpIcon from "@material-ui/icons/InsertDriveFileSharp";
function Leftcard() {
    return (
        <div className="leftCard" style={{ flex: 1, paddingLeft: "11px" }}>
            <h1 className="rightcard-h1">RELATED TO COURSE</h1>

            <div style={{ paddingLeft: "11px" }}>
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                    <PeopleIcon />
                    <h2 className="rightcard-h2">Classroom</h2>
                    <span>show all</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                    <InsertDriveFileSharpIcon />
                    <h2 className="rightcard-h2">Class Files</h2>.
                    <span>show all</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                    <AssignmentIcon />
                    <h2 className="rightcard-h2">Certificates</h2>
                    <span>show all</span>
                </div>
            </div>
        </div>
    );
}

export default Leftcard;
