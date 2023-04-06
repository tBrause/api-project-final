// EXPORT
export default function AreaResults({ filteredData, listData }) {
	// RETURN
	return (
		<>
			{filteredData.length !== listData.length && (
				<div>{filteredData.length} Zeiträume</div>
			)}
		</>
	);
}
