import React from 'react';
import { MdStars } from 'react-icons/md';
import { Container } from './style.js';

export default function Header(): JSX.Element {
  return (
    <Container>
      <MdStars size={ 32 } />
      <h1>github_stars</h1>
    </Container>
  );
}