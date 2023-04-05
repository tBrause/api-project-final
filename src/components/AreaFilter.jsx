// DATA
import owm from '../owm.json';

// USE
import { useEffect, useState } from 'react';

export default function AreaFilter({
	listData,
	cityData,
	setFilterTemp,
	setFilterWind,
}) {
	const [rangeSky, setRangeSky] = useState(1);
	const [rangeTemp, setRangeTemp] = useState(0);
	const [rangeWind, setRangeWind] = useState(0);
	const minMaxTemp = [];
	const minMaxWind = [];

	// minMaxTemp
	listData.map((item) => {
		minMaxTemp.push(item.main.temp);
	});
	const minTemp = (minMaxTemp) => minMaxTemp.reduce((x, y) => Math.min(x, y));
	const maxTemp = (minMaxTemp) => minMaxTemp.reduce((x, y) => Math.max(x, y));

	const handleTemp =
		rangeTemp !== 0 ? rangeTemp : Math.ceil(maxTemp(minMaxTemp));

	// SET filterTemp
	useEffect(() => {
		setFilterTemp(parseInt(handleTemp));
	}, [setFilterTemp, handleTemp]);

	// minMaxWind
	listData.map((item) => {
		minMaxWind.push(item.wind.speed);
	});
	const minWind = (minMaxWind) => minMaxWind.reduce((x, y) => Math.min(x, y));
	const maxWind = (minMaxWind) => minMaxWind.reduce((x, y) => Math.max(x, y));

	const handleWind =
		rangeWind !== 0 ? rangeWind : Math.ceil(maxWind(minMaxWind));

	// SET filterWind
	useEffect(() => {
		setFilterWind(parseInt(handleWind));
	}, [setFilterWind, handleWind]);
	// console.log(filterTemp);

	return (
		<div className="filter">
			<form className="filter_form" onSubmit={(e) => e.preventDefault()}>
				{/* <div className="filter_sky_range">
					<label htmlFor="1">Sky</label>
					<input
						id="1"
						type="range"
						min="1"
						max="5"
						value={rangeSky}
						onChange={(e) => setRangeSky(e.target.value)}
					/>
				</div> */}
				<div className="filter_temp_range">
					<label htmlFor="2">
						<strong>Temperatur</strong> (mind. <strong>{handleTemp} °C</strong>)
					</label>
					<input
						id="2"
						type="range"
						step="1"
						min={Math.round(minTemp(minMaxTemp))}
						max={Math.ceil(maxTemp(minMaxTemp))}
						value={handleTemp}
						onChange={(e) => setRangeTemp(e.target.value)}
					/>
				</div>
				<div className="filter_wind_range">
					<label htmlFor="2">
						<strong>Wind</strong> (max. <strong>{handleWind}m/s</strong>)
					</label>
					<input
						id="3"
						type="range"
						step="1"
						min={Math.round(minWind(minMaxWind))}
						max={Math.ceil(maxWind(minMaxWind))}
						value={handleWind}
						onChange={(e) => setRangeWind(e.target.value)}
					/>
					{/* <div className="text-box">max. {handleWind}</div> */}
				</div>
			</form>
		</div>
	);
}
