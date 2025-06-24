import {Link, NavLink, Outlet } from "react-router";

export default function HelpLayout() {
  return (
    <div id="help-layout">
      <h1>Help Layout</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ipsum
        autem eveniet rem nostrum eos fugit eligendi cupiditate inventore quos?
      </p>
      <nav>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="faq">FAQ</NavLink>
      </nav>
      <Outlet/>
    </div>
  );
}
