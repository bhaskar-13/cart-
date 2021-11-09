import './App.css';
import { useState } from 'react';
import {StarRatingComponent} from "./starRating.js"
const PAGE_PRODUCTS='products';
const PAGE_CART='cart';

 function App() {
   const [cart,setCart]=useState([]); 
   const [page,setPage]=useState(PAGE_PRODUCTS);
   const [products]=useState([
   {
     name:"Appolo Sofa Set",
     cost:"$24.99",
     image:"https://www.beautifulhomes.com/content/dam/beautifulhomes/images/decor/interior-design/4-sofa-design-ideas-for-your-home-interior/TITLE_shutterstock_395445490.jpg"
   },
   {
     name:"Lady Bug",
     cost:"$56.78",
     image:"https://ii1.pepperfry.com/media/catalog/product/l/a/568x284/ladybug-3-seater-sofa-in-blue-colour-by-febonic-ladybug-3-seater-sofa-in-blue-colour-by-febonic-ifrala.jpg"
   },

   {
      name:"Liza ",
      cost:"$56.78",
      image:"https://m.media-amazon.com/images/I/51gBttfD8AL._SL1100_.jpg"
  },

  {
    name:"Furny 6 seater",
    cost:"$80.78",
    image:"https://ii1.pepperfry.com/media/catalog/product/l/a/568x284/ladybug-3-seater-sofa-in-blue-colour-by-febonic-ladybug-3-seater-sofa-in-blue-colour-by-febonic-ifrala.jpg"
},

{
  name:"Royal Oak",
  cost:"$89.78",
  image:"https://www.royaloakindia.com/uploads/ROYIND-royaloak-melborne-sofa-3s-grey-111.webp"
},

{
  name:"Designer Sofa",
  cost:"$78",
  image:"https://cdn.shopify.com/s/files/1/0096/4594/9013/products/Designer-Sofa-Set-in-Fabric-L-Shape_2.png?v=1616070420"

},

{
  name:"Goofy",
  cost:"$89",
  image:"https://i.ytimg.com/vi/8lYdFQQVKaA/maxresdefault.jpg"

},

{
  name:"Blue Light",
  cost:"$78",
  image:"http://cdn.home-designing.com/wp-content/uploads/2017/08/stylish-sofas-600x600.jpg"
},

{
  name:"Teak Wood",
  cost:"$200",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58vtX8rXkMcN4Fsg3xYiiiENkRAsZiFdAxw&usqp=CAU"
},


  ]);
  //Adding To the Cart
  const addToCart=(product)=>{
     setCart([...cart,{...product}]);
  }
   // Removing From the Cart
  const removefromcart=(productToremove)=>{
    setCart(cart.filter((product)=>product!==productToremove));
  }
  //Navigate to next Page
  const navigateTo=(nextPage)=>{
    setPage(nextPage);
  }
  // Renders All the Products
  const renderProduct=()=>(
    <>
        <h1>Products</h1>
      <div className="wrapper">
      {products.map((product,idx)=>
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h3>{product.cost}</h3>
            <img className="image" src={product.image} alt={product.name}/>
            <StarRatingComponent/>
            <button  type="button" className="btn btn-primary addtoCart" onClick={()=>addToCart(product)}>Add To Cart</button>
          </div>
            
       )}
      </div>
    </>
  );
 // Renders All the Cart
  const renderCart=()=>(
    <>
      <h1>Cart</h1>
      <div className="wrapper">
    {cart.map((product,idx)=>
        <div className="product" key={idx}>
          <h3>{product.name}</h3>
          <h3>{product.cost}</h3>
          <img className="image"  src={product.image} alt={product.name}/>
          <button type="button" className="btn btn-primary remove" onClick={()=>removefromcart(product)}>Remove</button>
        </div> 
        
     )}
    </div>
  </>
  );


  return (
    <div className="App">
      <header className="header">
        
        <button type="button" className="btn btn-primary headercolor" onClick={()=>navigateTo(PAGE_CART)}>Go to cart ({cart.length})</button>
        <button type="button" className="btn btn-primary headercolor"onClick={()=>navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>
      {page===PAGE_PRODUCTS  && renderProduct()}
      {page===PAGE_CART  && renderCart()} 
      
      
    </div> 
  );
 }

export default App;




