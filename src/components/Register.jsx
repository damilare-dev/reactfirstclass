function Register() {
  return (
    <div className="container">
    <h2 style={{textAlign:'center', fontWeight:'800'}}>Registration Form</h2>
    <form className="col-md-8 offset-2">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
      </div> <br />
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
      </div> <br />
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
      </div> <br />
      <div className="form-group form-check">
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox"/> Remember me
        </label>
      </div> <br />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
    )
}

export default Register