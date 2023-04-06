// USE
import { useState } from 'react';

// COMPONENTS
import AreaFilter from './AreaFilter';
import AreaCity from './AreaCity';
import AreaList from './AreaList';
import AreaResults from './AreaResults';

// EXPORT
export default function Filter({ listData, cityData }) {
	// useState
	const [filterTemp, setFilterTemp] = useState(0);
	const [filterWind, setFilterWind] = useState(0);
	const [filterSky, setFilterSky] = useState(0);

	// () getFilteredData
	const filteredData = getFilteredData(
		listData,
		filterTemp,
		filterWind,
		filterSky
	);

	// RETURN
	return (
		<>
			{/* AreaFilter */}
			{listData && (
				<AreaFilter
					listData={listData}
					setFilterTemp={setFilterTemp}
					setFilterWind={setFilterWind}
					setFilterSky={setFilterSky}
				/>
			)}

			{/* AreaResults */}
			{filteredData && (
				<AreaResults filteredData={filteredData} listData={listData} />
			)}

			{/* AreaCity & AreaList */}
			<main className="main_container">
				{cityData && <AreaCity cityData={cityData} />}
				{filteredData && <AreaList filteredData={filteredData} />}
			</main>
		</>
	);
}

// () getFilteredData
function getFilteredData(listData, filterTemp, filterWind, filterSky) {
	const filteredData = listData
		.filter(({ main }) => main && main.temp <= filterTemp)
		.filter(({ wind }) => wind && wind.speed <= filterWind)
		.filter(({ clouds }) => clouds && clouds.all <= filterSky);
	return filteredData;
}
