import React from 'react';
import styled from 'styled-components';
import { Label } from '../Footer/styles';

const SwitchContainer = styled.label`
  display: inline-block;
  position: relative;
  width:fit-content;
  height: 34px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 400px){
    display: none;
  }
  user-select: none;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    width: 100px;
    height: 50px;
    background-color: #e2e2e2;
    opacity: 0.3;
    backdrop-filter: blur(59%);
    top: -15px;
    left:-43px;
    overflow: hidden;
    border-radius: 16px;
  }
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
    height: 13px;
    width: 13px;
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
      <Label style={{
        fontSize:12,
        margin:0,
        position:"absolute",
        left: -33
      }}>
        auto
      </Label>
      <Input type="checkbox" checked={checked} onChange={handleChange} />
      <Slider />
    </SwitchContainer>
  );
};

export default Switch;
