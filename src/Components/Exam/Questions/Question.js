import React from 'react'


export function Option(props) {
    let unique= props.question.id + '-' + props.option.index 
  return (
    <div>
        <div>
        <input type="radio" id={unique} name={props.question.id} value={props.option.isCorrect} onChange={() => props.answerHandler(props.option, props.question)}  />
        <label for={unique}>{props.option.description}</label>
        </div>
    </div>
  )
}


export default function Question(props) {
    console.log(props.index);
    const {description} = props.question;
    const options = props.options.map((option, i) => {
        return(
        <Option  option={option} question={props.question} answerHandler={props.answerHandler}/>
        )
    });
  

  return (
        <>
         <legend>{description}</legend>
       {options}
    </>
  )
}
