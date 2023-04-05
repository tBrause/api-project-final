export default function City({ cityData }) {
	// console.log(cityData);

	// City Data from API
	const { name, sunrise, sunset } = cityData;

	// Sunrise
	const dateSunrise = setLocalDate(sunrise, optionsDate);
	const timeSunrise = setLocalTime(sunrise, optionsTime);

	// Sunset
	const dateSunset = setLocalDate(sunset, optionsDate);
	const timeSunset = setLocalTime(sunset, optionsTime);

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

const optionsDate = {
	month: 'long',
	day: 'numeric',
};

const optionsTime = {
	hour: '2-digit',
	minute: '2-digit',
};

function setLocalDate(when, optionsDate) {
	return new Date(when * 1000).toLocaleString('de-DE', optionsDate);
}

function setLocalTime(when, optionsTime) {
	return new Date(when * 1000).toLocaleTimeString('de-DE', optionsTime);
}
