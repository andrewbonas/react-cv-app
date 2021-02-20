import React, { Component } from "react";
import './styles/App.css';
import General from "./components/General";

const infoArray =[
  {
    name: '',
    email:'',
    phone: ''
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      info: infoArray
    };
    this.onSubmitInfo = this.onSubmitInfo.bind(this);
  }

  handleChange = (e) => {
    this.setState({
       [e.target.value]: e.target.value
    });
  }

  onSubmitInfo = (e) => {
    e.preventDefault();
    const
    { info } = this.state,
    name = this.refs.name.value,
    email = this.refs.email.value,
    phone = this.refs.phone.value;

    this.setState({
      info: [...info, {
        name,
        email,
        phone
      }]
    }, () => {
      this.refs.name.value = '';
      this.refs.email.value = '';
      this.refs.phone.value = '';
    });
  }

  render() {
    const { info } = this.state;
    console.log('message', this.state.contacts);

  return (
    <div>
    <General info={info} />
    <form onSubmit={this.onSubmitInfo}>
    <input type="text" ref="name" placeholder="name" />
    <input type="text" ref="email" placeholder="email" />
    <input type="text" ref="phone" placeholder="phone" />

    <button type="submit">
    add info
    </button>
    </form>
    </div>
  );
}
}

export default App;
