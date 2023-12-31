/* 
Filename: App.js

Code: Main App function for launching the application
*/

// Importing CSS
import './CSS/App.css';
import { useState } from 'react';
import {deposit, withdraw, addIntrest, charges} from './store/bank'
import { useDispatch, useSelector } from 'react-redux';

// Main App function
function App() {

	const [bankBalance, setBankBalance] = useState(0)

	const balance = useSelector((state) => state.bank.value)
	const dispatch = useDispatch()

	// Calling the reducer functions
	// Calling the deposit reducer function
	const handleDepositClick = () => {
		dispatch(deposit(Number(bankBalance)))
		setBankBalance(0)
	}

	// Calling the withdraw reducer function
	const handleWithdrawlick = () => {
		dispatch(withdraw(Number(bankBalance)))
		setBankBalance(0)
	}

	// Calling the addIntrest reducer function
	const handleIntrestCLick = () => {
		dispatch(addIntrest())
	}

	// Calling the charges reducer function
	const handleChargesClick = () => {
		dispatch(charges())
	}

	return (
		<div className="App">
			<h1>Balance: R{balance}</h1>
			<div className="Buttons">
				<div id="deposit">
					<h3>Deposit</h3>
					<input 
						type="number"
						onChange={(e) => setBankBalance(e.target.value)}
					/>
					<button onClick={handleDepositClick}>Deposit</button>
				</div>
				<div id="withdraw">
					<h3>WithDraw</h3>
					<input 
						type="number"
						onChange={(e) => setBankBalance(e.target.value)}
					/>
					<button onClick={handleWithdrawlick}>Withdraw</button>
				</div>
				<div id="intrest">
					<h3>Intrest</h3>
					<button onClick={handleIntrestCLick}>Intrest</button>
				</div>
				<div id="Charges">
					<h3>Charges</h3>
					<button onClick={handleChargesClick}>Charges</button>
				</div>
			</div>
		</div>
	);
}

// Export the component
export default App;
