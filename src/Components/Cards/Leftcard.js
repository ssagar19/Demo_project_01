import React from "react";
import ".leftcard.css";

function Leftcard() {
    return (
        <div className="leftCard" style={{ flex: 1 }}>
            <h1 className="leftcard-heading">INSTRUCTOR</h1>
            <div className="divider">
                <img
                    className="circleImg"
                    width="50px"
                    height="50px"
                    border-radius="50%"
                    src="https://st2.depositphotos.com/12982378/44285/i/1600/depositphotos_442859096-stock-photo-happy-architect-smiling-crossed-arms.jpg"
                    alt="bsns"
                />
                <div style={{ paddingLeft: "10px" }}>
                    <h2 className="leftcard-h2">Rodrigo Diaz</h2>
                    <p className="leftcard-p">
                        Solution Architect, LOrem, Ipsum, enginer
                    </p>
                    <p className="leftcard-p">Analyst, Programmer, worker</p>
                </div>
            </div>
        </div>
    );
}

export default Leftcard;
