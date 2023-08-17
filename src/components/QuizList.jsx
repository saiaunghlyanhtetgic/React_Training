import React, {useState, useEffect} from 'react'
import getRandomQuestions from "../helpers/getRandomQuestions" 
import { nanoid } from 'nanoid';
import SingleQuiz from './SingleQuiz';

const QuizList = ({handleGameStart}) => {
    const [questionsArray, setQuestionsArray] = useState([]);
	const [checkAnswerBtn, setCheckAnswerBtn] = useState(false);
	const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
	const [isGameOver, setIsGameOver] = useState(false);

	const allQuestionsAnswered = questionsArray.every(question => question.selectedAnswer !== "");

	
    
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const questions = await getRandomQuestions();

        const updatedQuestionsArray = questions.map((question) => ({
          ...question,
          id: nanoid(),
          selectedAnswer: "",
          showAnswer: false,
        }));

        setQuestionsArray(updatedQuestionsArray);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    }

    fetchQuestions();
  }, []);
    
    

	useEffect(() => {
        if (questionsArray.length !== 0 && allQuestionsAnswered) {
            let correctAnswers = 0;
            
            questionsArray.forEach(question => {
                if (question.correct_answer === question.selectedAnswer)
                    correctAnswers++;
            });
    
            setCorrectAnswersCount(correctAnswers);
            setCheckAnswerBtn(true);
        }
    }, [questionsArray, allQuestionsAnswered]);
    


	const handleSelectAnswer = (questionId, answer) => {
		if (!isGameOver) {
			setQuestionsArray(prevQuestionsArray => (
				prevQuestionsArray.map(question => (
					question.id === questionId
						? {...question, selectedAnswer: answer }
						: question
				))
			));
		}
	}

	const checkAnswers = () => {
		if (allQuestionsAnswered) {
			setIsGameOver(true);

			setQuestionsArray(prevQuestionsArray => (
				prevQuestionsArray.map(question => ({...question, showAnswer: true }))
			));
		}
	}

	const resetGame = () => {
		setCheckAnswerBtn(false);
		setIsGameOver(false);
		handleGameStart();
	}

	const questionElements = questionsArray.map(question => (
		<SingleQuiz
			key={question.id}
			id={question.id}
			question={question.question}
			correctAnswer={question.correct_answer}
			incorrectAnswers={question.incorrect_answers}
			selectedAnswer={question.selectedAnswer}
			showAnswer={question.showAnswer}
			handleSelectAnswer={handleSelectAnswer}
		/>
	));
  return (
    <div>
        <section className="w-700 flex flex-col p-4 mt-4">
            
			{questionElements}

			<div className="mt-4 flex justify-around items-center">
				{isGameOver &&
					<h3 className="font-inter font-semibold text-center">
						You scored {correctAnswersCount}/5 correct answers
					</h3>
				}

				<button
					className={`bg-blue-400 p-2 rounded-md ${checkAnswerBtn
												? "self-center"
												: "self-center opacity-50 cursor-not-allowed"}`}
					onClick={isGameOver ? resetGame : checkAnswers}
				>
					{isGameOver ? "Play again" : "Check answers"}
				</button>
			</div>
		</section>
    </div>
  )
}

export default QuizList