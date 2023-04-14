import React, { useState } from 'react'
import fetchData from '../QuizData/QuizData';
import { useEffect } from 'react';
import Result from '../Result/Result'
import './QuizApp.css';
export default function QuizApp() {


  let [currentquestion, setCurrentquestion] = useState(0);
  let [score, setScore] = useState(0);
  let [showresult, setShowresult] = useState(false);
  let [corectquetions, setCorrectquestions] = useState(0);
  let [quiz, setQuiz] = useState([]);
  let [useranswer,setUseranswer]=useState();
  let response;
  const getData = async () => {
    response = await fetchData();
    console.log(response);
    setQuiz(response);
  }

  useEffect(() => {
    getData();
  }, [])


  console.log(quiz);


  function handlenext() {
    console.log(quiz[currentquestion].answer);
    if (useranswer==quiz[currentquestion].answer) {
      score = score + 5;
      corectquetions=corectquetions+1;
      setScore(score)
      setCorrectquestions(corectquetions);
    }
    let nextquestion = currentquestion + 1;
    if (nextquestion < quiz.length) {
      setCurrentquestion(nextquestion);
    }
    else {
      setShowresult(true);
    }
  }

  function handlescore(element) {
    console.log(element);
    setUseranswer(element);
    
  }

  if (quiz.length) {
    return (
      <div className='quizcard'>
        <h1> <b> QUIZ APP</b></h1>
        {
          showresult ? (<Result score={score} corectquetions={corectquetions} questionslength={quiz.length} />) : (
            <>
              <div className='score'>
                <span>

                  <h1> Question {currentquestion + 1} of {quiz.length}</h1>
                  {/* <h1>Score={score}</h1> */}
                </span>
              </div>
              <div className='outer'>
                <span className='questionpart'>
                  {quiz[currentquestion].question}
                </span>
                <span className='optionspart'>
                  {quiz[currentquestion].option.map((qs, i) => {
                    return <div className='btnclass' key={i} ><button value={qs} className='optbtn' onClick={(e) => {
                      handlescore(qs)
                    }}>{qs}</button></div>
                  })}
                </span>
              </div>
              <button className='nextbtn' onClick={handlenext}>Next</button>
            </>
          )
        }

      </div>


    )
  }
}
