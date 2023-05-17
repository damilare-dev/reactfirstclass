import {Link} from "react-router-dom";
function NavBar() {
  return (
//   <header>
//     <ul className='navbar'>
//         <li>
//             <Link to="/">Home</Link>
//         </li>
//         <li>
//             <Link to="/products">Products</Link>
//         </li>
//         <li>
//             <Link to="/about">About Us</Link>
//         </li>
//         <li>
//             <Link to='/services'> Services</Link>
//         </li>

//         <li>
//             <Link to='/login'>Login</Link>
//         </li>

//         <li>
//             <Link to='/register'>Register</Link>
//         </li>
//     </ul>
//   </header>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/">Home</Link>
        </li>

        <li class="nav-item">
            <Link to="/products">Products</Link>
        </li>

        <li class="nav-item">
            <Link to="/about">About</Link>
        </li>

        <li class="nav-item">
            <Link to="/services">Services</Link>
        </li>

        <li class="nav-item">
            <Link to="/login">Login</Link>
        </li>

        <li class="nav-item">
            <Link to="/register">SignUp</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar