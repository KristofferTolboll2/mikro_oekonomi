import React, { Component } from 'react'

export default class Calculation extends Component {
    state = {
        showInfo: false,
        value: 0
    }
 
    render() {
   
    return (
      <div>
        
  

<div class="form-group">
  <label class="control-label">Input addons</label>
  <div class="form-group">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">&#402;</span>
      </div>
      <input type="text" class="form-control" aria-label="Calculous function" 
      onChange={(e) => this.setState({value: e.target.value}) }/>
      <div class="input-group-append">
        <span class="input-group-text">{this.state.value}</span>
      </div>
    </div>
  </div>
</div>
        <button onClick={() => this.setState((prevState => ({
         showInfo: !prevState.showInfo
      })))}>Vis info</button>


{this.state.showInfo &&
        <div class="card border-success mb-3" style={{}}>
     <div class="card-header">Header</div>
        <div class="card-body">
        <h4 class="card-title">Great Success</h4>
     <p class="card-text">Filips mor er en MILF.
     her burde være noget info om en funktion, men det her er pænt grimt tbh.
     Fuck filip
     </p>
        </div>
    </div>
        }
      </div>
    )
  }
}
