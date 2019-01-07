import React, { Component } from 'react';
import HeaderComponent from '../header/HeaderComponent';

class CreateDiskPage extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A naje was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              Name:
            <input type="text" placeholder="enter name" onChange={this.handleChange} />
            </label>
          </p><p>
            <label>
              Company:
            <input type="text" placeholder="enter company name" onChange={this.handleChange} />
            </label>
          </p><p>
            <label>
              Year:
            <input type="text" placeholder="enter year" onChange={this.handleChange} />
            </label>
          </p>
          <input type="submit" placeholder="Submit" />
        </form>
      </div>
    );
  }
}
export default CreateDiskPage;