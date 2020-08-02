import React from 'react';
import { Container } from './style.js';
import { MdSearch } from 'react-icons/md';

export default function Search(): JSX.Element {
  return (
    <Container>
      <h2>Veja todos os seus repositórios favoritos.</h2>

      <form className="searchInput">
        <input placeholder="Digite seu usuário do github" />

        <button type="submit">
          <MdSearch size={ 24 } color="fff"/>
        </button>
      </form>
    </Container>
  );
}