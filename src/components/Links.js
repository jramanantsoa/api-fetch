import React from 'react'

const Links = () => {
  return (
   <div className='row' style={{width:'25px', position:'fixed', bottom:'10%', right:"5%"}}>
       <div className='col'>
       <a href="https://www.linkedin.com/in/jessica-ramanantsoa-0978a6115/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin-in fa-3x"></i></a>
       </div>
       <div className='col'>
       <a style={{color:'#9E9E9E'}} href="https://github.com/jramanantsoa/" rel="noreferrer" target="_blank"><i className="fab fa-github fa-3x"></i></a>
       </div>
   </div>
  )
}
export default Links