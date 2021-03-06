import styled from 'styled-components';

const Body = styled.div`
 height: 100%;
 width: 100%;
 max-width: 600px;
 margin: auto;
 padding-top: 50px;
`;

const BodyDetail = styled(Body)` 
padding-top: 5px;
text-align: center;
`


const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #B0BEC5;
  text-align: center;
  padding-top: 15px;
  color: #FFFFFF;
`;




export { Body, Footer, BodyDetail };