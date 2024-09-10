import React from 'react'
import './styles.css';

interface Props{
    title: string;

}

export const Botao = ({title}: Props) => {
  return (
    <button className="default" type='button'>{title}</button>
  )
}
