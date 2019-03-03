import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import {Bar} from 'react-chartjs-2'
import ModalLegend from'./ModalLegend'

export default class ExamAnswerModal extends React.Component{

   state={
       showLegend: false,
       legend: {},
   }   



   findPoints = (categories) =>{
    return categories.map(category => {
        let points = 0  
        Object.keys(this.props.answers).forEach(key =>{
           let value = this.props.answers[key]
            if(key==value.question.id && value.answer.isCorrect){
                points += 10
            } 
        })
        return points
    })
   }

   findCategories = () =>{
    let temp = []
    return this.props.questions.reduce((acc, val) =>{
        console.log(val)
        if(!temp.includes(val.category.id)){
            temp.push(val.category.id)
            acc.push(val.category)
        }
        return acc
    }, [])
   }
   

    render(){
        console.log(this.props)
        

    const categories = this.findCategories()
    console.log(categories)
    const points = this.findPoints(categories)
    console.log(points)

    const data = {
        labels: categories.map(category => category.name),
        datasets: [
            {
            label: 'Test Data',
            data: points,
            backgroundColor: '#FF6384',
            hoverBackgroundColor: 'red',
        }
    ]
}


    const legendOpts = {
        onClick: (event, item) => this.setState({ 
            showLegend: true, 
            legend: { event, item } })
      };
      
    

    const questions = this.props.questions.map((question, i ) =>{
        return(
        <p>question: {question.name}</p>
        )
    })
  return (
    <Modal
    {...this.props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Modal heading
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>Resultat</h4>
      <p>Dette er dit resultat</p>
      {questions}
      {this.state.showLegend &&
       <ModalLegend text="hello" legend={this.state.legend} />
      }
      <Bar data={data} legend={legendOpts} />
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);
}
}

