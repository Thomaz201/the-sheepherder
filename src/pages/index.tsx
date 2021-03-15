import React from 'react';

import Input from '../components/Input';
import DatePickerInput from '../components/DatePickerInput';

import { Form } from '@unform/web';

import { 
  Container, 
  Title, 
  FormDiv, 
  InputsDiv, 
  FormButtom, 
  NextArrivalContainer, 
  ArrivalDiv 
} from '../styles/home';

interface FormDTO {
  sheep: string;
  date: string;
}

const Home: React.FC = () => {
  function handleSubmit(data: FormDTO) {
    console.log(data)
  }

  return (
    <Container>
      <Title>
        <img src="/icons/logo.svg" alt="Sheep Logo" />
        <h1>The Sheepherder</h1>
      </Title>

      <span>Calcule a chegada do próximo integrante da família</span>

      <FormDiv>
        <Form onSubmit={handleSubmit}>
          <InputsDiv>
            <Input name="sheep" placeholder="Número da ovelha" />

            <DatePickerInput name="date" />
          </InputsDiv>

          <FormButtom type="submit">Fazer o cálculo</FormButtom>

        </Form>
      </FormDiv>

      <NextArrivalContainer>
        <span>Próximas chegadas</span>

        <div>
          <ArrivalDiv>
            <div>
              <h3>Número da ovelha</h3>
              <p>13</p>
            </div>

            <div>
              <h3>Data do acasalamento</h3>
              <p>13/12/2021</p>
            </div>

            <div>
              <h3>Data da chegada</h3>
              <p>13/05/2022</p>
            </div>
          </ArrivalDiv>

          <ArrivalDiv>
            <div>
              <h3>Número da ovelha</h3>
              <p>13</p>
            </div>

            <div>
              <h3>Data do acasalamento</h3>
              <p>13/12/2021</p>
            </div>

            <div>
              <h3>Data da chegada</h3>
              <p>13/05/2022</p>
            </div>
          </ArrivalDiv>

          <ArrivalDiv>
            <div>
              <h3>Número da ovelha</h3>
              <p>13</p>
            </div>

            <div>
              <h3>Data do acasalamento</h3>
              <p>13/12/2021</p>
            </div>

            <div>
              <h3>Data da chegada</h3>
              <p>13/05/2022</p>
            </div>
          </ArrivalDiv>
        </div>
      </NextArrivalContainer>

    </Container>
  )
}

export default Home;
