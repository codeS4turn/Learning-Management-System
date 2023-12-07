import React from 'react'




function Signup() {
  return (
    <div className='container-fluid proto '>
    <div className='row'>
    <div className='col-md-7'>
    <h1 className='my-5 py-3' style={{textAlign:'center'}}>Create your account</h1>

    <form className='w-50' style={{margin:"0 auto"}}>
    <div className="col-auto">
    <label for="inputPassword2" className="visually-hidden">Email</label>
    <input type="email" className="form-control" id="inputPassword2" placeholder="Email"/>
  </div>
      <div>
      <label for="inputPassword2" className="visually-hidden">Full Name</label>
    <input type="email" className="form-control my-4" id="inputPassword2" placeholder="Full Name "/>
      </div>

      <div>
      <label for="inputPassword2" className="visually-hidden">Password</label>
    <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
      </div>

      <label for="inputPassword2" className="visually-hidden">Confirm Password</label>
    <input type="password" className="form-control my-4" id="inputPassword2" placeholder="Confirm Password"/>

    <button className='btn btn-secondary w-100 my-2'>Create Account</button>
    <p style={{fontSize:'13px'}}>When you click on "Create Account" you agree with terms and conditions </p>
    <p className='my-5' style={{fontSize:"13px", textAlign:'center'}}>Already have an account? <span style={{fontSize:"13px"}}><a href=''>login</a></span> </p>
    </form>
    
    </div>
    <div className='col-md-5'>
    <img src='/images/learn1.avif' className='my-3' style={{height:"600px"}}/>
    
    </div>
    
    </div>
    
   
    
    </div>
  )
}

export default Signup