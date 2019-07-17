import React from 'react';
import ReactDOM from 'react-dom';
import STC from './SendTxtComp';

class SendTxt extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){

	let rows = [];
	for (let i=0; i< 15; i++) {
		rows.push(<STC key={i} />)
	}
		return(
		<div>
			<div>
				<h1> Day Before Delivery</h1>
			</div>
			{rows}
		</div>
			);
	}
}

export default SendTxt;