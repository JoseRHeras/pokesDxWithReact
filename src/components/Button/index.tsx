// Styles
import { Wrapper } from "./Button.styles";

// Props
type Props = {
  text: string;
  handleClick: () => void;
};

const Button = ({ text, handleClick }: Props) => (
  <Wrapper onClick={handleClick}>{text}</Wrapper>
);

export default Button;
