// NPM
import axios from 'redaxios';

// USE
import { useEffect, useState } from 'react';

// COMPONETS
import Filter from './Filter';

// ENV Vars
const { VITE_OPENWEATHERMAP_API_KEY } = import.meta.env;

// EXPORT
export default function GetApi({ lat, lon }) {
	// useState
	const [cityData, setCityData] = useState();
	const [listData, setListData] = useState();
	const [responseSuccess, setResponseSuccess] = useState(0);

	// GET localStorage update
	const localUpdate = localStorage.getItem('update');

	// useEffect
	useEffect(() => {
		if (responseSuccess === 1) {
			return;
		}

		// Check Update
		if (
			localStorage.getItem('city') &&
			localStorage.getItem('list') &&
			(new Date() - new Date(localUpdate)) / 1000 < 60 * 60
		) {
			setCityData(JSON.parse(localStorage.getItem('city')));
			setListData(JSON.parse(localStorage.getItem('list')));
			console.log('Werte vorhanden - kein API Request nötig');
			setResponseSuccess(1);
			return;
		}

		// ASYN Function
		async function getApi() {
			try {
				// query
				const { data } = await axios(
					'https://api.openweathermap.org/data/2.5/forecast',
					{
						params: {
							lat: `${lat}`,
							lon: `${lon}`,
							appid: `${VITE_OPENWEATHERMAP_API_KEY}`,
							units: 'metric',
							lang: 'de',
						},
					}
				);

				// DATA
				const { city, list } = data;

				// SET Props
				setCityData(city);
				setListData(list);

				localStorage.setItem('city', JSON.stringify(city));
				localStorage.setItem('list', JSON.stringify(list));

				// SET localStorage update
				localStorage.setItem('update', new Date());

				// SET query success
				setResponseSuccess(1);
			} catch (error) {
				console.log(error);
				// Stop Reqest
				setResponseSuccess(1);
			}
		}

		// Function getApi
		getApi();
	}, [lat, lon, localUpdate, cityData, listData, responseSuccess]);

	// Return
	return <>{listData && <Filter listData={listData} cityData={cityData} />}</>;
}
