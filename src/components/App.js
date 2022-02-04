import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import SortingButtons from "./SortingButtons"
import PigPics from "./PigPics"

function App() {
	const [hogsToFilter, setHogsToFilter] = useState([...hogs])

	const handleFilter = (someHogs) => {
		setHogsToFilter(someHogs)
	}
	

	return (
		<div className="App">
			<Nav />
			<SortingButtons setHogsToFilter={handleFilter} hogsToFilter={hogs}/>
			<PigPics hogsToFilter={hogsToFilter}/>

		</div>
	);
}

export default App;
