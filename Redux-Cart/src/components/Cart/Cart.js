import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {

  const { items } = useSelector(state => state.cart);

  return (
    <Card className={classes.cart}>
      <h2 style={{textAlign : 'center'}}>Your Shopping Cart</h2>
      {items && items.length === 0 && <h2 style={{textAlign : 'center'}}>Cart empty.</h2>}
      <ul>
        {items.map((item) => {

          return <CartItem key={item.itemId} item={{ title: item.title, quantity: item.quantity, total: item.totalPrice, price: item.price , id: item.itemId}} />

        })}
      </ul>
    </Card>
  );
};

export default Cart;
