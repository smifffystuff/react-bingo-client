import React from 'react'
import CardContainer from './styled/CardContainer';
import CardRow from './CardRow'

const Card = ({card, index, called}) => {
  return (
    <CardContainer style={{flex: 5-index}}>
      {card.rows.map(row => <CardRow key={row.id} row={row} called={called}/>)}
    </CardContainer>
  )
}


export default Card
