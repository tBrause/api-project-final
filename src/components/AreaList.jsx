import AreaForecastHour from './AreaForecastHour';

export default function AreaList({ listData }) {
	// console.log(listData);

	return (
		<ol className="main_container_list">
			{listData.map((item) => (
				<AreaForecastHour {...item} key={item.dt} />
			))}
		</ol>
	);
}
