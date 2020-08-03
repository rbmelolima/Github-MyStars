import React, { useContext } from 'react';
import { Container } from './style.js';
import Card from '../Card';
import { StarredRepos } from '../../context/StarredRepos';

export default function ListCards(): JSX.Element {
  const context = useContext(StarredRepos);
  const { stars } = context;  

  return (
    <Container>
      {
        stars !== undefined && stars.map(star => {
          return (
            <Card key={ star.id } details={ star } />
          );
        })
      }
    </Container>
  );
}