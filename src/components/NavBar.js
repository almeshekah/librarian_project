// Styling
import {  NavItem,    } from "../styles";




const NavBar = () => {
  return (
    <nav className="navbar navbar-expand" style={{ textAlign:"center"  }}>
      
      <div className="navbar-nav ml-auto">
      <NavItem className="nav-item" to="/MemberList">
           Member List
        </NavItem>

        <NavItem className="nav-item" to="/BookList">
           Book List
        </NavItem>

        <NavItem className="nav-item" to="/NewMember">
          Add Member
        </NavItem>

        <NavItem className="nav-item" to="/NewBook">
          Add Book
        </NavItem>

        
        <NavItem className="nav-item" to="/">
          Home
        </NavItem>

        
        

        

      </div>
    </nav>
  );
};

export default NavBar;