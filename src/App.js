import React, {Component, Fragment} from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project'
import Footer from './components/Footer'
    
    class App extends Component {
      state = {
        projects:[]
      }

      //when the compotent is mounted, fetches data from API and copies JSON into state as projects
      componentDidMount(){
        fetch('https://djaaango.herokuapp.com/projects/')
        .then(res => res.json())
        .then((data)=>{
          this.setState({projects : data})
        })
        .catch(console.log)
      }
      render () {
        return (
          <Fragment>
          <Navbar></Navbar>
          <a href="https://djaaango.herokuapp.com/">Link to fetched API</a>
          <Project projects={this.state.projects} />
          </Fragment>
        )
      }
    }
    
    export default App