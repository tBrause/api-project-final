// NPM
import axios from 'redaxios';

// USE
import { useEffect, useState } from 'react';
import AreaCity from './AreaCity';
import AreaList from './AreaList';
import Filter from './Filter';

// ENV Vars
const { VITE_OPENWEATHERMAP_API_KEY } = import.meta.env;

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
				setResponseSuccess(1);
			}
		}
		getApi();
	}, [lat, lon, localUpdate, cityData, listData, responseSuccess]);

	return (
		<>
			{/* {cityData && <AreaCity cityData={cityData} />}
			<div className="list">{listData && <AreaList listData={listData} />}</div> */}
			{listData && <Filter listData={listData} cityData={cityData} />}
		</>
	);
}

// // appid: `${OPENWEATHERMAP_API_KEY}`,
