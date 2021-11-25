// Styling
import { Image } from "./Card.styles";

type Props = {
  imageUrl: string;
};

const Card = ({ imageUrl }: Props) => <Image src={imageUrl}></Image>;

export default Card;
