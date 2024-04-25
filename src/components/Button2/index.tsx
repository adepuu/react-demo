import { useNavigate } from "react-router-dom";
import "./style.css";

interface ButtonProps {
  type: "red" | "blue";
  text?: string;
}

const Button2: React.FC<ButtonProps> = ({ type, text }) => {
  const navigate = useNavigate();

  return (
    <button
    // Push state X to /profile page
      onClick={() => {
        navigate("profile", {
          state: {
            x: 1
          }
        });
      }}
      style={{
        color: "black",
        backgroundColor: "red",
      }}
      className={`button-2-${type}`}
    >
      {text}
    </button>
  );
};

export default Button2;
