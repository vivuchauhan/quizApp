import React from 'react'
import { Link } from "react-router-dom";
import './QuizResult.css';


function QuizResult(props) {
  return (
    <div className='scoreCard'>
      <h2 className='scoreCardHeading'>Your result</h2>
      <div className='show-score'>
          <button className='scoreBtn1'><span style={{color:"#00cc00"}}>Correct: </span>{props.score}</button><br/>
          <button className='scoreBtn2'> <span style={{color:"#FF3B3F"}}>Incorrect: </span>{props.totalScore-props.score}</button>
      </div>
      <Link to='/'> <button id="nextButton" onClick={props.tryAgain}>Try Again</button></Link>
    </div>
  )
}

export default QuizResult