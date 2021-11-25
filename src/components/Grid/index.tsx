import { Wrapper, Content } from "./Grid.styles";

type Props = {
  title: string;
  children: JSX.Element[];
};

const Grid = ({ title, children }: Props) => (
  <Wrapper>
    <h2>{title}</h2>
    <Content>{children}</Content>
  </Wrapper>
);

export default Grid;
