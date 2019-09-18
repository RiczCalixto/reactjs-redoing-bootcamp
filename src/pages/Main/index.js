import React from 'react';
import { Container, Form, SubmitButton } from './styles';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

const Main = () => {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form>
        <input type="text" placeHolder="Adicionar repositório!" />

        <SubmitButton disabled>
          <FaPlus color="#FFF" />
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Main;
