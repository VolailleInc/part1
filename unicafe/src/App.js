import { useState } from 'react';

const Title = (props) => {
  return (
    <div>
      <h2>{props.text}</h2>
    </div>
  );
};

const Button = ({ onClick, text }) => {
  return (
    <div class='btnCompo'>
      <button class='btn' onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

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

const NoFeedBack = () => {
  return (
    <div>
      <p>No feedback given</p>
    </div>
  );
};

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

function App(props) {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  //const [average, setAverage] = useState(0);

  const goodCount = () => {
    setGood(good + 1);
  };
  const neutralCount = () => {
    setNeutral(neutral + 1);
  };
  const badCount = () => {
    setBad(bad + 1);
  };

  const all = good + neutral + bad;

  const calcAverage = (a, b, d) => {
    let c = -b;
    let ans = (Number(a) + Number(c)) / d;
    return ans;
  };
  const calcPositive = (a, b) => {
    let pos = (parseFloat(a) / parseFloat(b)) * 100;
    return pos;
  };

  const average = doAverage(good, bad, all);

  const positive = `${doPositive(good, all)}%`;

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
        positive={positive}
      />
    </div>
  );
}

export default App;
