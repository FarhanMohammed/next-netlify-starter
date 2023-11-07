import React, { useState, useEffect } from 'react';

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const MemoryGame = () => {
  const [cards, setCards] = useState([
    '🐱', '🐱', '🐶', '🐶', '🐻', '🐻', '🐵', '🐵', '🐼', '🐼',
  ]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedPairs([...matchedPairs, cards[firstIndex]]);
      }
      setTimeout(() => {
        setFlippedIndices([]);
      }, 1000);
    }
  }, [flippedIndices, cards, matchedPairs]);

  const handleCardClick = (index) => {
    if (flippedIndices.length < 2 && !flippedIndices.includes(index)) {
      setFlippedIndices([...flippedIndices, index]);
    }
  };

  const shuffledCards = shuffleArray(cards);

  return (
    <div className="memory-game">
      {shuffledCards.map((card, index) => (
        <div
          key={index}
          className={`card ${flippedIndices.includes(index) || matchedPairs.includes(card) ? 'flipped' : ''}`}
          onClick={() => handleCardClick(index)}
        >
          {flippedIndices.includes(index) || matchedPairs.includes(card) ? card : '❓'}
        </div>
      ))}
      <style jsx>{`
        .memory-game {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 10px;
          max-width: 300px;
          margin: 0 auto;
        }

        .card {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          height: 80px;
          background-color: #eee;
          cursor: pointer;
        }

        .flipped {
          background-color: #fff;
        }
      `}</style>
    </div>
  );
};

export default MemoryGame;
