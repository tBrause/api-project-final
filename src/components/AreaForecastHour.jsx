// DATA
import owm from '../owm.json';

// HELPERS
import {
	setLocalDateTime,
	setLocalTimeDate,
	optionsDate,
	optionsTime,
} from '../helpers';

// USE
import { useEffect, useState } from 'react';

// EXPORT
export default function AreaForecastHour({ dt_txt, main, weather, wind }) {
	// useState
	const [descriptionView, setDescriptionView] = useState('');
	const [iconId, setIconId] = useState('');
	const [iconView, setIconView] = useState('');

	// Datum
	const datum = setLocalDateTime(dt_txt, optionsDate);

	// Time
	const time = setLocalTimeDate(dt_txt, optionsTime);

	// SKY => id, main, description, icon
	useEffect(() => {
		weather.map((sky) => {
			const { description, icon } = sky;
			setDescriptionView(description);
			setIconId(icon);
		});
	}, [weather]);

	// Find Icon for Desktop
	useEffect(() => {
		const result = owm.find(({ owm_icon }) => owm_icon === iconId);
		if (result) {
			const iconObject = Object.values(result);
			setIconView(iconObject[2]);
		}
	}, [iconId, iconView]);

	// Temperature, Humidity
	const { temp, humidity } = main;

	// WIND
	const { speed, deg } = wind;

	return (
		<li className="main_container_list_item">
			<span className="date">
				{datum} <strong>{time}</strong>
			</span>

			{/* Sky */}
			<span className="sky">
				{iconView && <i className={`big wi ${iconView}`}></i>}
			</span>

			<span className="description">{descriptionView}</span>

			{/* Temperature */}
			<span className="temperature">{temp} °C</span>

			{/* Humidity */}
			<span className="humidity">Luftfeuchtigkeit: {humidity} %</span>

			{/* Wind */}
			<span className="speed">
				Wind: {speed} m/s
				<i
					className="wi wi-wind-direction wind_direction"
					style={{ transform: `rotate(${deg + 180}deg)` }}
					title={deg}
				></i>
			</span>
		</li>
	);
}
