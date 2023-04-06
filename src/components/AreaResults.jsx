// EXPORT
export default function AreaResults({ filteredData }) {
	// RETURN
	return (
		<>
			<div className="result">
				{filteredData.length}{' '}
				{filteredData.length === 1 ? 'Zeitraum' : 'Zeiträume'}
			</div>
		</>
	);
}
