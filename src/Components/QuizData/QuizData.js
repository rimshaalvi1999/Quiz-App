// const quizData=[
// {
//   questionText:'What is your name?',
//   answerOptions:[
//     {answerText:"ayesha", iscorrect:false},
//     {answerText:"fatima", iscorrect:false},
//     {answerText:"rimsha", iscorrect:true},
//     {answerText:"abeera", iscorrect:false},
//   ]
// },
// {
//   questionText:'What is your age?',
//   answerOptions:[
//     {answerText:21, iscorrect:false},
//     {answerText:22, iscorrect:false},
//     {answerText:23, iscorrect:true},
//     {answerText:24, iscorrect:false},
//   ]
// },
// ]
// export default quizData;

import React from 'react'
const shuffleArray=(array)=>[...array].sort(()=>Math.random()-0.5)
  const fetchData=async()=>{
    let response=await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple');
   
    console.log(response);
    let {results}=await response.json();
    console.log(results);

    const quiz=results.map((ques)=>{
      return {
        question:ques.question,
        answer:ques.correct_answer,
        option:shuffleArray(ques.incorrect_answers.concat(ques.correct_answer))
      }
    })
    console.log(quiz);
    return quiz;
  }
export default fetchData;