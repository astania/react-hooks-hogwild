import React, { useState } from "react";

function SortingButtons({ setHogsToFilter, hogsToFilter }) {
    const [removeGreased, setRemoveGreased] = useState(true)
    const unGreasedHogs = hogsToFilter.filter(hog => !hog.greased)
    const [currentPigSet, setCurrentPigSet] = useState([...hogsToFilter])

    const toggleGreasedHogs = () => {

        if (removeGreased) {
            setHogsToFilter(unGreasedHogs)
            setRemoveGreased(false)
            setCurrentPigSet(unGreasedHogs)
        } else {
            setHogsToFilter(hogsToFilter)
            setCurrentPigSet(hogsToFilter)
            setRemoveGreased(true)
        }
    }

    const SortArray = (x, y) => {
        return x.name.localeCompare(y.name);
    }

    const sortByName = () => {
        let alphabetizedPigs = [...currentPigSet].sort(SortArray);

        setHogsToFilter(alphabetizedPigs)
    }

    const sortByWeight = () => {
        let weightSortedPigs = currentPigSet
    }

    return (
        <div style={{ padding: '10px' }} >
            <button onClick={toggleGreasedHogs}>{removeGreased ? "Remove Greased Pigs" : "Restore Greased Pigs"}</button>
            <button onClick={sortByName}>Sort By Name</button>
            <button onClick={sortByWeight}>Sort by Weight</button>
        </div>
    )

}

export default SortingButtons