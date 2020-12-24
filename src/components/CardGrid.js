import React from 'react'
import Card from './Card';
import GridContainer from './styled/GridContainer';

const CardGrid = ({cards, called}) => {
  return (
    <GridContainer>
      {
        cards.map((card, index) => <Card key={card.id} card={card} index={index} called={called}/>)
      }
    </GridContainer>
  )
}

export default CardGrid
