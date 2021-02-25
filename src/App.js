import React, { Component } from "react";
import "./styles/App.css";
import General from "./components/General";
import School from "./components/School";
import Work from "./components/Work";

const infoArray = {
  user: "",
  address: "123 somwhere, BC",
  email: "email@email.com",
  phone: "888-222-2222",
};
const schoolArray = [
  {
    school: "Code Secondary",
    location: "Vancouver",
    achievement: "Diploma",
    start: "June 2011",
    finish: "June 2012",
  },
];

const workArray = [
  {
    name: "Lorem ipsum",
    position: "Manager",
    location: "London",
    description: "lorem ipsum doler",
    start: "june 2012",
    finish: "march 2025",
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      info: infoArray,
      academy: schoolArray,
      work: workArray,
      showInfoForm: false,
      showSchoolForm: false,
      showWorkForm: false,
      preview: true,
    };
    this.onSubmitInfo = this.onSubmitInfo.bind(this);
    this.onSubmitSchool = this.onSubmitSchool.bind(this);
    this.onSubmitWork = this.onSubmitWork.bind(this);
  }

  onSubmitInfo = (e) => {
    e.preventDefault();
    const { info } = this.state,
      user = this.refs.user.value,
      address = this.refs.address.value,
      email = this.refs.email.value,
      phone = this.refs.phone.value;

    this.setState({
      info: {
        user,
        address,
        email,
        phone,
      },
      showInfoForm: false,
    });
  };

  onSubmitSchool = (e) => {
    e.preventDefault();
    const { academy } = this.state,
      school = this.refs.school.value,
      location = this.refs.location.value,
      achievement = this.refs.achievement.value,
      start = this.refs.start.value,
      finish = this.refs.finish.value;

    this.setState({
      academy: [
        ...academy,
        {
          school,
          location,
          achievement,
          start,
          finish,
        },
      ],
      showSchoolForm: false,
    });
  };

  handleDeleteSchool = (index) => {
    const newArr = [...this.state.academy];
    newArr.splice(index, 1);
    this.setState({ academy: newArr });
  };

  onSubmitWork = (e) => {
    e.preventDefault();
    const { work } = this.state,
      name = this.refs.name.value,
      position = this.refs.position.value,
      location = this.refs.location.value,
      description = this.refs.description.value,
      start = this.refs.start.value,
      finish = this.refs.finish.value;

    this.setState({
      work: [
        ...work,
        {
          name,
          position,
          location,
          description,
          start,
          finish,
        },
      ],
      showWorkForm: false,
    });
  };

  handleDeleteWork = (index) => {
    const newArr = [...this.state.work];
    newArr.splice(index, 1);
    this.setState({ work: newArr });
  };

  openInfoForm = () => {
    const { showInfoForm } = this.state;
    this.setState({ showInfoForm: !showInfoForm });
  };
  openSchoolForm = () => {
    const { showSchoolForm } = this.state;
    this.setState({ showSchoolForm: !showSchoolForm });
  };
  openWorkForm = () => {
    const { showWorkForm } = this.state;
    this.setState({ showWorkForm: !showWorkForm });
  };

  preview = () => {
    const { preview } = this.state;
    this.setState({ preview: !preview });
  };

  render() {
    const {
      info,
      academy,
      work,
      showInfoForm,
      showSchoolForm,
      showWorkForm,
      preview,
    } = this.state;

    return (
      <div>
        <button className="preview-button" onClick={this.preview}>
          {preview ? "Preview" : "Work Mode"}
        </button>
        <General info={info} />
        {preview && (
          <div className="form-button-cont">
            <button onClick={this.openInfoForm}>
              {showInfoForm ? "Close Form" : "Add/Update Info"}
            </button>
          </div>
        )}
        {showInfoForm && preview && (
          <form onSubmit={this.onSubmitInfo}>
            <input type="text" ref="user" placeholder="name" required />
            <input
              type="text"
              ref="address"
              placeholder="full address"
              required
            />
            <input type="email" ref="email" placeholder="email" required />
            <input type="tel" ref="phone" placeholder="phone" required />

            <button type="submit">add info</button>
          </form>
        )}

        <School
          academy={academy}
          onDelete={this.handleDeleteSchool}
          preview={preview}
        />
        {preview && (
          <div className="form-button-cont">
            <button onClick={this.openSchoolForm}>
              {showSchoolForm ? "Close Form" : "Add School"}
            </button>
          </div>
        )}
        {showSchoolForm && preview && (
          <form onSubmit={this.onSubmitSchool}>
            <input type="text" ref="school" placeholder="school" required />
            <input type="text" ref="location" placeholder="location" required />
            <input
              type="text"
              ref="achievement"
              placeholder="achievement"
              required
            />
            <input type="date" ref="start" placeholder="start" required />
            <input type="date" ref="finish" placeholder="finish" required />
            <button type="submit">add school</button>
          </form>
        )}
        <Work work={work} onDelete={this.handleDeleteWork} preview={preview} />
        {preview && (
          <div className="form-button-cont">
            <button onClick={this.openWorkForm}>
              {showWorkForm ? "Close Form" : "Add Work"}
            </button>
          </div>
        )}
        {showWorkForm && preview && (
          <form onSubmit={this.onSubmitWork}>
            <input type="text" ref="name" placeholder="name" required />
            <input type="text" ref="position" placeholder="position" required />
            <input type="text" ref="location" placeholder="location" required />
            <input type="date" ref="start" placeholder="start" required />
            <input type="date" ref="finish" placeholder="finish" required />
            <textarea
              type="text"
              ref="description"
              placeholder="description"
              required
            />
            <button type="submit">add work</button>
          </form>
        )}
      </div>
    );
  }
}

export default App;
