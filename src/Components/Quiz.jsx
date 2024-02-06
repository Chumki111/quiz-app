import { useContext, useState } from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Context";


const Quiz = () => {
    const { score, setScore ,setGameState} = useContext(QuizContext)
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChose, setOptionChose] = useState('');
    const nextQuestion = () => {
        if (Questions[currQuestion].answer === optionChose) {
            setScore(score + 1)
        }
        setCurrQuestion(currQuestion + 1)
    }
    const finishQuiz = () => {
        if (Questions[currQuestion].answer === optionChose) {
            setScore(score + 1)
        }
        setGameState('endScreen')
    }
    return (
        <div className="w-[500px] h-[500px] rounded-md bg-teal-700/70 flex flex-col justify-center items-center">
            <h1 className="text-2xl text-center md:text-3xl font-semibold text-white my-7">{Questions[currQuestion].prompt}</h1>
            <div className="flex flex-col justify-center items-center">
                <button className="w-[300px] h-[50px] my-2 bg-white rounded-md border-none cursor-pointer text-lg font-semibold focus:text-orange-500 focus:outline" onClick={() => setOptionChose('A')}>{Questions[currQuestion].optionA}</button>
                <button className="w-[300px] h-[50px] bg-white rounded-md border-none cursor-pointer text-lg font-semibold focus:text-orange-500 focus:outline" onClick={() => setOptionChose('B')}>{Questions[currQuestion].optionB}</button>
                <button className="w-[300px] h-[50px] my-2 bg-white rounded-md border-none cursor-pointer text-lg font-semibold focus:text-orange-500 focus:outline" onClick={() => setOptionChose('C')}>{Questions[currQuestion].optionC}</button>
                <button className="w-[300px] h-[50px] bg-white rounded-md border-none cursor-pointer text-lg font-semibold focus:text-orange-500 focus:outline" onClick={() => setOptionChose('D')}>{Questions[currQuestion].optionD}</button>
            </div>
            {currQuestion == Questions.length - 1 ? (
                <button className="w-[300px] h-[50px] bg-white rounded-md border-none cursor-pointer text-lg font-semibold transition-all duration-300 hover:scale-105 mt-5" onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                <button className="w-[300px] h-[50px] bg-white rounded-md border-none cursor-pointer text-lg font-semibold transition-all duration-300 hover:scale-105 mt-5" onClick={nextQuestion}>Next Question</button>
            )}

        </div>
    );
};

export default Quiz;