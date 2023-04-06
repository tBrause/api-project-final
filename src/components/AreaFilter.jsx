// USE
import { useEffect, useState } from 'react';

// EXPORT
export default function AreaFilter({
	listData,
	setFilterTemp,
	setFilterWind,
	setFilterSky,
}) {
	// useSate & Arrays
	const [rangeSky, setRangeSky] = useState(0);
	const [rangeTemp, setRangeTemp] = useState(0);
	const [rangeWind, setRangeWind] = useState(0);
	const minMaxTemp = [];
	const minMaxWind = [];
	const minMaxSky = [];

	// minMaxTemp
	listData.map((item) => {
		minMaxTemp.push(item.main.temp);
	});
	const minTemp = (minMaxTemp) => minMaxTemp.reduce((x, y) => Math.min(x, y));
	const maxTemp = (minMaxTemp) => minMaxTemp.reduce((x, y) => Math.max(x, y));
	const handleTemp =
		rangeTemp !== 0 ? rangeTemp : Math.ceil(maxTemp(minMaxTemp));
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
	useEffect(() => {
		setFilterWind(parseInt(handleWind));
	}, [setFilterWind, handleWind]);

	// minMaxSky
	listData.map((item) => {
		minMaxSky.push(item.clouds.all);
	});
	const minSky = (minMaxSky) => minMaxSky.reduce((x, y) => Math.min(x, y));
	const maxSky = (minMaxSky) => minMaxSky.reduce((x, y) => Math.max(x, y));
	const handleSky = rangeSky !== 0 ? rangeSky : Math.ceil(maxSky(minMaxSky));
	useEffect(() => {
		setFilterSky(parseInt(handleSky));
	}, [setFilterSky, handleSky]);

	// RETURN
	return (
		<div className="filter">
			<form className="filter_form" onSubmit={(e) => e.preventDefault()}>
				<div className="filter_sky_range">
					<label htmlFor="4">
						<strong>Bewölkung</strong> (max. <strong>{handleSky}%</strong>)
					</label>
					<input
						id="4"
						type="range"
						step="1"
						min={Math.round(minSky(minMaxSky))}
						max={Math.round(maxSky(minMaxSky))}
						value={handleSky}
						onChange={(e) => setRangeSky(e.target.value)}
					/>
				</div>

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
					<label htmlFor="3">
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
				</div>
			</form>
		</div>
	);
}
