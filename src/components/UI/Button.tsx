import React from 'react'
import styled from 'styled-components';

type ButtonStyles = {
  backgroundColor: string;
  selected: boolean;
  selectedLineColor: string;
}

type ButtonProps = ButtonStyles & {
  content: string;
  btnClick: () => void;
}


const StyledBtn = (props: ButtonStyles) => styled.div`
  background-color: ${props.backgroundColor};
  border-radius: 20px;
  padding: 10px 20px;
  box-sizing: content-box;
  cursor: pointer;
  border: 2px solid ${props.selected ? props.selectedLineColor : 'transparent'};
  `;


function Button(props: ButtonProps) {
  const { content, btnClick,  ...styles} = props;
  // btnClick (onClick)
  return (
    <div>
      <div onClick={btnClick}>{content}</div>
    </div>
  )
}

export default Button