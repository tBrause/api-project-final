// DATA
import owm from '../owm.json';

// USE
import { useEffect, useState } from 'react';

// COMPONENTS
import AreaFilter from './AreaFilter';
import AreaCity from './AreaCity';
import AreaList from './AreaList';

export default function Filter({ listData, cityData }) {
	// console.log(listData);
	// console.log(cityData);
	const [filterTemp, setFilterTemp] = useState(0);
	const [filterWind, setFilterWind] = useState(0);

	// useEffect(() => {
	// 	setFilterTemp(20);
	// }, []);

	// console.log(filterTemp);

	return (
		<>
			<div>{filterTemp}</div>
			<div>{filterWind}</div>
			<AreaFilter
				listData={listData}
				cityData={cityData}
				setFilterTemp={setFilterTemp}
				setFilterWind={setFilterWind}
			/>
			<main className="main_container">
				<AreaCity cityData={cityData} />
				<AreaList listData={listData} />
			</main>
		</>
	);
}
