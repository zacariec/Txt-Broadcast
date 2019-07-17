import React from 'react';
import ReactDOM from 'react-dom';
import QComp from './QuotesComp';

class Quotes extends React.Component {
	constructor(props){
		super(props);
	}


	render(){
	let rows = [];
	for (let i=0; i< 15; i++) {
		rows.push(<QComp key={i} />)
	}
		return(
		<div>
			<div>
				<h1>Quotes</h1>
			</div>
			{rows}
		</div>
		);
	}
}

export default Quotes;