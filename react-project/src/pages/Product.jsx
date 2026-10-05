// import React from 'react'

// export const Product = () => {
//   return (
//     <div>
//         <h1>Product Page</h1>
//     </div>
//   )
// }


const Product = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: ₹{props.price}</p>
    </div>
  );
};

export default Product;

