// USE
import { useState, useEffect } from 'react';
import Search from './Search';

export default function App() {
	const [lon, setLon] = useState('lon');
	const [lat, setLat] = useState('lat');
	const [time, setTime] = useState('');
	const [responseSuccess, setResponseSuccess] = useState(0);

	useEffect(() => {
		if (responseSuccess === 1) {
			return;
		}

		navigator.geolocation.getCurrentPosition((position) => {
			try {
				setLat(position.coords.latitude);
				setLon(position.coords.longitude);
			} catch (error) {
				console.log(error.code);
			}
		});

		setTime(new Date());
		setResponseSuccess(1);
	}, [lon, lat, time]);

	return <Search lat={lat} lon={lon} time={time} />;
}
