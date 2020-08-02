import React from 'react';
import { Container } from './style.js';
import Card from '../Card';

export default function ListCards(): JSX.Element {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
}