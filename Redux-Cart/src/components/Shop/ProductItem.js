import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cartSlice';
import { DUMMY_PRODUCTS } from './Products';

const ProductItem = (props) => {
  const {id, title, price, description } = props;
  const dispatch = useDispatch();

  function addToCartHandler(id){

    const product = DUMMY_PRODUCTS.find((product) => product.id === id);
    const newItem = {
      id :  product.id,
      title : product.title,
      price :  product.price,
    }
    dispatch(cartActions.addToCart(newItem));

  } 

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => addToCartHandler(id)}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
