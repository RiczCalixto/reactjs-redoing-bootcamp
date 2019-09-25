import styled, { keyframes, css } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const IconSpinner = styled(FaSpinner)`
  color: #fff;
  ${props =>
    props.repository &&
    css`
      color: #3e3;
    `}
`;

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;
