import React from 'react';
import { Container, Footer } from './style.js';
import { modelStarred } from '../../models/starred.js';
import { MdVisibility, MdStar } from 'react-icons/md';

interface IStarredProps {
  details: modelStarred;
}

export default function Card(props: IStarredProps): JSX.Element {
  const { html_url, full_name, name, description, watchers_count, stargazers_count } = props.details;

  function renderAvatar(): JSX.Element {
    if(props.details.owner !== null) {
      const { avatar_url, login } = props.details.owner;

      return (
        <div className="img">
          <img src={ avatar_url } alt={ login } title={ login } />
        </div>
      );
    }

    else {
      return <></>;
    }
  }

  return (
    <a href={ html_url } title={ full_name }>
      <Container>
        {
          renderAvatar()
        }

        <div className="content">
          <h3>{ name }</h3>
          <p> { description } </p>

          <Footer>
            <div className="info">
              <MdStar />
              <p>{ stargazers_count }</p>
            </div>

            <div className="info">
              <MdVisibility />
              <p>{ watchers_count }</p>
            </div>
          </Footer>
        </div>
      </Container>
    </a>
  );
} 
