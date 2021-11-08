import styled from 'styled-components';
import { darken } from 'polished'

export const Container = styled.div`

`;

export const TransationTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red'
}

const colors = {
  red: '#E52E4D',
  green: '#33cc95'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${(props) => props.isActive ? colors[props.activeColor] : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;
  &:hover{
    border-color: ${darken(0.1, '#d7d7d7')};
  }
  svg{
    color: var(--white)
  }
  span{
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--white)
  }
`
