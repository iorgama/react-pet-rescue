import React, {FC, InputHTMLAttributes, useState} from 'react'
import { InputForm, LabelForm, Wrapper} from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string,
  label ?: string,
  type?: string,
  value: string,
  name?: string,
  showMargin?: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export const Input: FC<InputProps> = ({ id, type="text", value, name = id, label, setValue,showMargin,  ...props }) => {

  return (
    <>
    <Wrapper showMarginForLabel={showMargin}>
      {label && <LabelForm htmlFor={id}>{label}</LabelForm>}
      <InputForm
        id={id}
        type={type}
        name={name }
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </Wrapper>
    </>
  );
};
