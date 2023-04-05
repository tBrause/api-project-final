// DATA
import owm from '../owm.json';

// USE
import { useEffect, useState } from 'react';

export default function AreaForecastHour({
	dt,
	dt_txt,
	clouds,
	main,
	weather,
	wind,
}) {
	const [descriptionOut, setDescriptionOut] = useState('');
	const [iconId, setIconId] = useState('');
	const [iconView, setIconView] = useState('');
	const [dayOld, setDayOld] = useState('');

	// SKY => id, main, description, icon
	useEffect(() => {
		weather.map((sky) => {
			const { id, main, description, icon } = sky;
			// console.log(`id: ${id} - ${description} - ${icon} - ${main}`);
			setDescriptionOut(description);
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

	// Temperature, Humidity & Feels Like
	const { temp, humidity, feels_like } = main;

	// WIND
	const { speed, deg } = wind;

	// Datum
	const h = new Date(dt_txt).toLocaleString('de-DE', optionsDate);
	const t = new Date(dt_txt).toLocaleTimeString('de-DE', optionsTime);
	console.log(t);

	if (dayOld !== h) {
		// console.log('Neuer Tag');
	}

	useEffect(() => {
		// console.log('---');
		// console.log(dayOld);

		// SET
		setDayOld(h);
		// console.log('---');

		// console.log(new Date(dt_txt).toLocaleString('de-DE', optionsDate));
	}, [h, dt_txt, dayOld, setDayOld]);

	return (
		<li className="main_container_list_item">
			<span className="date">
				{dayOld} <strong>{t}</strong>
				{/* {t} */}
			</span>
			<br />
			{/* {h} */}
			{/* <span>{dt_txt}</span> */}
			{/* <br /> */}
			{/* Temperature */}

			{/* Sky */}
			<span className="sky">
				{iconView && <i className={`big wi ${iconView}`}></i>}
			</span>

			{/* Temperature */}
			{/* <span className="temperature">
				<i className="fas fa-thermometer-half"></i>
				{temp} °C
			</span> */}
			<span className="description">{descriptionOut}</span>

			<span className="temperature">{temp} °C</span>

			{/* Humidity */}
			<span className="humidity">
				{/* <FontAwesomeIcon icon="far fa-humidity" /> */}
				Luftfeuchtigkeit: {humidity} %
			</span>

			{/* Feels Like */}
			{/* <span>{feels_like} °C</span>
			<br /> */}

			{/* Wind */}
			<span className="speed">
				Wind: {speed}m/s
				<i
					className="wi wi-wind-direction wind_direction"
					style={{ transform: `rotate(${deg + 180}deg)` }}
					title={deg}
				></i>
			</span>
		</li>
	);
}

const optionsDate = {
	month: 'long',
	day: 'numeric',
};

const optionsTime = {
	hour: '2-digit',
	minute: '2-digit',
};

// function setLocalDate(when, optionsDate) {
// 	return new Date(when * 1000).toLocaleString('de-DE', optionsDate);
// }

// function setLocalTime(when, optionsTime) {
// 	return new Date(when * 1000).toLocaleTimeString('de-DE', optionsTime);
// }
