import { useState } from 'react';

//Reusable component for displaying title
const Title = (props) => {
	return (
		<div>
			<h2>{props.text}</h2>
		</div>
	);
};

//Reusable Button component
const Button = ({ onClick, text }) => {
	return (
		<div class='btnCompo'>
			<button class='btn' onClick={onClick}>
				{text}
			</button>
		</div>
	);
};

//A component with table to display the value of each statistic
const StatisticLine = ({ value, text }) => {
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<td className='row'>{text}</td>
						<td className='row'>{value}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

//A conditionally rendered no feedback component
const NoFeedBack = () => {
	return (
		<div>
			<p>No feedback given</p>
		</div>
	);
};

//Component to render each statistic
const Statistics = (props) => {
	const good = props.good;
	const neutral = props.neutral;
	const bad = props.bad;
	const all = props.all;
	const average = props.average;
	const positive = props.positive;

	return all === 0 ? (
		<NoFeedBack />
	) : (
		<div>
			<StatisticLine text='good' value={good} />
			<StatisticLine text='neutral' value={neutral} />
			<StatisticLine text='bad' value={bad} />
			<StatisticLine text='all' value={all} />
			<StatisticLine text='average' value={average} />
			<StatisticLine text='positive' value={positive} />
		</div>
	);
};

// The main App component
function App(props) {
	//Hooks to manage states
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	// A function that update the goodCount state
	const goodCount = () => {
		setGood(good + 1);
	};

	//Function to update neutralCount state
	const neutralCount = () => {
		setNeutral(neutral + 1);
	};

	//Function to update badCount state
	const badCount = () => {
		setBad(bad + 1);
	};

	//Calculate the total of  all the counts
	const all = good + neutral + bad;

	/*The function below accepts a, b and d, change the sign of b 
	and return an average using d a the devisor. The function 
	basically returns the impact of each variable */
	const calcAverage = (a, b, d) => {
		let c = -b;

		let average = (Number(a) + Number(c)) / d;
		return average;
	};

	/*The function below calculate the percentage of responds that 
	is positive which is good responds by total times 100*/
	const calcPositive = (a, b) => {
		let positive = (parseFloat(a) / parseFloat(b)) * 100;
		return positive;
	};

	/* we calculate the average by invoking the calAverage function */
	const average = calcAverage(good, bad, all);

	/*we calculate the positive percentage by invoking calcPositive function*/
	const positivePercentage = `${calcPositive(good, all)}%`;

	return (
		<div>
			<Title text={'Give Feedback'} />
			<Button onClick={goodCount} text='good' />
			<Button onClick={neutralCount} text='neutral' />
			<Button onClick={badCount} text='bad' />
			<Title text='Statistics' />

			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				all={all}
				average={average}
				positive={positivePercentage}
			/>
		</div>
	);
}

export default App;
