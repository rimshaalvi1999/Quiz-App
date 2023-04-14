import React from 'react'
import './Result.css';
export default function Result(props) {
  return (
    <div className='resultcard'>
      <div><h3>Congratulations your test is completed!!!!</h3></div>
      <div> <h4>Total score is: {props.score}</h4></div>
      <div><h4>Total correct questions are: {props.corectquetions} out of {props.questionslength}</h4></div>
    </div>
  )
}
