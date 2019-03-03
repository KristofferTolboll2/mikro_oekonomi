import React, { Component } from 'react'
import { timingSafeEqual } from 'crypto';
import Question from './Questions/Question';
import ExamAnswerModal from './Modal/Modal'

export default class TestExam extends Component {
    constructor(){
        super()
        const categories = [{id: 1, name: 'geography'},  {id: 2, name: 'politics'}]
        this.state={
            answers: {},
            showModal: false,
            points: 0, 
            categories,
            questions: [
                { name: 'question 1', description: 'a question', options:[
                    {description: 'some question', isCorrect: false, index: 1}, 
                    {description: 'some other questions', isCorrect: false, index:2}, 
                    {description: 'last option', isCorrect: true, index:3}], 
                    id: 1, category: categories[0]},
                { name: 'question 2', description: 'a question', options:[
                    {description: 'some question', isCorrect: false, index:4}, 
                    {description: 'some other questions', isCorrect: false, index:5}, 
                    {description: 'last option', isCorrect: true, index:6}], 
                    id: 2, category: categories[1] },
                { name: 'question 3', description: 'a question',  options:[
                    {description: 'some answer', isCorrect: false, index: 7}, 
                    {description: 'some other answer', isCorrect: false, index: 8}, 
                    {description: 'last answer', isCorrect: true, index: 9}],
                     id: 3, category: categories[1] },
                    { name: 'question 3', description: 'a question',  options:[
                        {description: 'some answer', isCorrect: false, index: 10}, 
                        {description: 'some other answer', isCorrect: false, index: 11}, 
                        {description: 'last answer', isCorrect: true, index: 12}], 
                        id: 4, category: categories[0] }
              ]
            }
    }



        addAnswerHandler = (option, question) =>{
            console.log('logged')
            this.setState(presvState =>{
                let answers = Object.assign({}, presvState.answers)
                answers[question.id] = {answer: option, question}
                console.log(answers)
                return{answers}
            })
        }
        
        showModalHandler = () =>{
            this.setState(prevstate =>(
                {showModal: !prevstate.showModal}
            ))
        }
    

  render() {
      console.log(this.state.isSubmitted)
      console.log(this.state.answers)
      const questions =this.state.questions.map((question, i) =>{
          return(
              <Question index={i+1} key={question.id} question={question} name={question.name} description={question.description} options={question.options} answerHandler={this.addAnswerHandler}/>
          )
      })

    return (
        <>
        <link rel="stylesheet" type="text/css" href={this.props.stylePath} />
       {questions}
       <button onClick={this.showModalHandler}>Submit</button>
   
        <ExamAnswerModal 
        show={this.state.showModal}
        onHide={this.showModalHandler}
        questions={this.state.questions}
        categories={this.state.categories}
        answers={this.state.answers}
        />
        </>
    )
  }
}
