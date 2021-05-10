import React, {Component, Fragment} from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project'
import Inprogress from './components/Inprogress'
    
    class App extends Component {
      state = {
        projects:[],
        inprogress:[]
      }

      //when the compotent is mounted, fetches data from API and copies JSON into state as projects
      componentDidMount(){
        fetch('https://djaaango.herokuapp.com/projects/')
        .then(res => res.json())
        .then((data)=>{
          this.setState({projects : data})
        })
        .catch(console.log)


        fetch('https://djaaango.herokuapp.com/inprogress/')
        .then(res => res.json())
        .then((data)=>{
          this.setState({inprogress : data})
        })
        .catch(console.log)
      }
      render () {
        return (
          <Fragment>
          <Navbar></Navbar>
          <a href="https://djaaango.herokuapp.com/">Link to fetched API</a>
          <div className="row">
            <div className = 'col'>
              <Project projects={this.state.projects} />
            </div>
            <div className = 'col'>
            <Inprogress inprogress={this.state.inprogress}></Inprogress>
            </div>
          </div>
          </Fragment>
        )
      }
    }
    export default App