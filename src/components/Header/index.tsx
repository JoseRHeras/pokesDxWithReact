// Styles
import { Content, Wrapper, Logo} from "./Header.styles";

// Routes
import { Link } from "react-router-dom";

// Images
import Pokeball from "../../images/pokemon.png";

const Header: React.FC = (): JSX.Element => (
  <Wrapper>
    <Content>
      <Link to="/">
        <Logo src={Pokeball}/>
      </Link>
    </Content>
  </Wrapper>
);

export default Header;
