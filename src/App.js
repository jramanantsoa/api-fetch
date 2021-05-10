import React, { Component, Fragment } from "react";
import Navbar from "./components/Navbar";
import Section from "./Section";
import Chart from "./components/Chart";
import Links from "./components/Links";

class App extends Component {
  state = {
    done: [],
    progress: [],
    ideas: [],
  };

  //when the compotent is mounted, fetches data from API and copies JSON into state as projects
  componentDidMount() {
    fetch("https://djaaango.herokuapp.com/projects/done")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ done: data });
      })
      .catch(console.log);

    fetch("https://djaaango.herokuapp.com/projects/progress")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ progress: data });
      })
      .catch(console.log);

    fetch("https://djaaango.herokuapp.com/projects/idea")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ ideas: data });
      })
      .catch(console.log);
  }
  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <center>
          <p>
            Don't panick if an app takes time to load ! Heroku can be slow
            sometimes :)
          </p>
          <p>
            This app is made with REACT and fetches data from a{" "}
            <a
              target="_blank"
              href="https://djaaango.herokuapp.com/"
              rel="noreferrer"
            >
              Django REST API
            </a>{" "}
            (
            <a
              href="https://github.com/jramanantsoa/api-fetch"
              target="_blank"
              rel="noreferrer"
            >
              Source code here
            </a>
            )
          </p>
        </center>
        <div className="container">
          <div className="row">
            <div className="col">
              <Section data={this.state.done} title="Done" color="#D1C4E9" />
            </div>
            <div className="col">
              <Section
                data={this.state.progress}
                title="In progress"
                color="#BBDEFB"
              />
            </div>
            <div className="col">
              <Section data={this.state.ideas} title="Ideas" color="#F8BBD0" />
            </div>
          </div>
        </div>
        <Chart
          done={this.state.done.length}
          progress={this.state.progress.length}
          ideas={this.state.ideas.length}
        ></Chart>
        <Links></Links>
      </Fragment>
    );
  }
}
export default App;
