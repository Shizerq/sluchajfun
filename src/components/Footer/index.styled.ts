import styled from "styled-components";

export const Text = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.background100};
  margin-top: 50px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.background100};
`;
