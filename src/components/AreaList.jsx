// COMPONENTS
import AreaForecastHour from './AreaForecastHour';

// EXPORT
export default function AreaList({ filteredData }) {
	// RETURN
	return (
		<ol className="main_container_list">
			{filteredData.map((item) => (
				<AreaForecastHour {...item} key={item.dt} />
			))}
		</ol>
	);
}
