export default function Search({ lat, lon }) {
	console.log(parseFloat(lon));
	return (
		<div>
			{lon} {lat}
		</div>
	);
}
