import React from "react";

function ExtraStats({specialty, weight, greased, medal}) {
    console.log(weight)
    return(
        <div>
            <p><b>Specialty:</b> {specialty}</p>
            <p><b>Weight:</b> {weight} lbs</p>
            <p>I am <b>{greased === true ? "greased" : "not greased"}</b></p>
            <p><b>highest medal achieved:</b> {medal}</p>
        </div>
    )

}

export default ExtraStats