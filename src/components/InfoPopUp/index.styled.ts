import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.75);
`;

export const PopUp = styled.div`
  width: 90%;
  max-width: 500px;
  @media (max-width: 768px) {
    width: 80%;
  }
  padding: 20px;

  background-color: ${({ theme }) => theme.background100};

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 0;
  }
`;

export const Spacer = styled.div`
  width: 70%;
  height: 0.2px;

  margin: 20px 0;

  background-color: ${({ theme }) => theme.text};
  opacity: 0.5;
`;

export const Section = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${({ theme }) => theme.text};
  }
`;

export const Contact = styled.p`
  a {
    color: ${({ theme }) => theme.text};
  }
  margin-top: 5%;

  font-size: 0.9rem;
  font-weight: bold;
  opacity: 0.5;
`;
