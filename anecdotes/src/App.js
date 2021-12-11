import React, { useState } from 'react';

const Button = ({ onClick, text }) => {
	return (
		<div>
			<button onClick={onClick}>{text}</button>
		</div>
	);
};

const Anecdote = (props) => {
	const selected = props.selected;
	console.log(props);

	return (
		<div>
			<h3>{selected}</h3>
		</div>
	);
};

function App() {
	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time',
		'Any fool can write a code that a computer can understand. Good programers write code tha humans can understand.',
		'Premature optimization is the root of all evil',
		'Debugging is as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extreme heavy use of console.log is same as if a doctor who refused to use x-rays or blood test when diagnosing patients',
	];

	const [selected, setSelected] = useState(0);

	const nextAnecdote = () => {
		setSelected(Math.floor(Math.random() * 7));
	};


  
	return (
		<div>
      <Anecdote selected={anecdotes[selected]} />
      <Button onClick={} text="votes"/>
			<Button onClick={nextAnecdote} text='next anecdote' />
		</div>
	);
}

export default App;
