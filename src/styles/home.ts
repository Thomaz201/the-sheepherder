import styled from 'styled-components';

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
  max-width: 450px;
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;