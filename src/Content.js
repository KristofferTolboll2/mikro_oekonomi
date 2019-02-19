import React, { Component } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Helmet} from 'react-helmet'

export default class Content extends Component {
    state= {
        darkTheme: false
    }
  render() {
      console.log(this.state.darkTheme)
    return (
      <div>
          <Helmet>
              <title>Mikroøkononoi</title>
              <link rel="preload" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/slate/bootstrap.min.css" rel="stylesheet"  integrity="sha384-FBPbZPVh+7ks5JJ70RJmIaqyGnvMbeJ5JQfEbW0Ac6ErfvEg9yG56JQJuMNptWsH" as="style"></link>
              <link rel="preload" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/minty/bootstrap.min.css" rel="stylesheet" integrity="sha384-9NlqO4dP5KfioUGS568UFwM3lbWf3Uj3Qb7FBHuIuhLoDp3ZgAqPE1/MYLEBPZYM" as="style"></link>
               {this.state.darkTheme ?
              <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/slate/bootstrap.min.css" rel="stylesheet"  integrity="sha384-FBPbZPVh+7ks5JJ70RJmIaqyGnvMbeJ5JQfEbW0Ac6ErfvEg9yG56JQJuMNptWsH" crossorigin="anonymous"></link>
            :  <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/minty/bootstrap.min.css" rel="stylesheet" integrity="sha384-9NlqO4dP5KfioUGS568UFwM3lbWf3Uj3Qb7FBHuIuhLoDp3ZgAqPE1/MYLEBPZYM" crossorigin="anonymous"></link>
               }
          </Helmet>

                   <div className="App">
                   <div class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" id="customSwitch1" onChange={(e) => this.setState((prevState => ({
         darkTheme: !prevState.darkTheme
      })))} />
      <label class="custom-control-label" for="customSwitch1">Change to Dark Theme</label>
         </div>
                <h1>My App</h1>

           
                <p>Vi løser dine ligninger og giver dig karakterstigninger</p>
                <button type="button" class="btn btn-warning">Warning</button>
            </div>
 
      </div>
    )
  }
}
