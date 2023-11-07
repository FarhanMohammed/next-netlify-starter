import React, { useState, useEffect, useCallback } from 'react';

const Snake = () => {
  const [snake, setSnake] = useState([{ x: 0, y: 0 }]);
  const [food, setFood] = useState({ x: 10, y: 10 });
  const [direction, setDirection] = useState('RIGHT');

  const updateDirection = useCallback((e) => {
    // Handle arrow key input to change the direction
    if (e.key === 'ArrowUp' && direction !== 'DOWN') setDirection('UP');
    else if (e.key === 'ArrowDown' && direction !== 'UP') setDirection('DOWN');
    else if (e.key === 'ArrowLeft' && direction !== 'RIGHT') setDirection('LEFT');
    else if (e.key === 'ArrowRight' && direction !== 'LEFT') setDirection('RIGHT');
  }, [direction]);

  useEffect(() => {
    // Add event listener for arrow key input
    window.addEventListener('keydown', updateDirection);

    // Game logic
    const gameInterval = setInterval(() => {
      // Move the snake based on the current direction
      // Implement collision detection and update snake and food accordingly
      // Check if the snake eats the food and update the score
    }, 200); // Set the interval based on your preference (e.g., 200ms)

    // Clean up event listener and interval on component unmount
    return () => {
      window.removeEventListener('keydown', updateDirection);
      clearInterval(gameInterval);
    };
  }, [updateDirection]); // Add dependencies as needed

  return (
    <div>
      {/* Render snake and food here */}
      {/* You can use CSS to style the game elements */}
    </div>
  );
};

export default Snake;
