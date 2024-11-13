import { createBrowserRouter, RouterProvider } from "react-router-dom"

import HomePage from "./Pages/Home"
import Products from "./Pages/Products"
import Layout from "./Pages/RootLayout"
import Error from "./Pages/Error"
import ProductDetails from "./Pages/ProductsDetails"

const router = createBrowserRouter([
  { path:'/', 
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index : true, element: <HomePage /> },   
      { path:'products', element: <Products /> },   
      { path:'products/:productId', element: <ProductDetails /> }   
    ]
  }
])


export default function App(){

  return <RouterProvider router={router} />  
  
}




// import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"

// import HomePage from "./Pages/Home"
// import Products from "./Pages/Products"


// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>} />
//     <Route path="/products" element={<Products/>} />
//   </Route>
// )

// const router = createBrowserRouter(routeDefinition)


// export default function App(){

//   return <RouterProvider router={router} />  
  
// }
