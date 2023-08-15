import React, {useState, useEffect} from 'react'
import Die from './Die'
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';


const TenziesMain = () => {
    const generateNewdie = () => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    
      const allDiceValue = () => {
        const newArr = [];
        for (let i = 0; i < 8; i++) {
          newArr.push(generateNewdie());
        }
        return newArr;
      };
    
      const rollDice = () => {
        if (tenzies) {
          setDice(allDiceValue);
        } else {
          setDice((oldDice) =>
            oldDice.map((die) => (die.isHeld ? die : generateNewdie()))
          );
        }
      };
    
      const toggleHoldDie = (id) => {
        setDice((oldDice) =>
          oldDice.map((die) =>
            die.id === id
              ? {
                  ...die,
                  isHeld: !die.isHeld,
                }
              : die
          )
        );
      };
    
      const [dice, setDice] = useState(allDiceValue());
      const [tenzies, setTenzies] = useState(false);
    
      useEffect(() => {
        setTenzies(dice.every((dice) => dice.isHeld));
      }, [dice]);

  return (
    <main className='bg-slate-600 flex justify-center items-center'>
        {tenzies && <Confetti />}
        <div className='bg-slate-300 px-32 pt-16 pb-32 m-4 flex flex-col justify-center items-center'>
            <div className='bg-slate-300 text-center mb-8'>
                <h1 className='text-black'>Tenzies</h1>
                <p className='text-black text-sm'>
                    Roll until all dice are the same. Click each die to freeze it at its
                    current value between rolls.
                </p>
            </div>

            <div className='flex flex-wrap gap-3'>
            {dice.map(die => (
                <div key={die.id} className='w-1/5 shadow-md shadow-slate-800 rounded-md'>
                <Die value={die.value} isHeld={die.isHeld} toggleHoldDie={() => toggleHoldDie(die.id)} />
                </div>
            ) )}
            </div>

            <button className='bg-green-600 text-slate-900 mt-4 rounded-md p-2' onClick={rollDice}>{tenzies ? "New Game" : "Roll Dice"}</button>
        </div>
    </main>
  )
}

export default TenziesMain