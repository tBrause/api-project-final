// USE
import { useState, useEffect } from 'react';

// COMPONENTS
import GetApi from './GetApi';

// localStorage
const localLat = localStorage.getItem('lat');
const localLon = localStorage.getItem('lon');

export default function App() {
	// useState
	const [lon, setLon] = useState();
	const [lat, setLat] = useState();
	const [responseSuccess, setResponseSuccess] = useState(0);

	useEffect(() => {
		if (responseSuccess === 1) {
			return;
		}

		// ? localStorage
		if (localLat && localLon) {
			setLat(localLat);
			setLon(localLon);
			return;
		}

		// GeoLocation
		navigator.geolocation.getCurrentPosition((position) => {
			try {
				// localStorage
				localStorage.setItem('lat', position.coords.latitude);
				localStorage.setItem('lon', position.coords.longitude);

				setLat(position.coords.latitude);
				setLon(position.coords.longitude);

				// Success
				setResponseSuccess(1);
			} catch (error) {
				console.log(error.code);
			}
		});
	}, [responseSuccess]);

	return <>{lon && lat && <GetApi lat={lat} lon={lon} />}</>;
}
