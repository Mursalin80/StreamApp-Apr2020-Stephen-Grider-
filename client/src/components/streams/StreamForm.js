import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderInput = (formProps) => {
    const { input, lable, meta } = formProps;

    return (
      <div className="field">
        <label>{lable}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  onSubmit = (formVal) => {
    this.props.onSubmit(formVal);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field name="title" component={this.renderInput} lable="Title" />
          <Field
            name="description"
            component={this.renderInput}
            lable="Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const { title, description } = formValues;
  const errors = {};
  if (!title) {
    errors.title = "You must enter a title";
  }
  if (!description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

// redux form connect
export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);

// redux connect
