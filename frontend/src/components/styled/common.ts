import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  padding: 2% 4%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  display: block;
  border: 1px solid #e4e7e7;
  height: 45px;
  border-radius: 4px;
  margin-bottom: 16px;
  width: 100%;
  font-family: 'Inter';
  padding: 0 12px;
  box-sizing: border-box;
`;

export const HR = styled.hr`
  background: #e4e7e7;
  width: 100%;
  height: 2px;
  border: 0;
  margin: 0;
`;

export const Radio = styled.input`
  width: 18px;
  cursor: pointer;
`;

export const Button = styled.button`
  height: 40px;
  width: 80px;
  min-width: 10%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
