const Header = ({ course }) => {
	return (
		<div>
			<h1>{course}</h1>
		</div>
	);
};

const Part = ({ part, exercise }) => {
	return (
		<div>
			<p>
				{part} {exercise}
			</p>
		</div>
	);
};

const Content = ({ parts }) => {
	return (
		<div>
			{parts.map((part) => (
				<Part part={part.name} exercise={part.exercises} />
			))}
		</div>
	);
};

const Total = ({ parts }) => {
	let totalExercise = 0;
	parts.forEach((part) => (totalExercise += part.exercises));
	return (
		<div>
			<p>Number of exercises is {totalExercise}</p>
		</div>
	);
};

function App() {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
			},
			{
				name: 'State of a component',
				exercises: 14,
			},
		],
	};

	return (
		<div className='App'>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
}

export default App;
