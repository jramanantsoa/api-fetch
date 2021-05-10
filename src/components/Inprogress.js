import  React,{Fragment} from 'react'
import Navbar from './Navbar'

const Inprogress = ({ inprogress }) => {
    return(
        <div>
            <h2>In progress</h2>
          {inprogress.map((el) => (
              <Fragment>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{el.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{el.description}</h6>
              </div>
            </div>
            </Fragment>
          ))}
        </div>
    )
}
export default Inprogress