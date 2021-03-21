import React from 'react';

import { ArrivalDiv } from './styles';

interface Pregnancy {
  data: {
    id: string;
    sheep: number;
    pregnancyDay: string;
    arrivalDay: string;
  }
}

const ArrivalCard: React.FC<Pregnancy> = ({ data }) => {
  return (
    <ArrivalDiv >
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
    </ArrivalDiv>
  )
}

export default ArrivalCard;