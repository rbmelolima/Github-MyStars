import React, { useState } from 'react';
import { Wrapper } from './style';
import Header from '../../components/Header';
import Search from '../../components/Search';
import ListCards from '../../components/ListCards';

import { StarredRepos } from '../../context/StarredRepos';
import { modelStarred } from '../../models/starred';

export default function Home(): JSX.Element {
  const [ starsRepos, setStars ] = useState<Array<modelStarred>>([]);

  return (    
    <StarredRepos.Provider value={ {
      stars: starsRepos,
      setStars: (data: Array<modelStarred>) => setStars(data)
    } }>

      <Wrapper>
        <Header />
        <Search />
        <ListCards />
      </Wrapper>
    </StarredRepos.Provider>
  );
}