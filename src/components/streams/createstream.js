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

  onSubmitForm(formValues){
    console.log(formValues)
  }

  render(){
      return(
          <form onSubmit={this.props.handleSubmit(this.onSubmitForm)} className="ui_form">
              <Field name="title" label="Enter Title" component={this.renderInputBox}/>
              <Field name="description" label="Enter Description" component={this.renderInputBox}/>
              <button>Submit</button>
          </form>
      )
  }
}

export default reduxForm({form: 'createStream'})(CreateStream)