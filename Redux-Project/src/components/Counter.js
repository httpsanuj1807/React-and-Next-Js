import classes from './Counter.module.css';
import { counterActions } from '../store/counterSlice.js';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const {counter, showCounter} = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {

    dispatch(counterActions.TOGGLE_COUNTER());

  };

  const incrementHanlder = () => {

    dispatch(counterActions.INCREMENT());

  }

  const incrementHanlderFive = () => {

    dispatch(counterActions.INCREMENTBY5(5)); // only access with payload

  }

  const decrementHanlder = () => {

    dispatch(counterActions.DECREMENT());

  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <><div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHanlder}>Increment</button>
        <button onClick={incrementHanlderFive}>Increment by 5</button>
        <button onClick={decrementHanlder}>Decrement</button>
      </div></>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
