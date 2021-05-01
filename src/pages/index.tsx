import React, { useCallback, useEffect, useRef, useState } from 'react';

import { addDays, format } from 'date-fns';
import { v4 } from 'uuid';
import Cookies from 'js-cookie';

import Input from '../components/Input';
import DatePickerInput from '../components/DatePickerInput';
import ArrivalCard from '../components/ArrivalCard';
import { FormHandles } from '@unform/core';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import {
  Container,
  Title,
  FormDiv,
  InputsDiv,
  FormButtom,
  NextArrivalContainer
} from '../styles/home';
import { GetServerSideProps } from 'next';
import getValidationErrors from '../utils/getValidationErrors';

interface FormDTO {
  sheep: number;
  date: string;
}

interface Pregnancy {
  id: string;
  sheep: number;
  pregnancyDay: string;
  arrivalDay: string;
}

interface HomeProps {
  pageProps?: Pregnancy[];
}

export default function Home({ pageProps }: HomeProps) {
  const formRef = useRef<FormHandles>(null);
  const [pregnancies, setPregnancies] = useState<Pregnancy[]>(() => {
    if (pageProps) {
      return pageProps
    }

    return []
  });

  useEffect(() => {
    Cookies.set('pageData', JSON.stringify(pregnancies));

  }, [pregnancies]);

  const handleAddPregnancy = useCallback(async (data: FormDTO) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        sheep: Yup.number().required('Apenas números são permitidos').max(999, 'No máximo 3 dígitos').min(1, 'Número mínimo 1'),
        date: Yup.date().required('É necessário informar a data')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const pregnancyDay = new Date(data.date);

      const arrivalDay = addDays(pregnancyDay, 152);

      const pregnancy = {
        id: v4(),
        sheep: data.sheep,
        pregnancyDay: format(pregnancyDay, 'dd/MM/yyyy'),
        arrivalDay: format(arrivalDay, 'dd/MM/yyyy'),
      }

      const duplicate = pregnancies.find(card => card.sheep === pregnancy.sheep);

      if (duplicate) {
        throw new Error('Essa ovelha já está grávida');
      }

      setPregnancies([...pregnancies, pregnancy]);

      Cookies.set('pageData', JSON.stringify(pregnancies));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);

        console.log(errors);

        return;
      }

      console.log('error', error);
    }
  }, [pregnancies, setPregnancies]);

  return (
    <Container>
      <Title>
        <img src="/icons/logo.svg" alt="Sheep Logo" />
        <h1>The Sheepherder</h1>
      </Title>

      <span>Calcule a chegada do próximo integrante da família</span>

      <FormDiv>
        <Form ref={formRef} onSubmit={handleAddPregnancy}>
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
          {pregnancies && pregnancies.map((pregnancy) => (
            <ArrivalCard key={pregnancy.id} data={pregnancy} />
          ))}

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
