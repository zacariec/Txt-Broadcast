import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';




class SendTxtComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number: '',
			name: '',
			time: '',
			type: '',
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
			time: this.state.time,
			type: this.state.type,
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


		//Defining Constant URL.
		//Pass required sign up at https://smsbroadcast.com.au
		let pass = '';
		//Username required sign up at https://smsbroadcast.com.au
		let user = '';
		let url = "https://api.smsbroadcast.com.au/api-adv.php?username="+user+"&password="+pass+"&to="+form.number+"&from=Snooze&maxsplit=10&message="+message;


		//API CALL START.
		//Testing User Error - All input fields need to have SOMETHING in them.
		let key = '';
		let conditional = null;


		//Checking conditions if fields are ok to send, edit these as you see fit.
		if(form.number.length === 10 && form.name.length > 1 && form.time.length > 1 && form.type.length > 3 && form.reference.length > 4){

			axios.post(url)
			.then(res => {
				//Leave these enabled for logging if not working.
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

		//Alerts user if there is nothing entered in 1 or more fields.
		else {
			alert("Please check your fields.");
		}
}




	//rendering objects to component to than be rendered out to the DOM.

render() {



	return (

		<div className='content-form'>

			<form className='form-wrapper'>
				<label>
					<Input
						className='field-input'
						placeholder='Number'
						name='number'
						value={this.state.number}
						onChange={e => this.handleChange(e)}
					/>
				</label>
				
				<label>
					<Input
						className='field-input'
						placeholder='Name'
						name='name'
						value={this.state.name}
						onChange={(e) => this.handleChange(e)}
					/>
				</label>

				<label>
					<Input
						className='field-input'
						placeholder='Time'
						name='time'
						value={this.state.time}
						onChange={e => this.handleChange(e)}
					/>
				</label>

				<label>
					<Input
						className='field-input'
						placeholder='Type'
						name='type'
						value={this.state.type}
						onChange={e => this.handleChange(e)}
					/>
				</label>


				<label>
					<Input
						className='field-input'
						placeholder='Reference'
						name='reference'
						value={this.state.reference}
						onChange={e => this.handleChange(e)}
					/>
				</label>
					<Button
						className='animated-button' 
						animated
						onClick={(e) => this.onSubmit(e)}> 
							<Button.Content visible>Send</Button.Content>
							<Button.Content hidden>
								<Icon name='handshake outline' />
							</Button.Content>

					</Button>
				<h3 
					className='output'
					value={this.state.output}>
					{this.state.output}
				</h3>
			</form>

		</div>
		);
	}


}


export default SendTxtComp;