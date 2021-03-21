import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Container } from './styles';

interface DatePickerProps extends Omit<ReactDatePickerProps, 'onChange'> {
  name: string;
}

const DatePickerInput: React.FC<DatePickerProps> = ({ name, ...rest }) => {
  const datePickerRef = useRef(null);
  
  const { fieldName, defaultValue, registerField, error } = useField(name);
  
  const [date, setDate] = useState(defaultValue || null);
  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datePickerRef.current,
      path: 'props.selected'
    })
  }, [fieldName, registerField]);

  return (
    <Container>
      <ReactDatePicker 
        ref={datePickerRef} 
        selected={date} 
        onChange={setDate} 
        dateFormat="dd/MM/yyyy"
        placeholderText="Data do acasalamento"
        {...rest} 
      />
    </Container>
  )
}

export default DatePickerInput;