//import { ReactNode } from "react";
import styles from "./Button.module.css";

// interface Props {
//   children: string;
//   color?: "primary" | "secondary" | "success";
//   onClick: () => void;
// }

// const Button = ({ children, onClick, color = "primary" }: Props) => {
//   return (
//     <button type="button" className={"btn btn-" + color} onClick={onClick}>
//       {children}
//     </button>
//   );
// };

const Button = () => {
  return (
    <button className={[styles.button, styles.buttonPrimary].join(" ")}>
      Try Me
    </button>
  );
};

export default Button;
