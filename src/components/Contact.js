import  React,{Fragment} from 'react'

const Contact = ({ projects }) => {
    return(
        <div>
          <center><h1>Project List</h1></center>
          {projects.map((project) => (
              <Fragment>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{project.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{project.description}</h6>
                <p class="card-text">{project.app}</p>
              </div>
            </div>
            <hr className="solid"/>
            </Fragment>
          ))}
        </div>
    )
}
export default Contact