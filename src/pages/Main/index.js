import React, { Component } from 'react';
import { Form, SubmitButton, IconPlus, List } from './styles';
import { Container, IconSpinner } from '../Commons/styles';
import { FaGithubAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';

class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');
    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.repositories !== this.state.repositories) {
      localStorage.setItem(
        'repositories',
        JSON.stringify(this.state.repositories)
      );
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value, error: null });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: false });
    try {
      const { newRepo, repositories } = this.state;
      if (newRepo === '')
        throw console.log('Você precisa indicar um repositório');
      const hasRepo = repositories.find(repo => repo.name === newRepo);
      if (hasRepo) throw console.log('Repositório dpuplicado');
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
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { newRepo, loading, repositories, error } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder="Adicionar repositório! Ex: facebook/react"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading}>
            {loading ? <IconSpinner /> : <IconPlus />}
          </SubmitButton>
        </Form>
        <List>
          {repositories.map(data => (
            <div key={data.name}>
              <li>
                <span>{data.name}</span>
                <Link to={`/repository/${encodeURIComponent(data.name)}`}>
                  Detalhes
                </Link>
              </li>
              <li>{data.description}</li>
            </div>
          ))}
        </List>
      </Container>
    );
  }
}

export default Main;
