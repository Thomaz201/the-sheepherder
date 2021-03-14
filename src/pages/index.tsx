import React from 'react';

import Input from '../components/Input';
import { Form } from '@unform/web';

import { Container, Title, FormDiv, InputsDiv } from '../styles/home';

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

            <Input name="date" placeholder="Data do acasalamento" />
          </InputsDiv>

          <button type="submit">Click</button>

        </Form>
      </FormDiv>
    </Container>
  )
}

export default Home;
