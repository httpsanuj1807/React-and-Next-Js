import { useContext } from "react"
import Modal from "./UI/Modal"
import CartContext from "../store/CartContext"
import { currencyFormatter } from "../utils/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/userProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {

    method : 'POST',
    headers : {
        'Content-Type' : 'application/json'
    },
}

export default function Checkout(){

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);


    const {data, isLoading, error, sendRequest, clearData} = useHttp('http://localhost:3000/orders', requestConfig);

    const cartTotal = cartCtx.items.reduce((total, item) => {

        return total + (item.quantity * item.price);

    }, 0);

    function handleClose(){

        userProgressCtx.hideCheckout();

    }

    function handleFinish(){

        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
        

    }

    async function handleSubmit(event){

        event.preventDefault();

        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());

        sendRequest(JSON.stringify({
            order: {
                items : cartCtx.items,
                customer : customerData
            }
        }))

    }

    let actions = <><Button onClick={handleClose} type="button" textOnly> Close </Button>
                    <Button> Submit </Button></>

    if(isLoading){

        actions = <span>Sending order request...</span>

    }

    if(data && !error){


        return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
            <h2>Success</h2>
            <p>Your order is placed. We will get back to you soon via e-mail.</p>
            <p className="modal-actions">
                <Button onClick={handleFinish}>Okay</Button>
            </p>
        </Modal>

    }

    


    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                 <h2>Checkout </h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
                <Input label="Full Name" type="text" id="name" />
                <Input label="E-mail Address" type="email" id="email" />
                <Input label="Street" type="text" id="street" />
                <div>
                    <Input label="Postal Code" type="text" id="postal-code" />
                    <Input label="City" type="text" id="city" />
                </div>

                {error && <Error title="Error processing order" message={error} />}

                <p className="modal-action">
                    {actions}
                </p>
            </form>
        </Modal>
    )


}