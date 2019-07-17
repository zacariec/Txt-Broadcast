import React from 'react';

import axios from 'axios';


class Balance extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bal: ''
		};
	}

componentDidMount(){
	
	//Pass required sign up at https://smsbroadcast.com.au
	let pass = '';
	//Username required sign up at https://smsbroadcast.com.au
	let user = '';
	let url = "https://api.smsbroadcast.com.au/api-adv.php?action=balance&username="+user+"&password="+pass;

	let key = '';
	let conditional = null;


	axios.post(url)
	.then(res => {
		console.log(res);
		console.log(res.data);
		key = res.data;
			this.setState({
			bal: key
		});
	})


}



	render(){
		return(
			<div>
				<h3 className='balance'>{this.state.bal}</h3>
			</div>
			)
	}
}

export default Balance;
