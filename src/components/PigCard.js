import React, { useState } from "react";
import ExtraStats from "./ExtraStats"

function PigCard({ image, name, specialty, weight, greased, medal }) {
    const [showExtraInfo, setExtraInfo] = useState("true")

    const handleShowExtraCard = () => {
        const toggleExtraInfo = !showExtraInfo
        setExtraInfo(toggleExtraInfo)
        console.log(toggleExtraInfo)
    }

    return (
        <div className="ui eight wide column" onClick={handleShowExtraCard}>
            <img className="ui eight wide column" src={image} alt={name} width="193" height="130" />
            <h3 className="ui eight wide column">{name}</h3>
            {!showExtraInfo ? <ExtraStats specialty={specialty} weight={weight} greased={greased} medal={medal} /> : null}
        </div>
    )

}

export default PigCard