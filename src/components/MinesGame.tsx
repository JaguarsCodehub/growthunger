import { useState } from 'react';

interface Tile {
  type: 'diamond' | 'bomb';
  revealed: boolean;
}

const MinesGame: React.FC = () => {
  const [grid, setGrid] = useState<Tile[]>([]);
  const [bet, setBet] = useState<number>(0);
  const [message, setMessage] = useState<string>('');
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const initializeGrid = (): void => {
    const newGrid: Tile[] = Array(9)
      .fill(null)
      .map(() => ({
        type: 'diamond',
        revealed: false,
      }));

    const bombIndices: number[] = [];
    while (bombIndices.length < 1) {
      const randomIndex = Math.floor(Math.random() * 9);
      if (!bombIndices.includes(randomIndex)) {
        bombIndices.push(randomIndex);
        newGrid[randomIndex] = { type: 'bomb', revealed: false };
      }
    }

    setGrid(newGrid);
    setMessage('');
    setGameOver(false);
    setScore(0);
  };

  const handleClick = (index: number): void => {
    if (grid[index].revealed || gameOver) return;

    const newGrid = [...grid];
    newGrid[index].revealed = true;

    if (newGrid[index].type === 'bomb') {
      setMessage('Game Over! You hit a bomb.');
      setGameOver(true);
      grid.forEach((tile, i) => {
        if (tile.type === 'bomb') {
          newGrid[i].revealed = true;
        }
      });
    } else {
      const newScore = score + bet;
      setScore(newScore);
      setMessage(`You found a diamond! Current winnings: ₹${newScore}`);
    }

    setGrid(newGrid);
  };

  const handleBetChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setBet(Number(e.target.value));
  };

  return (
    <div className='bg-gray-900 mx-16 text-white'>
      <div className='mb-6 text-center'>
        <label className='mb-2 block text-base font-semibold'>
          Set Your Bet: ₹{bet}
        </label>
        <input
          type='range'
          min='0'
          max='100000'
          step='1000'
          value={bet}
          onChange={handleBetChange}
          className='w-full accent-green-500'
        />
        <div className='text-base'>Current Winnings: ₹{score}</div>
        <button
          onClick={initializeGrid}
          className='mt-4 rounded-lg bg-green-500 px-6 py-2 text-lg font-semibold hover:bg-green-600'
        >
          Start Game
        </button>
      </div>

      <div className='grid grid-cols-3 gap-x-1 gap-2'>
        {grid.map((tile, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`flex h-20 w-20 items-center justify-center rounded-lg ${
              tile.revealed
                ? tile.type === 'bomb'
                  ? 'bg-black text-white'
                  : 'bg-green-300 text-black'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            {tile.revealed ? (
              tile.type === 'bomb' ? (
                <img src='/images/bomb.png' alt='bomb' className='w-12 h-12' />
              ) : (
                <img
                  src='/images/diamond-1.png'
                  alt='diamond'
                  className='w-12 h-12'
                />
              )
            ) : (
              ''
            )}
          </button>
        ))}
      </div>

      {message && (
        <div className='mt-6 rounded-lg bg-gray-800 p-2 text-center'>
          {message}
        </div>
      )}
    </div>
  );
};

export default MinesGame;
