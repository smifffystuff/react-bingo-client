import React from 'react'
import Cell from './Cell';
import RowContainer from './styled/RowContainer';

const CardRow = ({row, called}) => {
  return (
    <RowContainer>
      <Cell number={row.numbers.find(n => n < 10)} called={called}/>
      <Cell number={row.numbers.find(n => n > 9 && n < 20)} called={called}/>
      <Cell number={row.numbers.find(n => n > 19 && n < 30)} called={called}/>
      <Cell number={row.numbers.find(n => n > 29 && n < 40)} called={called}/>
      <Cell number={row.numbers.find(n => n > 39 && n < 50)} called={called}/>
      <Cell number={row.numbers.find(n => n > 49 && n < 60)} called={called}/>
      <Cell number={row.numbers.find(n => n > 59 && n < 70)} called={called}/>
      <Cell number={row.numbers.find(n => n > 69 && n < 80)} called={called}/>
      <Cell number={row.numbers.find(n => n > 79)} called={called}/>
    </RowContainer>
  )
}

export default CardRow
