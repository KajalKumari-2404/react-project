// function Student(props) {
//     return (
//         <div>
//             <h1>Name: {props.name}</h1>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// }

// export default Student;

// function Product(props) {
//     return (
//         <div>
//             <h1>Product: {props.name}</h1>
//             <p>Price: ₹{props.price}</p>
//         </div>
//     );
// }

// export default Product;

// Yahan hum Child naam ka functional component bana rahe hain.
// { sendData } kya hai?
// Ye prop hai jo Parent component se Child ko mila hai.
function Child({ sendData }) {
  const handleClick = () => {
    sendData("Hello Parent!");
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Send Data</button>
    </div>
  );
}

export default Child;