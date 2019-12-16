import React from 'react';
import './GoogleAuth.css';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component{
    
  componentDidMount(){
    window.gapi.load('client:auth2', () =>{
      window.gapi.client.init({
        clientId: '173773400559-b2rjhll4ofqe67na113an68pl8tb1799.apps.googleusercontent.com',
        scope: 'email'
      }).then(()=>{
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange); 
      });
    });
  }

  onAuthChange = (isSignedIn) =>{
    if(isSignedIn){
      this.props.signIn();
    }else{
      this.props.signOut();
    }
  }

  onSignInClick = () =>{
    this.auth.signIn();
  }
  
  onSignOutClick = () =>{
    this.auth.signOut();
  }

  renderAuthButton(){
    if(this.props.isSignedIn === null){
      return null;
    }else if(this.props.isSignedIn){
      return(
        <button className="loginBtn loginBtn--google" onClick={this.onSignOutClick}>
          Log Out
        </button>
      )
    }else{
      return(
        <button className="loginBtn loginBtn--google" onClick={this.onSignInClick}>
            Log In
        </button>
      )
    }
  }

  render(){
    return(
      <div>
        {this.renderAuthButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return { isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);