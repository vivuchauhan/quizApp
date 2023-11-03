import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData'
import QuizResult from './QuizResult';
import logoImg from '../Group.png';
import { Link } from "react-router-dom";

import './Quiz.css';


function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    
    const changeQuestion = ()=>{
        console.log("current question", currentQuestion,QuizData.length);
        updateScore();
        if(currentQuestion< QuizData.length-1){
            if(clickedOption ? setCurrentQuestion(currentQuestion+1):currentQuestion);
            setClickedOption(0);
        }else{
            if(clickedOption ? setShowResult(true) : null);
        }
    }
    const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }

    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <div className='QCard'>
        
        <div className="Qheader">
            <img src={logoImg} alt="QLogo" className="logo" />
            <p className="Qbranding-text">upraised</p>
            <div id="question-number">
                <div id="question-number-inner">
                    <span id='question-number-text1'>
                        {currentQuestion+1}
                    </span>
                    <span id='question-number-text2'>
                        /{QuizData.length}
                    </span>
                </div>
            </div>
        </div>
        
        <div className="container">
            {showResult ? (
                <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
            ):(
            <>
            {/* <div id="question-number">
                <div id="question-number-inner">
                    <span id='question-number-text1'>
                        {currentQuestion+1}
                    </span>
                    <span id='question-number-text2'>
                        /{QuizData.length}
                    </span>
                </div>
            </div> */}
            <div className="question">
                <span id="question-txt">{QuizData[currentQuestion]?.question}</span>
            </div>
            <div className="option-container">
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        // className="option-btn"
                        className={`option-btn ${
                            clickedOption == i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
            </>)}
        </div>
    </div>
  )
}

export default Quiz