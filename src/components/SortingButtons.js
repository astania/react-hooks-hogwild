import React, { useState } from "react";

function SortingButtons({ setHogsToFilter, hogsToFilter }) {
    const [removeGreased, setRemoveGreased] = useState(true)
    const unGreasedHogs = hogsToFilter.filter(hog => !hog.greased)

    const toggleGreasedHogs = () => {

        if (removeGreased) {
            setHogsToFilter(unGreasedHogs)
            setRemoveGreased(false)
        } else {
            setHogsToFilter(hogsToFilter)
            setRemoveGreased(true)
        }
    }

    const SortArray = (x, y) => {
        return x.name.localeCompare(y.name);
    }

    const sortByName = (hogsToFilter) => {
        let alphabetizedPigs = hogsToFilter.sort(SortArray);
        // console.log(alphabetizedPigs);
        setHogsToFilter(alphabetizedPigs)
    }



    return (
        <div style={{ padding: '10px' }} >
            <button onClick={toggleGreasedHogs}>{removeGreased ? "Remove Greased Pigs" : "Restore Greased Pigs"}</button>
            <button onClick={sortByName}>Sort By Name</button>
            <button>Sort by Weight</button>
        </div>
    )

}

export default SortingButtons