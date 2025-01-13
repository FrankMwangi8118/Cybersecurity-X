import "./NavBar.css"
import logo from "../../assets/logo.png"

const NavBar = () => {
  return (
      <div className="navbar">
          <div className="logo">
              <img src={logo} alt="logo" />

          </div>
          <div className="header">
              <ul className="menu">
                  <li className="Home">[Home]</li>
                  <li className="About">[About]</li>
                  <li className="Tools">[Tools]</li>
                  <li className="Forums">[Forums]</li>
                  <li className="Contact">[Get in touch]</li>
              </ul>
          </div>




      </div>
  );
}
export default NavBar;