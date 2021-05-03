import React from 'react';

import { ArrivalDiv, ThrashIcon, Container } from './styles';

interface Pregnancy {
  data: {
    id: string;
    sheep: number;
    pregnancyDay: string;
    arrivalDay: string;
  },
  pressFunction: () => void;
}

const ArrivalCard: React.FC<Pregnancy> = ({ data, pressFunction }) => {
  return (
    <ArrivalDiv >
      <ThrashIcon onClick={pressFunction}>
        <p>X</p>
      </ThrashIcon>

      <Container>
        <div>
          <h3>Número da ovelha</h3>
          <p>{data.sheep}</p>
        </div>

        <div>
          <h3>Data do acasalamento</h3>
          <p>{data.pregnancyDay}</p>
        </div>

        <div>
          <h3>Data da chegada</h3>
          <p>{data.arrivalDay}</p>
        </div>
      </Container>
    </ArrivalDiv>
  )
}

export default ArrivalCard;