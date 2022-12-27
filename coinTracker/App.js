import { useEffect, useState } from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	const [usd, setUsd] = useState(0);
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((response) => response.json())
			.then((json) => {
				setCoins(json);
				setLoading(false);
			});
	}, []);

	const onChange = (event) => {
		setUsd(event.target.value);
	};
	return (
		<div>
			<h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
			<input type="number" value={usd} onChange={onChange}></input> <br />
			{loading ? (
				<strong>Loading,,,</strong>
			) : (
				<ul>
					{coins.map((coin) => (
						<li key={coin.id}>
							{coin.name} ({coin.symbol}) : {usd / coin.quotes.USD.price} USD
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default App;
