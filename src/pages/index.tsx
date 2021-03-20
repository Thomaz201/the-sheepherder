import React, { useEffect, useState } from 'react';

import { addDays, format } from 'date-fns';
import { v4 } from 'uuid';
import Cookies from 'js-cookie';

import Input from '../components/Input';
import DatePickerInput from '../components/DatePickerInput';
import ArrivalCard from '../components/ArrivalCard';

import { Form } from '@unform/web';

import { 
  Container, 
  Title, 
  FormDiv, 
  InputsDiv, 
  FormButtom, 
  NextArrivalContainer 
} from '../styles/home';
import { GetServerSideProps } from 'next';

interface FormDTO {
  sheep: string;
  date: string;
}

interface Pregnancy {
  id: string;
  sheep: string;
  pregnancyDay: string;
  arrivalDay: string;
}

interface HomeProps {
  pageProps?: Pregnancy[];
}

export default function Home({ pageProps }: HomeProps) {
  const [pregnancies, setPregnancies] = useState<Pregnancy[]>(() => {
    if (pageProps) {
      return pageProps
    }

    return []
  });

  useEffect(() => {
    Cookies.set('pageData', JSON.stringify(pregnancies));

  }, [pregnancies]);
  
  function handleAddPregnancy(data: FormDTO) {
    const pregnancyDay = new Date(data.date);

    const arrivalDay = addDays(pregnancyDay, 152);

    const pregnancy = {
      id: v4(),
      sheep: data.sheep,
      pregnancyDay: format(pregnancyDay, 'dd/MM/yyyy'),
      arrivalDay: format(arrivalDay, 'dd/MM/yyyy'),
    }

    setPregnancies([...pregnancies, pregnancy]);

    Cookies.set('pageData', pregnancies);
  }

  return (
    <Container>
      <Title>
        <img src="/icons/logo.svg" alt="Sheep Logo" />
        <h1>The Sheepherder</h1>
      </Title>

      <span>Calcule a chegada do próximo integrante da família</span>

      <FormDiv>
        <Form onSubmit={handleAddPregnancy}>
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
          { pregnancies && pregnancies.map((pregnancy) => (
            <ArrivalCard key={pregnancy.id} data={pregnancy} />
          )) }
          
        </div>
      </NextArrivalContainer>

    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { pageData } = ctx.req.cookies;

  if (pageData) {

    const pageProps = JSON.parse(pageData)

    return {
      props: {
        pageProps
      }
    }
  }

  return {
    props: {}
  }
}