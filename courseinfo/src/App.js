// Header component helps to display the title of the app
const Header = ({ course }) => {
	return (
		<div>
			<h1>{course}</h1>
		</div>
	);
};

/*The Part component is a child component, which dynamically 
display the course information and the number of exercises each 
course has */
const Part = ({ part, exercise }) => {
	return (
		<div>
			<p>
				{part} {exercise}
			</p>
		</div>
	);
};

/* The Content component is a parent component that maps through the 
course array and dynamically display information and exercise using 
the Part component as the child*/
const Content = ({ parts }) => {
	return (
		<div>
			{parts.map((part) => (
				<Part part={part.name} exercise={part.exercises} />
			))}
		</div>
	);
};

/* The Total component is a dynamic data display components that 
computes the total of all the exercises by calling a function on 
each forEach loop */
const Total = ({ parts }) => {
	let totalExercise = 0;
	parts.forEach((part) => (totalExercise += part.exercises));
	return (
		<div>
			<p>Number of exercises is {totalExercise}</p>
		</div>
	);
};

/*The App component contains the data and return the composition
of the whole application */
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
