import React, {useState} from 'react'
import QuizList from './components/QuizList';

const Quiz = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const handleGameStart = () => setGameStarted(prevState => !prevState);
  return (
    <div className="flex flex-col justify-center items-center mx-auto bg-slate-200 w-full">
        
        
        {gameStarted ? (
            <QuizList handleGameStart={handleGameStart}/>
        ) : (
          <div className="h-screen flex flex-col justify-center items-center">
          <div className="p-2 mb-10 text-slate-900 text-2xl ">
            It's quiz time!
          </div>
<button className="p-2 bg-blue-950 text-slate-100 text-xl rounded-md" onClick={handleGameStart}>Start Quiz</button>
          </div>
        )}
    </div>
  )
}

export default Quiz