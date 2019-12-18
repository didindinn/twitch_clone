import React, {Fragment} from 'react';
import { Field, reduxForm } from 'redux-form';
import './formStyles.css';

class CreateStream extends React.Component{
  renderInputBox({input, label}){
    return(
      <Fragment>
        <label>{label}</label>
        <input {...input} />  
      </Fragment>
    )
  }
  render(){
      return(
          <form className="ui_form">
              <Field name="title" label="Enter Title" component={this.renderInputBox}/>
              <Field name="description" label="Enter Description" component={this.renderInputBox}/>
          </form>
      )
  }
}

export default CreateStream