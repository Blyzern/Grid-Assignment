import styled from 'styled-components';

export const CustomButton = styled.button`
  width: fit-content;
  height: 3rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    background-color: lightgray;
  }
`;

export const CustoToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  background: #fafafa;
  border: 1px solid #ccc;
`;
