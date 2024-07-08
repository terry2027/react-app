import { useState } from "react";
//import Alert from "./components/Alert";
//import Button from "./components/Button";
import Like from "./components/Like";
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

  const onClick = () => {
    console.log("Clicked!!!");
  };

  return (
    <div>
      <Like onClick={onClick}></Like>
    </div>
  );
}

export default App;
