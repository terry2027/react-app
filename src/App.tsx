import { useState } from "react";
//import Alert from "./components/Alert";
//import Button from "./components/Button";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";
//import ListGroup from "./components/ListGroup";

// function App() {
//   const [alertVisible, setAlertVisiblity] = useState(false);

//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisiblity(false)}>My Alert</Alert>
//       )}
//       <Button color="primary" onClick={() => setAlertVisiblity(true)}>
//         Click Me!!!
//       </Button>
//     </div>
//   );
// }

function App() {
  // let items = ["Singapore", "Melbourne", "Sydney"];
  // const heading = "Cities";

  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John",
  //   },
  // });

  //const [pizza, setPizza] = useState({
  //   name: "Spicy Peperroni",
  //   toppings: ["Mushroom"],
  // });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    //setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    //console.log(pizza);
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
    console.log(cart);
  };

  // return (
  //   <div>
  //     <Like onClick={onClick}></Like>
  //   </div>
  // );
  //   return (
  //     <div>
  //       <button onClick={handleClick}>
  //         Click Me {cart.items[0].quantity}!!!
  //       </button>
  //     </div>
  //   );
  return (
    <div>
      <ExpandableText>Hello Word</ExpandableText>
    </div>
  );
}

export default App;
