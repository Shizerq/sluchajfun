import styled from "styled-components";

export const ProgressBackground = styled.div`
  position: relative;
  z-index: -1;

  width: 100%;
  height: 20px;
  background-color: ${({ theme }) => theme.gray};
  border-radius: 2px;

  margin-top: 5%;
`;

export const Progress = styled.div<{ value: number }>`
  width: ${({ value }) => value * 6.25}%;
  height: 20px;

  align-self: flex-start;

  background-color: ${({ theme }) => theme.green};

  border-radius: 2px;

  transition: width 0.5s;
`;

export const Separator = styled.div`
  position: absolute;
  top: 0;

  width: 0.8px;
  height: 100%;

  background-color: ${({ theme }) => theme.border100};
`;

export const TimeStamps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const TimeStamp = styled.p`
  color: ${({ theme }) => theme.text};
`;
