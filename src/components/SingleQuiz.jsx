import React from 'react'
import { nanoid } from 'nanoid';
import { decode } from 'html-entities';
import tick from "../images/tick.svg"
import cross from "../images/cross.svg"

const SingleQuiz = ({id, question, correctAnswer, selectedAnswer, incorrectAnswers, showAnswer, handleSelectAnswer}) => {
    const incorrectAnswersElements = incorrectAnswers.map(answer => {
		const incorrectAnswerClassName = `
			${selectedAnswer === answer ? "min-w-16 h-8 px-4 border rounded cursor-pointer font-inter font-medium text-indigo-700 mr-3 mb-3 bg-indigo-200" : "min-w-16 px-4 h-8 border border-blue-500 rounded cursor-pointer font-inter font-medium bg-gray-100 text-indigo-700 mr-3 mb-3"}
			${(showAnswer && selectedAnswer === answer) && "bg-red-300 opacity-50 border-none"}
		`;

		return <button
			key={nanoid()}
			className={incorrectAnswerClassName}
			onClick={() => handleSelectAnswer(id, answer)}
		>
			{ decode(answer) }
		</button>
	});

	const correctAnswerClassName = `
		${selectedAnswer === correctAnswer ? "min-w-16 px-4 h-8 border rounded cursor-pointer font-inter font-medium text-indigo-700 mr-3 mb-3 bg-indigo-200" : "min-w-16 px-4 h-8 border border-blue-500 rounded cursor-pointer font-inter font-medium bg-gray-100 text-indigo-700 mr-3 mb-3"}
		${showAnswer && "bg-green-400 border-none"}
	`;

	const correctAnswerElement =
		<button
			key={nanoid()}
			className={correctAnswerClassName}
			onClick={() => handleSelectAnswer(id, correctAnswer)}
		>
			{ decode(correctAnswer) }
		</button>
	
	incorrectAnswersElements.push(correctAnswerElement);

  return (
    <article className="pb-10 mb-4 border-b border-gray-300 flex justify-between items-center">
			<div>
				<h3 className="mb-4">{decode(question)}</h3>
				{ incorrectAnswersElements }
                
			</div>
			
			{
				showAnswer &&
					(selectedAnswer === correctAnswer
						? <img src={tick} width={35} alt="Tick, correct answer" />
						: <img src={cross} width={30} alt="Cross, wrong answer" />)
			}
		</article>
  )
}

export default SingleQuiz