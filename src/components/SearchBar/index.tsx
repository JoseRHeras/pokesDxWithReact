import React, { useEffect, useRef, useState } from "react";

// Styles
import { Content, Wrapper } from "./SearchBar.styles";

type Prop = {
  handleSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ handleSearchTerm }: Prop) => {
  const [term, setTerm] = useState<string>("");

  const isComponentBeingMount = useRef<Boolean>(true);

  useEffect(() => {
    if (isComponentBeingMount.current) {
      isComponentBeingMount.current = false;
      return;
    }

    const search_delay_timer = setTimeout(() => {
      handleSearchTerm(term);
    }, 700);

    return () => clearTimeout(search_delay_timer);
  }, [term, handleSearchTerm]);

  return (
    <Wrapper>
      <Content>
        <input
          placeholder="Search Pokemon"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
