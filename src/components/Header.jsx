import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { firstName, lastName, skillsCount } = useSelector((state) => ({
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    skillsCount: state.skills.skillsCount,
  }));

  const fullName =
    firstName && lastName ? `${firstName} ${lastName}` : "Inconnu";

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <span className='navbar-brand'>
        <img
          src='http://www.juans.work/images/react.png'
          alt='React Logo'
          style={{ width: "30px", height: "30px" }}
        />
      </span>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarContent'
        aria-controls='navbarContent'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div
        className='collapse navbar-collapse justify-content-end'
        id='navbarContent'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              className='nav-link'
              to='/profile'
              activeClassName='active'>
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
