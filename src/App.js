import React, {Component} from 'react';
import Contact from './components/Contact'
    
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
          <Contact projects={this.state.projects} />
        )
      }
    }
    
    export default App