import { useParams, Link } from "react-router-dom"

export default function ProductDetails(){

    const {productId} = useParams();

    return(
       <> <p>Product Details Page - {productId}</p>
        <p><Link to='..' 
        relative="path" >Back To Products</Link></p></>
    )

}