import React, { Component } from "react";
import './styles/App.css';
import General from "./components/General";
import School from "./components/School";
import Work from "./components/Work";

const infoArray =
  {
    user: '',
    email:'',
    phone: ''
  }
;

const schoolArray =[
  {
    school: '',
    location:'',
    achievement: '',
    start: '',
    finish: ''
  }
];

const workArray =[
  {
    name: '',
    position:'',
    location: '',
    start: '',
    finish: ''
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      info:  infoArray,
      academy: schoolArray,
      work: workArray,
      showInfoForm: false,
      showSchoolForm: false,
      showWorkForm: false
    };
    this.onSubmitInfo = this.onSubmitInfo.bind(this);
    this.onSubmitSchool= this.onSubmitSchool.bind(this);
    this.onSubmitWork= this.onSubmitWork.bind(this);
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
    user = this.refs.user.value,
    email = this.refs.email.value,
    phone = this.refs.phone.value;

    this.setState({
      info:  {
        user,
        email,
        phone
      },
      showInfoForm: false,
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
      }],
    showSchoolForm: false,

    });
  }

  handleDeleteSchool = (index) => {
    const newArr = [...this.state.academy];
    newArr.splice(index, 1);
    this.setState({academy: newArr});
}


  onSubmitWork = (e) => {
    e.preventDefault();
    const
    { work } = this.state,
    name = this.refs.name.value,
    position = this.refs.position.value,
    location = this.refs.location.value,
    start = this.refs.start.value,
    finish = this.refs.finish.value;


    this.setState({
      work: [...work, {
        name,
        position,
        location,
        start,
        finish
      }],
    showWorkForm: false,
    });

  }

  handleDeleteWork = (index) => {
    const newArr = [...this.state.work];
    newArr.splice(index, 1);
    this.setState({work: newArr});
}

openInfoForm = () => {
  const
  {showInfoForm} = this.state;
  this.setState({showInfoForm: !showInfoForm});

}
openSchoolForm = () => {
  const
  {showSchoolForm} = this.state;
  this.setState({showSchoolForm: !showSchoolForm});

}
openWorkForm = () => {
  const
  {showWorkForm} = this.state;
  this.setState({showWorkForm: !showWorkForm});

}

  render() {
    const { info } = this.state;
    const { academy } = this.state;
    const { work } = this.state;
    const { showInfoForm, showSchoolForm, showWorkForm } = this.state;

    console.log('info', this.state.info);
    console.log('school', this.state.academy);
    console.log('work', this.state.work);



  return (
    <div>
    <General info={info} />
    <button onClick={this.openInfoForm}>
     {showInfoForm ? 'Close Form' : 'Add Info'}
    </button>
    {showInfoForm &&
    <form onSubmit={this.onSubmitInfo}>
    <input type="text" ref="user" placeholder="name" />
    <input type="text" ref="email" placeholder="email" />
    <input type="text" ref="phone" placeholder="phone" />

    <button type="submit">
    add info
    </button>
    </form>
}

    <School academy={academy} onDelete={this.handleDeleteSchool} />
    <button onClick={this.openSchoolForm}>
     {showSchoolForm ? 'Close Form' : 'Add School'}
    </button>
    {showSchoolForm &&
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
}
    <Work work={work} onDelete={this.handleDeleteWork} />
    <button onClick={this.openWorkForm}>
     {showWorkForm ? 'Close Form' : 'Add Work'}
    </button>
    {showWorkForm &&
    <form onSubmit={this.onSubmitWork}>
    <input type="text" ref="name" placeholder="name" />
    <input type="text" ref="position" placeholder="position" />
    <input type="text" ref="location" placeholder="location" />
    <input type="text" ref="start" placeholder="start" />
    <input type="text" ref="finish" placeholder="finish" />


    <button type="submit">
    add work
    </button>
    </form>
  }
    </div>
  );
}
}

export default App;
