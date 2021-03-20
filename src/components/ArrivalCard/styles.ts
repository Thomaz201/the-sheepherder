import styled from 'styled-components';

export const ArrivalDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 520px;

  margin-top: 50px;
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  padding-right: 8px;
  padding-left: 8px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    margin: 0 auto;

    h3 {
      font-size: 16px;
      color: #1C0D00;
    }
    
    p {
      margin-top: 16px;
      font-size: 16px;
      color: #8C8B87;
    }
  }

  div:not(:last-child) {
    margin-right: 25px;
  }
`;