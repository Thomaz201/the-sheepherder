import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;

  span {
    color: #8C8B87;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
  }
`;

export const Title = styled.div`
  color: #1C0D00;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 36px;

  h1 {
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    margin-left: 12px;
  }
`;

export const FormDiv = styled.div`
  margin-top: 36px;
  max-width: 400px;
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 45px;
`;

export const FormButtom = styled.button`
  height: 68px;
  width: 400px;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  color: #fff;
  background: #679436;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 6px rgba(0,0,0, 0.5);

  font-size: 24px;
  font-weight: bold;

  transition: background-color 0.4s, transform 0.1s;

  &:hover {
    background: ${shade(0.2, '#679436')}
  }
  
  &:active {
    transform: translate(2px, 2px);
  }
`;