import  React,{Fragment} from 'react'
import Navbar from './Navbar'

const Project = ({ projects }) => {
    return(
        <div>
          {projects.map((project) => (
              <Fragment>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{project.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{project.description}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Keywords : {project.keywords}</h6>
                <a href ={project.app} target="_blank">Link</a>
                <br></br>
                <a href ={project.git} target="_blank">Source code</a>
              </div>
            </div>
            </Fragment>
          ))}
        </div>
    )
}
export default Project