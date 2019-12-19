import React, {Fragment} from 'react';
import { Field, reduxForm } from 'redux-form';
import './formStyles.css';
import { metaProperty } from '@babel/types';
import { formatStackTrace } from 'jest-message-util';

class CreateStream extends React.Component{
  renderError(meta){
    if(meta.touched && meta.error){
        return(
            <div>{meta.error}</div>
        );
    }
  }

  renderInputBox({input, label, meta}){
    return(
      <Fragment>
        <label>{label}</label>
        <input {...input} />  
        <div>{this.renderError(meta)}</div>
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

const validate = (formValues) =>{
    const errors = {};
    if(!formValues.titles){
        errors.title = "You must enter a title";
    }
    if(!formValues.description){
        errors.title = "You must enter a description";
    }
    return errors;
  }

export default reduxForm({form: 'createStream'})(CreateStream)