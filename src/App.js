import React, { Component } from "react";
import './styles/App.css';
import General from "./components/General";
import School from "./components/School";


const infoArray =[
  {
    name: '',
    email:'',
    phone: ''
  }
];

const schoolArray =[
  {
    school: '',
    location:'',
    achievement: '',
    start: '',
    finish: ''
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      info:  infoArray,
      academy: schoolArray
    };
    this.onSubmitInfo = this.onSubmitInfo.bind(this);
    this.onSubmitSchool= this.onSubmitSchool.bind(this);
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

  onSubmitSchool = (e) => {
    e.preventDefault();
    const
    { academy } = this.state,
    school = this.refs.school.value,
    location = this.refs.location.value,
    achievement = this.refs.achievement.value,
    start = this.refs.start.value,
    finish = this.refs.finish.value;


    this.setState({
      academy: [...academy, {
        school,
        location,
        achievement,
        start,
        finish
      }]
    }, () => {
      this.refs.school.value = '';
      this.refs.location.value = '';
      this.refs.achievement.value = '';
      this.refs.start.value = '';
      this.refs.finish.value = '';

    });
  }

  render() {
    const { info } = this.state;
    const { academy } = this.state;
    console.log('info', this.state.info);
    console.log('school', this.state.academy);


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

    <School academy={academy} />
    <form onSubmit={this.onSubmitSchool}>
    <input type="text" ref="school" placeholder="school" />
    <input type="text" ref="location" placeholder="location" />
    <input type="text" ref="achievement" placeholder="achievement" />
    <input type="text" ref="start" placeholder="start" />
    <input type="text" ref="finish" placeholder="finish" />


    <button type="submit">
    add school
    </button>
    </form>
    </div>
  );
}
}

export default App;
