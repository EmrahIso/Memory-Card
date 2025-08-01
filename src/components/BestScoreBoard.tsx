type BestScoreBoardProps = {
  bestScore: number;
};

const BestScoreBoard = ({ bestScore }: BestScoreBoardProps) => {
  return (
    <aside className=' bg-white dark:bg-silver inline-block py-3 px-6 rounded-sm shadow-sm dark:shadow-md '>
      <p className='text-md text-gray-600 dark:text-gray-300 font-regular flex gap-2'>
        <span>Best Score:</span>
        <output>{bestScore}</output>
      </p>
    </aside>
  );
};

export default BestScoreBoard;
