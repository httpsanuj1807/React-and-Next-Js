import classes from './CartButton.module.css';
import { uiActions } from '../../store/uiSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const { totalQuantity } = useSelector(state => state.cart)

  function cartToogleHandler(){

    dispatch(uiActions.toggle());

  }

  return (
    <button onClick={cartToogleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
