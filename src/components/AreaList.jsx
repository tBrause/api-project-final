import AreaForecastHour from './AreaForecastHour';

export default function AreaList({ filteredData }) {
	// console.log(listData);

	return (
		<ol className="main_container_list">
			{filteredData.map((item) => (
				<AreaForecastHour {...item} key={item.dt} />
			))}
		</ol>
	);
}
