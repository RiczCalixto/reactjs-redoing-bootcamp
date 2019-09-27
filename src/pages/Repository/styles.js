import styled, { css } from 'styled-components';
import { rotate } from '../Commons/styles';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 1s linear infinite;
      }
    `}
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #3e3e3e;
    text-align: center;
    max-width: 400px;
  }

  a {
    color: #3e3e3e;
    font-size: 16px;
    text-decoration: none;
  }
`;

export const IssuesList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #333e;
  list-style: none;

  li {
    display: flex;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 15px 10px;

    & + li {
      margin-top: 20px;
    }

    img {
      border-radius: 50%;
      max-width: 50px;
      max-height: 50px;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;
      strong {
        font-size: 16px;
        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #8799;
          }
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
