import { Link } from "react-router-dom"

const ProductsArr = [
    {id:'p1', title:"Product One"},
    {id:'p2', title:"Product Two"},
    {id:'p3', title:"Product Three"},
]


export default function Products(){
    return (
        <>
            <p>Products Page</p>
            <ul>
                {ProductsArr.map((prod) => <li><Link to={`${prod.id}`}>{prod.title}</Link></li>)}
            </ul>
        </>
        
    )
}