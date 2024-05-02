import React from 'react';
import styled from 'styled-components';

const SwitchContainer = styled.label`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 34px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${Slider} {
    background-color: #2196F3;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196F3;
  }

  &:checked + ${Slider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const Switch = ({ checked, handleChange, ...rest }: {
  checked: boolean,
  handleChange: React.ChangeEventHandler<HTMLInputElement>
}&any) => {
  return (
    <SwitchContainer {...rest}>
      <Input type="checkbox" checked={checked} onChange={handleChange} />
      <Slider />
    </SwitchContainer>
  );
};

export default Switch;
