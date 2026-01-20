import { Sidebar, Nav, NavItem, NavLink } from "@asphalt-react/sidebar"
import react from "@vitejs/plugin-react-swc";

function SidebarMenu () {

  return (
    <Sidebar>
      <Nav>
        <NavItem>
          <NavLink active asProps={{ href: "example.com" }}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink asProps={{ href: "example.com/dashboard" }}>Dashboard</NavLink>
        </NavItem>
      </Nav>
    </Sidebar>
  );
}

export default SidebarMenu;