// USE
import { useState } from 'react';

// COMPONENTS
import AreaFilter from './AreaFilter';
import AreaCity from './AreaCity';
import AreaList from './AreaList';
import AreaResults from './AreaResults';

// EXPORT
export default function Filter({ listData, cityData }) {
	// useStae
	const [filterTemp, setFilterTemp] = useState(0);
	const [filterWind, setFilterWind] = useState(0);

	// Function Filter
	const filteredData = getFilteredData(listData, filterTemp, filterWind);

	// Return
	return (
		<>
			<AreaFilter
				listData={listData}
				cityData={cityData}
				setFilterTemp={setFilterTemp}
				setFilterWind={setFilterWind}
			/>
			{filteredData && <AreaResults filteredData={filteredData} />}
			<main className="main_container">
				<AreaCity cityData={cityData} />
				{filteredData && <AreaList filteredData={filteredData} />}
			</main>
		</>
	);
}

// Function Filter
function getFilteredData(listData, filterTemp, filterWind) {
	const filteredData = listData
		.filter(({ main }) => main && main.temp <= filterTemp)
		.filter(({ wind }) => wind && wind.speed <= filterWind);
	return filteredData;
}
