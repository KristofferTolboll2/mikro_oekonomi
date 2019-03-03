import React, { Component } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Helmet} from 'react-helmet'
import Calculation from './Calculations/Calculation';

export default class Content extends Component {
   

  render() {
    console.log(this.props)
    return (
      <div>
          <div className="App">
          <link rel="stylesheet" type="text/css" href={this.props.stylePath} />
          <div class="custom-control custom-switch">
         </div>
                <h1>My App</h1>
                <br /> 
                {/*lav margin her -- ikke lav afstand med br tags*/}

                <p>Vi løser dine ligninger og giver dig karakterstigninger</p>
                <button type="button" class="btn btn-warning">Warning</button>
                <Calculation />
            </div>

      </div>
    )
  }
}
