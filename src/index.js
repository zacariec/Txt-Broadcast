import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import Quotes from './components/Quotes';

/*
 * Uncomment below import for production build for Geelong.
 * import SendTxt from './components/SendTxt';
 * add new <li> item + <NavLink /> in const routing = ()
 * <li>
 *		<NavLink activeStyle={{ color: 'orange' }} className="nav_link" to="/sendtxt">Day Before Delivery</NavLink>
 * </li>
 * add Route Path above <Route path="/quotes"
 * <Route path="/sendtxt" component={SendTxt} />
 */


import Balance from './components/Balance';

import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';


const routing = (
	<Router>
		<div className='navbar'>
			<ul>


				<li>
					<NavLink activeStyle={{ color: 'orange' }} className="nav_link" to="/quotes">Quotes</NavLink>
				</li>
			</ul>



			<Route path="/quotes" component={Quotes} />

		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('router'));
ReactDOM.render(<Balance />, document.getElementById('balance'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
