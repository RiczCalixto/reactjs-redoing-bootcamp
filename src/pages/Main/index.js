import React from 'react';
import { Title, Footer } from './styles';

const Main = () => {
  return (
    <>
      <Title error={true}>Main</Title>
      <Footer>
        <span>Hey</span>, im footer.
      </Footer>
    </>
  );
};

export default Main;
