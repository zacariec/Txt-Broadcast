import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';

class QuotesComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number: '',
			name: '',
			sale: '',
			date: '',
			reference: '',
			output: ''
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();

		const form = {
			number: this.state.number,
			name: this.state.name,
			sale: this.state.sale,
			date: this.state.date,
			reference: this.state.reference,
			output: this.state.output
		};

		/*
		 * There are issues with templating within this API? It does not allow for `templating${this.here}`
		 * Using string concation instead.
		 * Also need to note - with Vanilla JS instead of JSX, it allowed for line breaks with \n.
		 * To break lines we need to use URL encoding as so:
		 * Line break:
		 * %0A
		 * Hashtag:
		 * %23
		 * Special URL encoding characters may need to be used. Take caution - don't waste time your own time,
		 * like I did lmao.
		 */

		/* Defining constant Text Message for recipient.
		 * Edit the variable with your own custom message.
		 */

		 let message = ''

		 //Api URL constant.
		 //Pass required sign up at https://smsbroadcast.com.au
		 let pass = '';
		 //Username required sign up at https://smsbroadcast.com.au
		 let user = '';
		 let url = "https://api.smsbroadcast.com.au/api-adv.php?username="+user+"&password="+pass+"&to="+form.number+"&from=Snooze&maxsplit=10&message="+message;


		 //API Function start.
		 let key = '';
		 let conditional = null;

		 if(form.number.length === 10 && form.name.length > 1) {

		 	axios.post(url)
		 	.then(res => {
		 		//Dev logging enabled.
		 		console.log(res);
		 		console.log(res.data);
		 		key = res.data;
		 		if(res.data.includes('OK')){
		 			this.setState({output: key,})
		 			console.log('true')
		 			return true;
		 			conditional = true;
		 		} else if (res.data.includes('BAD')){
		 			console.log('false')
		 			return false;
		 			conditional = false;
		 		}
		 	})
		 }

		 else {
		 	alert("Please check your fields.");
		 }


	}

	render() {
		return(
			<div>
			<form className="form-wrapper">
				
				<label>
					<Input
						className="field-input"
						placeholder="Number"
						name="number"
						value={this.state.number}
						onChange={e => this.handleChange(e)}
					/>
				</label>

				<label>
					<Input
						className="field-input"
						placeholder="Name"
						name="name"
						value={this.state.name}
						onChange={e => this.handleChange(e)}
					/>
				</label>

				<label>
					<Input
						className="field-input"
						placeholder="Sale"
						name="sale"
						value={this.state.sale}
						onChange={e => this.handleChange(e)}
					/>
				</label>

				<label>
					<Input
						className="field-input"
						placeholder="Date"
						name="date"
						value={this.state.date}
						onChange={e => this.handleChange(e)}
					/>
				</label>

				<label>
					<Input
						className="field-input"
						placeholder="Reference"
						name="reference"
						value={this.state.reference}
						onChange={e => this.handleChange(e)}
					/>
				</label>

				<Button
					className="animated-button"
					animated
					onClick={(e) => this.onSubmit(e)}
				>
					<Button.Content visible>Send</Button.Content>
					<Button.Content hidden>
						<Icon name='handshake outline' />
					</Button.Content>
				</Button>

				<h3
					className="output"
					value={this.state.output}
				>
					{this.state.output}
				</h3>
			</form>
			</div>

			);
	}
}

export default QuotesComp;