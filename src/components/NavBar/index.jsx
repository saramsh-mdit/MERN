// import "./style01.css"

// import Style from "./style.css"

import Style from "./style.module.css"

const NavBar = () => {
  return <nav className={Style.navBar}>
    <p>Home</p>
    <NavItem name="Contact" link="https://fb.com" />
    <p>About</p>
  </nav>;
};
export default NavBar

const NavItem = ({name, link}) => {
  return <a 
  href={link} 
  style={{
    fontWeight:"semibold",
    color:"violet",
    display:"block",
  }}
  >{name}</a>
}