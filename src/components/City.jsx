export default function City({ cityData }) {
	// console.log(cityData);

	const { name, sunrise, sunset } = cityData;

	const optionsDate = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	const optionsTime = {
		hour: '2-digit',
		minute: '2-digit',
	};

	// SUnreise
	const dateSunrise = new Date(sunrise * 1000).toLocaleString(
		'de-DE',
		optionsDate
	);
	const timeSunrise = new Date(sunrise * 1000).toLocaleTimeString(
		'de-DE',
		optionsTime
	);

	// Sunset
	const dateSunset = new Date(sunset * 1000).toLocaleString(
		'de-DE',
		optionsDate
	);
	const timeSunset = new Date(sunset * 1000).toLocaleTimeString(
		'de-DE',
		optionsTime
	);

	console.log(`${dateSunrise} - ${timeSunrise}`);

	// const dateSunset = new Date(sunset * 1000);
	// // var hours = date.getHours();
	// // console.log(hours);

	// console.log(dateSunrise.toLocaleString('de-DE', optionsDate));
	// console.log(dateSunrise.toLocaleTimeString('de-DE', optionsTime));

	// console.log(dateSunset.toLocaleString('de-DE', optionsDate));
	// console.log(dateSunset.toLocaleTimeString('de-DE', optionsTime));

	return (
		<div>
			{name}
			{sunrise}
		</div>
	);
}
