import React from 'react'
import CellContainer from './styled/CellContainer';

const Cell = ({number, called}) => {
  return (
    <CellContainer style={{'backgroundColor': called.includes(number) ? 'grey' : ''}}>
      <div>{number}</div>
    </CellContainer>
  )
}

export default Cell
