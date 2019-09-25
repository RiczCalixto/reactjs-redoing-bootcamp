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
    const { newRepo, loading, repositories } = this.state;
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
