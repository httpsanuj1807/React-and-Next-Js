import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';

const CartItem = (props) => {
  const {id, title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  function handleItemDecrease(id){
    dispatch(cartActions.removeFromCart(id));
  }
 
  function handleItemIncrease(id){
    dispatch(cartActions.addToCart({id}));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleItemDecrease(id)}>-</button>
          <button onClick={() => handleItemIncrease(id)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
