import React from 'react';
import './Coin.css';
import {useParams} from 'react-router-dom'
import LineChart from "../../components/LineChart/LineChart.jsx";
import {CoinContext} from '../../context/CoinContext';

const Coin = () => {

    const {coinId}  = useParams();
    const [coinData, setCoinData] = React.useState();
    const [historicalData, setHistoricalData] = React.useState();
    const {currency} = React.useContext(CoinContext)

    const fetchCoinData = async() =>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-AZWy8gDX2MRjGruEW4PYQg2r'}
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
            .then(res => res.json())
            .then(res => setCoinData(res))
            .catch(err => console.error(err));
    }

    const fetchHistoricalData = async () =>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-AZWy8gDX2MRjGruEW4PYQg2r'}
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.symbol}&days=10&interval=daily`, options)
            .then(res => res.json())
            .then(res => setHistoricalData(res))
            .catch(err => console.error(err));
    }


    React.useEffect( () => {
        fetchCoinData();
        fetchHistoricalData();
    },[currency])


    if (coinData && historicalData){
     return (
         <div className="coin">
             <div className="coin-name">
                 <img src={coinData.image.large} alt="" />
                 <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
             </div>
             <div className="coin-chart">
                 <LineChart historicalData={historicalData}/>
             </div>

             <div className="coin-info">
                 <ul>
                     <li>Crypto Market Rank</li>
                     <li>{coinData.market_cap_rank}</li>
                 </ul>
                 <ul>
                     <li>Current Price</li>
                     <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
                 </ul>
                 <ul>
                     <li>Market Cap</li>
                     <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
                 </ul>
                 <ul>
                     <li>24h Hour High</li>
                     <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
                 </ul>
                 <ul>
                     <li>24h Hour Low</li>
                     <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
                 </ul>
             </div>
         </div>
     )
}
 else{
     return(
         <div className="spinner">
             <div className="spin"></div>
         </div>
     )
 }
}



export default Coin;