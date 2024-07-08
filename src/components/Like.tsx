import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) {
    return <AiFillHeart color="red" size={20} onClick={toggle}></AiFillHeart>;
  } else {
    return <AiOutlineHeart size={20} onClick={toggle}></AiOutlineHeart>;
  }
};

export default Like;
