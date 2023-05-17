import Register from "./Register";

function Login() {
  return (
   <div classNameName="container">
     <h2 style={{textAlign:'center', fontWeight:'800'}}>Login</h2>
    <form className="col-md-6 offset-3">
      <div className="form-group">
        <label for="email">Email:</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
      </div> <br />

      <div className="form-group">
        <label for="password">Password:</label>
        <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
      </div> <br />

      <div className="form-group form-check">
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox"/> Remember me
        </label>
      </div> <br />

      <button type="submit" className="btn btn-primary">Login</button>
    </form>
   </div>
  )
}

export default Login