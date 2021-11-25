import { Wrapper } from "./CharacterCard.styles";

// Components
import Card from "../Card";

// Routing
import { Link } from "react-router-dom";

type Props = {
  imageUrl: string;
  name: string;
  id: Number;
};

const CharacterCard = ({ imageUrl, name, id }: Props) => {
  return (
    <Wrapper>
      <Link to={`/${id}`}>
        <Card imageUrl={imageUrl} />

        <h3>{name.toUpperCase()}</h3>
      </Link>
    </Wrapper>
  );
};
export default CharacterCard;
