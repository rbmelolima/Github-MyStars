import React from 'react';
import { Container, Footer } from './style.js';
//import { modelStarred } from '../../models/starred.js';
import { MdVisibility, MdStar } from 'react-icons/md';

/* export default function Card(props: modelStarred): JSX.Element {
  return (
    <a href={ props.html_url } title={ props.full_name }>
      <Container>
        <div className="img">
          <img src={ props.owner.avatar_url } alt={ props.owner.login } title={ props.owner.login } />
        </div>

        <div className="content">
          <h3>{ props.name }</h3>
          <p> { props.description } </p>

          <div className="status">
            <div className="info">
              <MdStar />
              {
                props.stargazers_count
              }
            </div>

            <div className="info">
              <MdWatch />
              {
                props.watchers_count
              }
            </div>
          </div>
        </div>
      </Container>
    </a>
  );
} */

export default function Card(): JSX.Element {
  return (
    <a href="https://github.com/axios/axios" title="axios">
      <Container>
        <div className="img">
          <img src="https://avatars1.githubusercontent.com/u/32372333?v=4" alt="axios" title="axios" />
        </div>

        <div className="content">
          <h3>axios</h3>
          <p> Promise based HTTP client for the browser and node.js </p>

          <Footer>
            <div className="info">
              <MdStar />
              <p>75696</p>
            </div>

            <div className="info">
              <MdVisibility />
              <p>75696</p>
            </div>
          </Footer>

        </div>
      </Container>
    </a>
  );
}