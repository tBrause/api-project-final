// Helpers
import {
	setLocalDate,
	setLocalTime,
	optionsDate,
	optionsTime,
} from '../helpers';

export default function City({ cityData }) {
	// City Data from API
	const { name, sunrise, sunset } = cityData;

	// Sunrise
	const dateSunrise = setLocalDate(sunrise, optionsDate);
	const timeSunrise = setLocalTime(sunrise, optionsTime);

	// Sunset
	const dateSunset = setLocalDate(sunset, optionsDate);
	const timeSunset = setLocalTime(sunset, optionsTime);

	// RETURN
	return (
		<section className="main_container_city">
			<h1>{name}</h1>
			<i className="wi wi-sunrise"></i>
			{`${dateSunrise}, ${timeSunrise} | `}
			<i className="wi wi-sunset"></i>
			{`${dateSunset}, ${timeSunset}`}
		</section>
	);
}
