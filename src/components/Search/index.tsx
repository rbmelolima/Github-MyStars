import React, { useContext, FormEvent, useState, ChangeEvent } from 'react';
import { Container } from './style.js';
import { MdSearch } from 'react-icons/md';
import { StarredRepos } from '../../context/StarredRepos';
import { modelStarred } from '../../models/starred.js';

export default function Search(): JSX.Element {
  const [ user, setUser ] = useState<string>('');

  const context = useContext(StarredRepos);
  const { setStars } = context;

  async function handleSubmit(event: FormEvent): Promise<void> {
    event.preventDefault();

    if(user === '' || user === null) {
      return;
    }

    const response = await fetch(`https://api.github.com/users/${ user }/starred?per_page=100`);
    console.log("Response", response)

    if(response.ok && setStars !== undefined) {
      const data: Array<modelStarred> = await response.json();
      console.log("Response.data", data);
      setStars(data);
    }
  }

  function handleUser(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setUser(value);
  }

  return (
    <Container>
      <h2>Veja todos os seus repositórios favoritos.</h2>

      <form className="searchInput" onSubmit={ handleSubmit }>
        <input placeholder="Digite seu usuário do github" onChange={ handleUser } />

        <button type="submit">
          <MdSearch size={ 24 } color="fff" />
        </button>
      </form>
    </Container>
  );
}