import React, { useEffect, useState } from 'react'
function Cart() {
    const [products,setProducts]=useState([])
    const [product,setProduct]=useState({
        
       
    })
    const[show,setShow]=useState(false)
console.log(products);
    useEffect(()=>{
        getProducts();
        
        },[])

        const getProducts=async()=>{
await fetch("https://dummyjson.com/products").then((response)=>response.json()).then((data)=>{
  //console.log(data.products);
  setProducts(data.products)
}).catch((err)=>console.log(err))
        }
    
const display=(i)=>{
console.log("button clicked",i);
setProduct((prev)=>({...prev,i}));
console.log('product',product);

//setShow(true)
}

  return (
    <>
    <h1>Products</h1>
     <div style={{margin:"5px",display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",gap:"20px"}}>
     {products.map((i)=>(
    <div key={i.id}  style={{ borderRadius:"5px",
    boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    border:"none",width:"300px",height:"400px"}}>
<img src={i.images[0]} alt="product" srcset=""  style={{width:"150px",height:"150px",padding:"6px"}}/>

 <h2>{i.title}</h2>
 <p>{
 i.description.split("").slice(0,45).join("")}...</p>
<h3>Price:{i.price}</h3>
 <button style={{backgroundColor:"aqua",border:"none",padding:"5px",margin:"1px"}} 
 onClick={(e)=>display(i)}>Buy Now</button>
    </div>
   

    ))}




     </div>
     
  
    </>
  
  
  )
}

export default Cart