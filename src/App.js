import React, {Component, Fragment} from 'react';
import Navbar from './components/Navbar';
import Done from './components/Done'
import Inprogress from './components/Inprogress'
import Section from './Section';
import Chart from 'chart.js/auto';
    
    class App extends Component {
      state = {
        done:[],
        progress:[],
        ideas: []
      }

      //when the compotent is mounted, fetches data from API and copies JSON into state as projects
      componentDidMount(){
        fetch('https://djaaango.herokuapp.com/projects/done')
        .then(res => res.json())
        .then((data)=>{
          this.setState({done : data})
        })
        .catch(console.log)


        fetch('https://djaaango.herokuapp.com/projects/progress')
        .then(res => res.json())
        .then((data)=>{
          this.setState({progress : data})
        })
        .catch(console.log)

        fetch('https://djaaango.herokuapp.com/projects/idea')
        .then(res => res.json())
        .then((data)=>{
          this.setState({ideas : data})
        })
        .catch(console.log)
      }
      render () {
        return (
          <Fragment>
          <Navbar></Navbar>
          <div className='container'>
          <div className="row">
            <div className = 'col'>
              <Section data={this.state.done} title="Done" color="#D1C4E9" />
            </div>
            <div className = 'col'>
            <Section data={this.state.progress} title="In progress" color="#BBDEFB" />
            </div>
            <div className = 'col'>
            <Section data={this.state.ideas} title="Ideas" color="#F8BBD0" />
            </div>
          </div>
          </div>
          </Fragment>
        
        )
      }
    }
    export default App