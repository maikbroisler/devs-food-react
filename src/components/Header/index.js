import React, { useState } from 'react';
import { Container, Logo, SearchInput } from './styled';

export default ({ search, onSearch }) => {
  const [inputActive, setInputActive] = useState(search ?? true );

  const handleInputFocus = () => {
    setInputActive(true);
  }

  const handleInputBlur = () => {
    if(search === '') {
      setInputActive(false);
    }
  }

  const handleChange = (e) => {
    onSearch(e.target.value);
  }

  const handleInputMouseEnter = () => {
    //setInputActive(true)
  }

  const handleInputMouseLeave = () => {
    if(search === '') {
      setInputActive(false);
    }
  }

  return (
    <Container>
      <Logo src="/assets/logo.png" />
      <SearchInput 
        type="text" 
        placeholder="Digite um produto..."
        value={search}
        onChange={handleChange}
        active={inputActive}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onMouseEnter={handleInputMouseEnter}
        onMouseLeave={handleInputMouseLeave}
      />
    </Container>
  );
}