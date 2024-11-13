import { useNavigate } from "react-router-dom"

export default function HomePage(){

    const navigate = useNavigate();

    function navigateHandler(){

        navigate('/products');

    }

    return (
        <> 
            <p>Home Page</p>
            <button onClick={navigateHandler}>Go to Products</button>
        </>
    )

}