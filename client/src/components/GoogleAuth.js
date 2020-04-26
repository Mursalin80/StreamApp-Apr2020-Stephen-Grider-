import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../app/actions";

class GoogleAuth extends Component {
  componentDidMount() {
    if (window.gapi) {
      window.gapi.load("client:auth2", () => {
        window.gapi.client
          .init({
            clientId:
              "818028772609-f3sl9vfikhp00u8q6hkb3cq0slgv498k.apps.googleusercontent.com",
            scope: "email",
          })
          .then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthStatusChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthStatusChange);
          });
      });
    } else {
      console.log('Google auth api "gapi" not loaded ');
    }
  }

  onAuthStatusChange = (isSignedIn) => {
    if (isSignedIn) {
      let userId = this.auth.currentUser.get().getId();
      this.props.signIn(userId);
    } else {
      this.props.signOut();
    }
  };

  onSignInAuth = () => {
    this.auth.signIn();
  };

  onSignOutAuth = () => {
    this.auth.signOut();
  };

  renderAuthStatus() {
    let { isSignIn } = this.props.auth;
    if (isSignIn === null) {
      return null;
    } else if (isSignIn) {
      return (
        <button onClick={this.onSignOutAuth} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInAuth} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthStatus()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
