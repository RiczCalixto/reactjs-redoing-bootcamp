import React, { Component } from 'react';
import { Container, Form, SubmitButton } from './styles';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import api from '../../services/api';

class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
  };

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { newRepo, repositories } = this.state;
    const response = await api.get(`${newRepo}`);
    const data = {
      name: response.data.full_name,
      description: response.data.description,
    };

    this.setState({ repositories: [...repositories, data], newRepo: '' });
  };

  render() {
    const { newRepo } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório!"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton>
            <FaPlus color="#FFF" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

export default Main;
