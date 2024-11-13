import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import { useContext } from 'react';
import UserProgressContext from '../store/userProgressContext';

export default function Header(){

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartCount = cartCtx.items.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    function handleShowCart(){
        userProgressCtx.showCart();
    }

    return(

        <header id="main-header">
            <div id="title">
                <img src={logoImg} />
                <h1>Swiggy</h1>
            </div>
            <nav>
                <Button onClick={handleShowCart} textOnly>Cart ({cartCount})</Button>
            </nav>
        </header>


    );

}