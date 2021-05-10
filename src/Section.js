import React,{Component, Fragment} from 'react'

const Section = ({title,data,color}) =>{
    return(
        <div>
            <center><h2>{title}</h2></center>
          {data.map((el) => (
              <Fragment>
            <div class="card" style={{backgroundColor: color}}>
              <div class="card-body">
                <h5 class="card-title">{el.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{el.description}</h6>
                {el.git ?
                <Fragment>
                  <h6 class="card-subtitle mb-2 text-muted">Keywords : {el.keywords}</h6>
                  <a href ={el.app} target="_blank">Link</a>
                  <br></br>
                  <a href ={el.git} target="_blank">Source code</a>
                  </Fragment>
                : <h1></h1>}
              </div>
            </div>
            <hr class ='solid'></hr>
            </Fragment>
          ))}
        </div>
    )
}
export default Section