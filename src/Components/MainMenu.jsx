import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";


const MainMenu = () => {
    const {gameState,setGameState} = useContext(QuizContext)
    return (
        <div className="w-[500px] h-[500px] rounded-md bg-teal-700/80 flex justify-center items-center">
            <button className="w-[300px] h-[50px] bg-white rounded-md border-none cursor-pointer text-lg font-semibold transition-all duration-300 hover:scale-105" onClick={() => setGameState('quiz')}>Start Quiz</button>
        </div>
    );
};

export default MainMenu;