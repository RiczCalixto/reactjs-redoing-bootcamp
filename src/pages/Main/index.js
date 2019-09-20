import React, { Component } from 'react';
import { Container, Form, SubmitButton } from './styles';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { newRepo, repositories } = this.state;
    this.setState({ loading: true });
    const response = await api.get(`${newRepo}`);
    const data = {
      name: response.data.full_name,
      description: response.data.description,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, loading } = this.state;
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

          <SubmitButton loading={loading}>
            {loading ? <FaSpinner color="#FFF" /> : <FaPlus color="#FFF" />}
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

export default Main;
