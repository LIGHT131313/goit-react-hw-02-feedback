import styled from 'styled-components';

export const Text = styled.p`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(1)};
  }
`;
