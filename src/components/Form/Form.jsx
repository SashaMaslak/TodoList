import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    surName: '',
    experience: 'junior',
    licence: false,
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault(this.props);
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenceChange = e => {
    this.setState({ licence: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({ name: '', surName: '' });
  };

  nameInputId = shortid.generate();
  surNameInputId = shortid.generate();

  render() {
    return (
      <div style={{ border: '1px solid black', padding: '8px' }}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="this.nameInputId">
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
            />
          </label>
          <br />
          <br />
          <label htmlFor="this.surNameInputId">
            SurName
            <input
              type="text"
              name="surName"
              value={this.state.surName}
              onChange={this.handleChange}
              id={this.surNameInputId}
            />
          </label>
          <br />
          <br />
          <p>Your level:</p>
          <label>
            <input
              type="radio"
              name="experience"
              value="junior"
              onChange={this.handleChange}
              checked={this.state.experience === 'junior'}
            />
            Junior
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="experience"
              value="middle"
              onChange={this.handleChange}
              checked={this.state.experience === 'middle'}
            />
            Middle
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="experience"
              value="senior"
              onChange={this.handleChange}
              checked={this.state.experience === 'senior'}
            />
            Senior
          </label>
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              name="licence"
              checked={this.state.licence}
              onChange={this.handleLicenceChange}
            />
            I agree with rules
          </label>
          <br />
          <br />
          <button type="submit" disabled={!this.state.licence}>
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
