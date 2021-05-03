import styled from "styled-components";

export const ArrivalDiv = styled.div`
  width: 600px;

  margin-top: 50px;
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  padding-right: 8px;
  padding-left: 8px;

  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

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
      color: #1c0d00;
    }

    p {
      margin-top: 16px;
      font-size: 16px;
      color: #8c8b87;
    }
  }

  div:not(:last-child) {
    margin-right: 25px;
  }
`;

export const ThrashIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;

  width: 20px;
  height: 20px;

  text-align: center;
  border: 1px solid #8c8b87;
  border-radius: 4px;
  color: #8c8b87;

  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  transition: transform 0.1s;

  :hover {
    cursor: pointer;
  }

  :active {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    transform: translate(2px, 2px);
  }
`;
