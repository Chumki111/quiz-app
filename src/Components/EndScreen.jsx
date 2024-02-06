import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { Questions } from "../Helpers/QuestionBank";


const EndScreen = () => {
    const { score,setScore ,setGameState} = useContext(QuizContext);
    const reStartQuiz = () =>{
  setScore(0)
  setGameState('menu')
    }
    return (
        <div className="w-[500px] h-[500px] rounded-md bg-teal-700/70 flex  flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold text-white mb-4">Quiz Finished</h1>
            <h3 className="text-3xl font-semibold text-white mb-4">{score} / {Questions.length}</h3>
            <button className="w-[300px] h-[50px] bg-white rounded-md border-none cursor-pointer text-lg font-semibold transition-all duration-300 hover:scale-105" onClick={reStartQuiz}>Restart Quiz</button>
        </div>
    );
};

export default EndScreen;