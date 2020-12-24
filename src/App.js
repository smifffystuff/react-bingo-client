import {useEffect, useState} from 'react'
import './App.css';
import CardGrid from './components/CardGrid';

import {gerenateCards} from './utils/cardGenerator'

function App() {
  const [cards, setCards] = useState([]);
  const [called, setCalled] = useState([]);
  const [remainingNumbers, setRemainingNumbers] = useState([])
  

  useEffect(() => {
    console.clear();
    const playersCards = gerenateCards();
    console.log(playersCards);
    setCards(playersCards)
    for (let i = 1; i <= 90; i++) {
      setRemainingNumbers(p => [...p, i]);
    }
  }, [])

  useEffect(() => {
    const getNumber = () => {
      if (remainingNumbers.length > 0) {
        const numberIndex = Math.floor(Math.random() * remainingNumbers.length)
        const numberCalled = remainingNumbers[numberIndex];
        console.log(`Calling number: ${numberCalled}`);
        setRemainingNumbers(p => p.filter(r => r !== numberCalled));
        setCalled(c => [...c, numberCalled])
      } else {
        console.log('No More numbers');
      }
    }

    const callerInterval = setInterval(() => {
      getNumber();
    }, 2000);

    return () => clearInterval(callerInterval)
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <h1>SMIFFFY'S BINGO!!</h1>
      {cards.length > 0 && <CardGrid cards={cards} called={called}/>}
    </div>
  );
}

export default App;
