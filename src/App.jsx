import { useState } from 'react'
import './App.css'
import MainMenu from './Components/MainMenu'
import Quiz from './Components/Quiz'
import EndScreen from './Components/EndScreen'
import { QuizContext } from './Helpers/Context'

function App() {

  const [gameState,setGameState] = useState('menu')
 

  return (
    <>
     <div className='flex justify-center'>
     <div className='mt-16'>
        <h1 className='text-4xl'>Quiz App</h1>
        <QuizContext.Provider value={{gameState,setGameState}}>
        {gameState === 'menu' && <MainMenu/>}
        {gameState === 'quiz' && <Quiz/>}
        {gameState === 'endScreen' && <EndScreen/>}
        </QuizContext.Provider>
      </div>
     </div>
    </>
  )
}

export default App
