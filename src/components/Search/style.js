import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 32px;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    color: #000000;
    margin-bottom: 24px;
  }

  input {
    width: 90%;    
    height: 48px;
    border: 0;
    outline: none;
    padding: 8px 16px;
    border-radius: 4px 0px 0px 4px;
    transition: 0.4s ease-in-out all;
    border: 2px solid transparent;   
  }

  input:focus,
  input:hover {
    border: 2px solid #0077B6;    
  }

  button {
    margin: 0;
    width: 10%;
    min-width: 64px;
    height: 48px;
    background: #0077B6;
    border-radius: 0px 4px 4px 0px;
    font-size: 0;
    line-height: 0;
  }  

  form {
    display: flex;
  }
`; 