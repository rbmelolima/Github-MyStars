import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  height: 100px;
  padding: 8px 16px;
  background: #FFFFFF;
  border-radius: 4px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;  
  border: 2px solid #FFFFFF;
  transition: 0.4s ease-in-out all;

  &:hover{
    border: 2px solid rgb(143, 121, 253);
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-right: 16px;    
  } 

  .img {
    display: flex;
    align-items: center;
  }

  .content  p {   
    width: 100%;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;     
  }

  h3{
    font-weight: bold;
    font-size: 18px;
    line-height: 19px;
    margin-bottom: 4px;
  }
`;


export const Footer = styled.footer`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 20px;
  font-size: 10px;
  color: #A0A0A0;
  margin-top: 8px;

  .info {
    display: flex;
    align-items: center;        
  }

  p{
    font-size: 12px;
    margin-left: 4px;
  }
`;