import React from 'react';
import { Wrapper } from './style';
import Header from '../../components/Header';
import Search from '../../components/Search';
import ListCards from '../../components/ListCards';

export default function Home(): JSX.Element {
  return (
    <main>
      <Wrapper>
        <Header />
        <Search />
        <ListCards />
      </Wrapper>
    </main>
  );
}