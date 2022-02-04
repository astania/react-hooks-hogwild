import React from "react";
import PigCard from "./PigCard"

function PigPics({ hogsToFilter }) {


    return (
        <div className="ui grid container">
            {hogsToFilter.map(hog => <PigCard key={hog.name} image={hog.image} name={hog.name} specialty={hog.specialty} weight={hog.weight} medal={hog["highest medal achieved"]} greased={hog.greased} />)}
        </div>
    )

}

export default PigPics