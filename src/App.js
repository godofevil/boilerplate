import React, { useState, useEffect } from 'react';
import './App.css';
import RateItem from './RateItem';

export default () => {
	const [data, setData] = useState(null);
	useEffect(() => { getData() }, []);

	const getData = async () => {
		await import ('./data.json')                
			.then(data => setData(Object.entries(data.rates)))	
			.catch(err => console.error(err));
    }

	return (
		<div className="app">
			<div className="container">
				<div className="wrap">						
					<div className="rates">
						{ 
							data ?
							data.map(item => <RateItem key={item[0]} value={item} />) :
							null
						}
					</div>					
				</div>	
			</div>			
		</div>         
	)
}