import React from 'react'

export default function Login() {
  return (
    <div className="container h-100">
        <div className="row d-flex justify-content-md-center align-items-center vh-100">
          <form className="from-group m-5">
              <label htmlFor="userid" className="form-label">Username:</label>
              <input type="text" className="form-control" name='userid' id='userid'/>
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" className="form-control" name='password' id='password'/>
          </form>
        </div>
    </div>
  )
}
