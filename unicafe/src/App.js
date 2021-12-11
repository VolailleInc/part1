import { useState } from 'react';

//Component for displaying title
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
		<div className='btnCompo'>
			<button className='btn' onClick={onClick}>
				{text}
			</button>
		</div>
	);
};

//A table component that displays the value of each statistic
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

//A conditionally render a no feedback component
const NoFeedBack = () => {
	return (
		<div>
			<p>No feedback given!</p>
		</div>
	);
};

//Component to render each statistic
const Statistics = (props) => {
	const good = props.good;
	const neutral = props.neutral;
	const bad = props.bad;
	const totalOfAll = props.totalOfAll;
	const average = props.average;
	const positive = props.positive;

	return totalOfAll === 0 ? (
		<NoFeedBack />
	) : (
		<div>
			<StatisticLine text='good' value={good} />
			<StatisticLine text='neutral' value={neutral} />
			<StatisticLine text='bad' value={bad} />
			<StatisticLine text='all' value={totalOfAll} />
			<StatisticLine text='average' value={average} />
			<StatisticLine text='positive' value={positive} />
		</div>
	);
};

// The main App component
function App() {
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

	//Calculate the total of all the counts
	const all = good + neutral + bad;
	// const totalOfAll = function (a, b, c) {
	// 	let allVotes = a + b + c;
	// 	return allVotes;
	// };

	/*The function below accepts a, b and d, change the sign of b 
	and return an average using d a the devisor. The function 
	basically returns the impact of each variable */
	const calcAverage = (a, b, d) => {
		let c = -b;

		return (Number(a) + Number(c)) / d;
	};

	/*The function below calculate the percentage of responds that 
	is positive which is good responds by total times 100*/
	const calcPositive = (a, b) => {
		return (parseFloat(a) / parseFloat(b)) * 100;
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
				totalOfAll={all}
				average={average}
				positive={positivePercentage}
			/>
		</div>
	);
}

export default App;
